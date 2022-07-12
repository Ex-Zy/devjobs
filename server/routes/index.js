const { Router } = require("express");
const router = Router();
const JobsController = require('../controllers/jobs.controller.js');

router.get("/jobs", JobsController.getAllJobs);
router.get("/jobs/:id", JobsController.getOneJob);

module.exports = router;
