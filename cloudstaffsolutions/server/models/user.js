import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    empID:{
        type:String
    },
    userID:{
        type:String
    },
    Password:{
        type:String
    }
})

export default mongoose.model('users',userSchema);