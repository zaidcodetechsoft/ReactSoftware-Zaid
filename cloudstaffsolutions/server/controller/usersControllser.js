import User from '../models/user.js'



export function findOneUser(req, res, next){
    const { email, password}=req.body
    User.findOne({email: email},(err, user)=>{
        if(user){
            if(password === user.Password){
                res.send({message:'User Successfully Loged In!...', user: user})
            }else{
                res.send({message:'Password did not match!...'})
            }
        }else{
            res.send({message:'User Not Found!...'})
        }
    })
}
// Add Employee Information --Admin
export function createUser(req,res,next){
    const user = User.create(req.body).then((data)=>{
        res.status(201).json({
            success:true,
            data
        })    
    }).catch((err)=>{
        res.status(404).json({
            success:false,
            err    
        })
    })
}

// Get Employee Information --Admin
export function getAllUsers(req,res){
    const user =  User.find().then((data)=>{
        res.status(200).json({
            success:true,
            data
        })    
    }).catch((err)=>{
        res.stutus(404).json({
            success:false,
            err    
        })
    })
}

// // Update Employee --Admin

export function updateUser (req,res, next){
    let employee = Employee.findById(req.params.id).then((data)=>{
        if(!data){
            return res.status(500).json({
                success:false,
                message:"Employee Not Found"
            })
        }    
    }).catch((err)=>{
        success:false,
        err
    })
    employee = Employee.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    }).then((data=>{
        res.status(200).json({
            success:true,
            data
        })    
    })).catch((err)=>{
        success:false,
        err
    })
    
    
}