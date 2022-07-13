import Department from '../models/departmentModel.js';

// Add Employee Information --Admin
export function createDepartment (req, res, next){
    const {deptID,
    deptDescription,
    deptHead} = req.body

    const department = new Department({
        deptID,
        deptDescription,
        deptHead
    })
    department.save((err, department)=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:'Employee Sucessfully Added!...', department: department})
        }
    })

    // const department = Department.create(req.body).then((data)=>{
    //     res.status(201).json({
    //         success:true,
    //         data
    //     })
    // }).catch((err)=>{
    //     console.log(err)
    // });
}

// Get Employee Information --Admin
export function getAllDepartments (req,res){
    const department = Department.find().then((data)=>{
        res.send(data)
    //     res.status(200).json({
    //         success:true,
    //         data
    // })
    }).catch((err)=>{
        console.log(err)
    });
}

// Update Employee --Admin
export function updateDepartment  (req,res,next){
    let department = Department.findById(req.params.id).then((data)=>{
        // console.log(data)
        if(!data){
            return res.status(500).json({
                success:false,
                message:"Employee Not Found"
            })        
        }
        department =  Department.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        }).then((data)=>{
            res.status(200).json({
                success:true,
                data
            })    
        }).catch((err)=>{
            console.log(err)
        });
                
    }).catch((err)=>{
        res.status(404).json({
            success:false,
            err
        })
    })
}