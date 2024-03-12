const employerdetailService = require('../server/employerdetailService');

exports.createEmployerProfile = async (req, res, next) => {
    try {
        console.log(req.body);
        const { companyname,employername,employermail,employermobile,companyaddress,employeedesignation } = req.body;
        
        const employerProfile = await employerdetailService.createEmployerProfile(companyname,employername,employermail,employermobile,companyaddress,employeedesignation);
        res.status(201).json({ status: true, message: "Employer profile created successfully", data: employerProfile });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, message: "Server error" });
    }
};
