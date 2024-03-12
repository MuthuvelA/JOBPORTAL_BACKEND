const employeeDetailModel =require('../model/employeeDetailModel');
class employerdetailService{
    static async createEmployerProfile(companyname,employername,employermail,employermobile,companyaddress,employeedesignation) {
        try {
            const createEmployerProfile = new employeeDetailModel({ companyname, employername, employermail,employermobile,companyaddress,employeedesignation });
            return await createEmployerProfile.save();
        } catch (err) {
            throw err;
        }
    }
}
module.exports=employerdetailService;