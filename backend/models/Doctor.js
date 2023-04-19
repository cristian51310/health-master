import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    apellidoPaterno: {
      type: String,
      required: true
    },
    apellidoMaterno: {
      type: String,
      required: true
    },
    fechaNacimiento: {
      type: Date,
      required: true
    },
    genero: {
      type: String,
      required: true
    },
    curp: {
      type: String,
      required: true,
      unique: true
    },
    rfc: {
      type: String,
      required: true,
      unique: true
    },
    cedula: {
      type: String,
      required: true,
      unique: true
    }
  }, {
    timestamps: true,
    versionKey: false
  }
)

export default mongoose.model('doctor', doctorSchema)


