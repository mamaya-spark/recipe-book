module.exports = (sequelize) => {
  const Recipe     = sequelize.import('../models/Recipe');
  const Ingredient = sequelize.import('../models/Ingredient');
  const Direction  = sequelize.import('../models/Direction');
  const Note       = sequelize.import('../models/Note');

  return {

  }
}
