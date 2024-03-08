const recentJobService = require('../server/recentjobService');

exports.getRecentJobs = async (req, res, next) => {
    try {
        
        const recentJobs = await recentJobService.fetchRecentJobs();
        console.log(recentJobs);
        
        res.status(200).json({ status: true, message: "Recent jobs fetched successfully", data: recentJobs });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, message: "Server error" });
    }
};
