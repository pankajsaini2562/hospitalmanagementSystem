import mongoose from 'mongoose'
const patientSchema =new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    required:true
  }
})
export const Patient = mongoose.model('Patient',patientSchema)