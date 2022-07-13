import Employee from '../models/employeeModel.js'


// Add Employee Information --Admin
export function createEmployee(req,res,next){
    const {empID,
        empName,
        empDepartment,
        empDesignation,
        empIdentity,
        empContactNo,
        empEmergencyContactPerson,
        empEmergencyContactNo,
        empAddress,
        empSalary,
        empYearlySalary,
        empTaxSlab,
        empTaxPercentage,
        empTaxAmount,
        empTaxLeaveInCashment}=req.body


    const employee = new Employee({
        empID,
        empName,
        empDepartment,
        empDesignation,
        empIdentity,
        empContactNo,
        empEmergencyContactPerson,
        empEmergencyContactNo,
        empAddress,
        empSalary,
        empYearlySalary,
        empTaxSlab,
        empTaxPercentage,
        empTaxAmount,
        empTaxLeaveInCashment
    })
    employee.save((err, employee)=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:'Employee Sucessfully Added!...', employee: employee})
        }
    })    





    // const employee = Employee.create(req.body).then((data)=>{
    //     res.status(201).json({
    //         success:true,
    //         data
    //     })
    // }).catch((err)=>{
    //     res.status(404).json({
    //         success:false,
    //         err    
    //     })
    // })
}

// Get Employee Information --Admin
export function getAllEmployees(req,res){
    const employees =  Employee.find().then((data)=>{
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

export function updateEmployee (req,res, next){
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