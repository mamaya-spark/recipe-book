module.exports = (dao) => {
  const router   = require('express').Router();

  //* Route       - POST /login
  //* Description - Allows a user to log in.
  //* Body        - { username, password }
  router.post('/login',
    (req, res) => {
      const authUtil               = require('../util/auth');
      const { username, password } = req.body;

      //* Find user by username
      console.log(`\n==> Searching for user: ${username}`);
      dao.user.findByUsername(username)
        .then(user => {
          if(user) {
            //* Validate user's password
            if(authUtil.validatePass(user.password, password)) {
              //* Update user's last login timestamp
              dao.user.updateLastLogin(user.id)
                .then(user => {
                  //* Save user to current session
                  req.session.user = {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    role: user.role,
                    active: user.active,
                    iss: '@sparkcognition',
                  }

                  //* Issue user a new jwt token
                  req.session.jwt = authUtil.generateJWT(req.session.user);

                  //* Success response
                  console.log(`\n==> ${user.username} is logged in!`);
                  res.json({
                    jwt: req.session.jwt,
                    user: req.session.user,
                  });
                });
            } else {
              console.log(`\n==> Incorrect password for ${username}`);
              return res.sendStatus(401);
            }
          } else {
            console.log(`\n==> Unable to find user: ${username}`);
            return res.sendStatus(401);
          }
        });
    });

  return router;
}
