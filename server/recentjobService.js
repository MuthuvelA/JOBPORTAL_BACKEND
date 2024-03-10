const recentjobModel = require('../model/recentJobModel');

class recentjobService {
    static async fetchRecentJobs() {
        try {
            const recentJobs = await recentjobModel.find(); 
            return recentJobs;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = recentjobService;
