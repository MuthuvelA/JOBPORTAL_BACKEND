const JobPostModel = require('../model/jobPostModel');

class JobPostService {
  static async createJobPost(companyName, jobTitle, jobCategory, jobType, companyLocation, salaryRange, experience, qualification, applicationDeadline, jobApplicationLink, jobDescription) {
    try {
      const newJobPost = new JobPostModel({ 
        companyName, 
        jobTitle, 
        jobCategory, 
        jobType, 
        companyLocation, 
        salaryRange, 
        experience, 
        qualification, 
        applicationDeadline, 
        jobApplicationLink, 
        jobDescription 
      });
      return await newJobPost.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = JobPostService;
