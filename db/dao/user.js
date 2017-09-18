module.exports = (sequelize) => {
  const User = sequelize.import('../models/User');

  return {
    //* Find by username
    findByUsername(username) {
      return User.findOne({
        where: { username }
      })
      .then(user => {
        if(user) {
          return user.toJSON();
        }

        return null;
      });
    },

    //* Update last login
    updateLastLogin(userId) {
      return User.findById(userId)
        .then(user => user.update({
          last_login: Date.now()
        }))
        .then(updatedUser => updatedUser.toJSON());
    },
  }
}
