import mongoose from 'mongoose';

const taxesSchema = new mongoose.Schema({
    taxID:{
        type:String,
        required:[true,"Please Enter Department ID"]
    },
    taxDescription:{
        type:String,
        required:[true,"Please Enter Department Name"]
    },
    taxSlab:{
        type:String,
        required:[true,"Please Enter Department Head"]
    },
    extraAmount:{
        type:Number,
        required:[true,"Please Enter Department Head"]
    },
    Minimum:{
        type:Number,
        required:[true,"Please Enter Department Head"]
    },
    Maximum:{
        type:Number,
        required:[true,"Please Enter Department Head"]
    },
    taxStatus:{
        type:Boolean
    }
})

export default mongoose.model('taxes',taxesSchema);