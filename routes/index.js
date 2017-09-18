module.exports = (dao) => {
  const router       = require('express').Router();
  const publicRouter = require('./public');
  const apiRouter    = require('./api/v1');

  router.use('', publicRouter(dao));
  router.use('/api/v1', apiRouter(dao));

  return router;
}
