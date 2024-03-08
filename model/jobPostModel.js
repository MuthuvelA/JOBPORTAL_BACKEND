const mongo = require('mongoose');
const db = require('../config/db');
const { Schema }=mongo;

const jobDetailSchema = new Schema({
  companyName: String,
  companyWebsite: String,
  jobTitle: String,
  jobCategory: String,
  jobType: String,
  companyLocation: String,
  salaryRange: String,
  experience: String,
  qualification: String,
  applicationDeadline: String,
  jobApplicationLink: String,
  jobDescription: String
});

const JobDetail = db.model('JobpostDetail', jobDetailSchema);

module.exports = JobDetail;
