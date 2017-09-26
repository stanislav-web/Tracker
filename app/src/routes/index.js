const router = require('koa-router')();
const body = require('koa-body');

const {getJobId, getJobs, createJob, updateJob, removeJob} = require('../controllers');

router
  .get('/jobs', getJobs)
  .get('/jobs/:id', getJobId)
  .post('/jobs/', body(), createJob)
  .put('/jobs/:id', body(), updateJob)
  .delete('/jobs/:id', removeJob);

module.exports = {
  routes () {
    return router.routes();
  },
  allowedMethods () {
    return router.allowedMethods();
  }
};