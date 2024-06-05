import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import doctorsRouter from './routes/doctors.js'
import appointmentRouter from './routes/appointments.js'
import patientRouter from './routes/patients.js'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO).then(()=>{
console.log('database is connected')
app.listen(3000,()=>{
  console.log('server is running succesfully')
})
})
.catch((err)=>{
  console.log(err)

}) 

app.use('/doctors',doctorsRouter)
app.use('/patients',patientRouter)
app.use('/appointments/',appointmentRouter)
























































































