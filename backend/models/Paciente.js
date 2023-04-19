import mongoose from 'mongoose'

const pacienteSchema = new mongoose.Schema(
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
    fotoPerfil: {
      type: String,
      required: true
    }
  }, {
    timestamps: true,
    versionKey: false
  }
)

export default mongoose.model('paciente', pacienteSchema)
