const jobPostService = require('../server/jobPostService'); 

exports.createJobDetail = async (req, res) => {
  try {
    const{companyName,jobTitle,jobCategory,jobType,companyLocation,salaryRange,experience,qualification, applicationDeadline, 
      jobApplicationLink,  jobDescription }=req.body;
    const jobDetail = await jobPostService.createJobPost(companyName, 
      jobTitle, 
      jobCategory, 
      jobType, 
      companyLocation, 
      salaryRange, 
      experience, 
      qualification, 
      applicationDeadline, 
      jobApplicationLink, 
      jobDescription );
    res.status(201).json({ status: true, message:"Job posted successfully",data: jobDetail });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: 'Failed to create job detail' });
  }
};
