import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema({
    deptID:{
        type:String,
        required:[true,"Please Enter Department ID"]
    },
    deptDescription:{
        type:String,
        required:[true,"Please Enter Department Name"]
    },
    deptHead:{
        type:String,
        required:[true,"Please Enter Department Head"]
    },
    deptStatus:{
        type:Boolean
    }
})

export default mongoose.model('department',departmentSchema);