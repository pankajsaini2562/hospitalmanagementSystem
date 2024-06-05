import express from 'express'
import  {Doctor} from '../models/doctorModel.js'
const router = express.Router()
// Get all doctors
router.get('/',async (req,res)=>{
try{
  const doctors =await Doctor.find()
  res.status(201).json(doctors)
}
catch(error){
  res.status(404).json({message:error.message})
}
})

// add a new doctor
router.post('/add',async (req,res)=>{
try{
const newDoctor =new Doctor(
  {
    name:req.body.name,
    speciality:req.body.speciality
  }
)
  const savedDoctor =await newDoctor.save()
  res.status(201).json({savedDoctor})
}
catch(error){
  res.status(404).json({message:error.message})
}

})
// delete a doctor
router.delete('/delete/:id',async (req,res)=>{
  const deleteddoctorId = req.params.id
  try{
    const deletedDoctor = await Doctor.findByIdAndDelete(deleteddoctorId)
  if(deletedDoctor){
    res.status(200).json({message:'doctor data is deleted  succesfully'})
  }
  else
  {
    res.status(404).json({message:'deleted doctor data not found'})
  }
 
  }
  catch(error){
    res.status(500).json({message:error.message})

  }
})

// update a doctor data
  router.put('/update/:id',async (req,res)=>{
    const updateddoctorId = req.params.id
    const updatedDoctor = {
      name:req.body.name,
      speciality:req.body.speciality
    }
  try{
   
     const updateddoctor = await Doctor.findByIdAndUpdate(updateddoctorId,updatedDoctor)
   if(updateddoctor){
res.status(200).json({message:'doctor is updated succesfully'})
   }
   else
   {
res.status(404).json({message:'updated doctor data is not found'})
   }
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
})
export default router

