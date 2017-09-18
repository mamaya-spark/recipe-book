module.exports = (dao) => {
  const router             = require('express').Router();
  const recipeRouter       = require('./recipe');
  const shoppingListRouter = require('./shopping-list');
  const userRouter         = require('./user');

  router.use('/recipe', recipeRouter(dao));
  router.use('/shopping-list', shoppingListRouter(dao));
  router.use('/user', userRouter(dao));

  return router;
}
