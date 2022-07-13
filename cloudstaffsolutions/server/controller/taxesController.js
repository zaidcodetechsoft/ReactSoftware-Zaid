import Taxes from '../models/taxesModel.js'



export function createTaxes(req,res,next){
    let taxStatus=true
    const {taxID,
        taxDescription,
        taxSlab,
        extraAmount,
        Minimum,
        Maximum}=req.body


    const taxes = new Taxes({
        taxID,
        taxDescription,
        taxSlab,
        extraAmount,
        Minimum,
        Maximum,
        taxStatus
    })
    taxes.save((err, taxes)=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:'Employee Sucessfully Added!...', taxes: taxes})
        }
    })    

}

// Get Employee Information --Admin
export function getAllTaxes(req,res){
    const taxes =  Taxes.find().then((data)=>{
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

export function updateTaxes (req,res, next){
    let taxes = Taxes.findById(req.params.id).then((data)=>{
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
    taxes = Taxes.findByIdAndUpdate(req.params.id, req.body,{
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