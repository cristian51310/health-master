import mongoose from 'mongoose'

const usuarioSchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'doctor',
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  }, {
    timestamps: true,
    versionKey: false
  }
)

export default mongoose.model('usuario', usuarioSchema)
