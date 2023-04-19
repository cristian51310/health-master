import mongoose from 'mongoose'

export const connectDB = async () => {
  try { 
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/health-master')
    console.log(`Mongo DB connected ${conn.connection.name}`)
  } catch {
    console.error('Error')
    process.exit(1)
  }
}
