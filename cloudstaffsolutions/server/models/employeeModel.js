import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    empID:{
        type:String
    },
    empName:{
        type:String,
        required:[true,"Please Enter Employee Name"]
    },
    empDepartment:{
        type:String,
        required:[true,"Please Enter Employee Department"]
    },
    empDesignation:{
        type:String,
        required:[true,"Please Enter Employee Designation"]
    },
    empIdentity:{
        type:String,
        required:[true,"Please Enter Employee Identity"]
    },
    empContactNo:{
        type:String,
        required:[true,"Please Enter Contact No"]
    },
    empEmergencyContactPerson:{
        type:String,
        required:[true,"Please Enter Emergency Contact Person"]
    },
    empEmergencyContactNo:{
        type:String,
        required:[true,"Please Enter Emergency Contact No"]
    },
    empAddress:{
        type:String,
        required:[true,"Please Enter Address"]
    },
    empSalary:{
        type:Number,
        required:[true,"Please Enter Employee Salary"]
    },
    empStatus:{
        type:Boolean
    },
    empYearlySalary:{
        type:Number,
        required:[true,"Please Enter EmpID"]
    },
    empTaxSlab:{
        type:String,
        required:[true,"Please Enter EmpID"]
    },
    empTaxPercentage:{
        type:Number,
        required:[true,"Please Enter EmpID"]
    },
    empTaxAmount:{
        type:Number
    },
    empTaxLeaveInCashment:{
        type:Boolean
    }
})

export default mongoose.model('employee',employeeSchema);