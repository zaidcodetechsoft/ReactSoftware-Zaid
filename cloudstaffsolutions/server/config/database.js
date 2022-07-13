import mongoose from 'mongoose';


const connectDataBase = ()=>{
    mongoose.connect(process.env.DBURI, {useNewUrlParser:true, useUnifiedTopology:true}).then((data)=>{
        console.log(`Mongo DB Connected ${data.connection.host}`);
    }).catch((err)=>{
        console.log(err)
    })
}

export default connectDataBase;

// module.exports = connectDataBase;