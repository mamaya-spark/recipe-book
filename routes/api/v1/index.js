module.exports = (dao) => {
  const router             = require('express').Router();
  const recipeRouter       = require('./recipe');
  const shoppingListRouter = require('./shopping-list');
  const userRouter         = require('./user');
  const ejwt               = require('express-jwt');
  const authUtil           = require('../../../util/auth');

  router.use(ejwt({ secret: authUtil.encodeSecret() }));

  //* Route       - POST /api/v1/logout
  //* Description - Allows a user to log out.
  router.post('/logout',
    (req, res) => {
      req.session.destroy();
      console.log(`\n==> ${req.session.user.username} logged out.`);

      //* Success response
      req.json({ end_session: true });
    });

  router.use('/recipe', recipeRouter(dao));
  router.use('/shopping-list', shoppingListRouter(dao));
  router.use('/user', userRouter(dao));

  return router;
}
