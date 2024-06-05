import express from 'express'
import {Patient} from '../models/patientModel.js'
const router = express.Router()

// Get all doctors
router.get('/',async (req,res)=>{
try{
  const patients =await Patient.find({})
  res.status(200).json({patients})
}
catch(error){
  res.status(500).json({message:error.message})
}
})

// add a new doctor
router.post('/add',async (req,res)=>{
try{
const newPatient =new Patient(
  {
    name:req.body.name,
    age:req.body.age,
    gender:req.body.gender
  }
)
  const savedPatient =await newPatient.save()
  res.status(200).json({savedPatient})
}
catch(error){
  res.status(500).json({message:error.message})
}

})
// delete a doctor
router.delete('/delete/:id',async (req,res)=>{
  const patientId = req.params.id
  try{
    const deletedPatient = await Patient.findByIdAndDelete(patientId)
    if(deletedPatient){
      res.status(200).json({message:'patient record deleted succesfully'})
    } else {
     return res.status(404).json({message:"patient record not found"})
    }
  }
  catch(error){
    res.status(500).json({message:error.message})

  }
})

// update a doctor data
  router.put('/update/:id',async (req,res)=>{
    const patientId = req.params.id
    const updatedPatient = {
      name:req.body.name,
      age:req.body.age,
      gender:req.body.gender
    }
  try{
   
     const updatedpatient = await Patient.findByIdAndUpdate(patientId,updatedPatient)
     if(updatedpatient){
      res.status(200).json({message:'patient record updated succesfully'})
     } else{
    return  res.status(404).json({message:'patient record not found'})
     }

  }
  catch(error){
    res.status(500).json({message:error.message})
  }
})
export default router

