const mongo = require('mongoose');
const db = require('../config/db');

const { Schema } = mongo;

const employeedetailSchema = new Schema({
    companyname: {
        type: String,
        required: true
    },
    employername: {
        type: String,
        required: true,
    },
    employermail: {
        type: String,
        required: true
    },
    employermobile: {
        type: String,
        required: true
    },
    companyaddress: {
        type: String,
        required: true
    },
    employeedesignation: {
        type: String,
        required: true
    }
});

const EmployerDetailModel = db.model("EmployerDetails", employeedetailSchema);

module.exports = EmployerDetailModel;
