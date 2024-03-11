const mongoose = require('mongoose');
const db = require('../config/db');

const recentJobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  applicationLink:{
    type: String,
    required:true
  }
});

const RecentJobModel = db.model('RecentJob', recentJobSchema, 'jobpostdetails');

module.exports = RecentJobModel;
