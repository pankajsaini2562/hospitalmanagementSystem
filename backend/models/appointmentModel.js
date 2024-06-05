import mongoose from 'mongoose'
const appointmentSchema =new mongoose.Schema({
  patientname:{
    type:String,
    required:true
  },
  doctorname:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    required:true
  }
})
export const Appointment = mongoose.model('Appointment',appointmentSchema)