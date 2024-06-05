import express from 'express'
import {Appointment} from '../models/appointmentModel.js'
const router = express.Router()

// Get all appointments
router.get('/',async (req,res)=>{
try{
  const appointments =await Appointment.find()
  res.status(200).json({appointments})
}
catch(error){
  res.status(500).json({message:error.message})
}
})

// add a new Appointment
router.post('/add',async (req,res)=>{
try{
const newAppointment =new Appointment(
  {
    patientname:req.body.patientname,
    doctorname:req.body.doctorname,
    date:req.body.date
  }
)
  const savedAppointment =await newAppointment.save()
  res.status(200).json({savedAppointment})
}
catch(error){
  res.status(500).json({error:error.message})
}

})
// delete a appointment 
router.delete('/delete/:id',async (req,res)=>{
  const deletedappointmentId = req.params.id
  try{
    const deletedAppointment = await Appointment.findByIdAndDelete(deletedappointmentId)
   if(deletedAppointment) {
    res.status(200).json({message:'Appointment deleted succesfully'})

   } else {
    res.status(404).json({message:'deletedAppointment not found'})
   }
 
  }
  catch(error){
    res.status(500).json({error:error.message})

  }
})

// update a Appointment data
  router.put('/update/:id',async (req,res)=>{
    const updatedAppointmentId = req.params.id
    const updatedAppointment = {
      patientname:req.body.patientname,
      doctorname:req.body.doctorname,
      date:req.date
    }
  try{
     const updatedapppointment = await Appointment.findByIdAndUpdate(updatedAppointmentId,updatedAppointment)
 if(updatedapppointment){
res.status(200).json({message:"appointment is updated"})
 }
 else {
 res.status(404).json({message:'updatedAppointmnet is not found'})
 }
  }
  catch(error){
    res.status(500).json({error:error.message})
  }
})
export default router

