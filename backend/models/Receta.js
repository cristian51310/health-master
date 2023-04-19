import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'doctor',
      required: true
    },
    pacienteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'paciente',
      required: true
    },
    presionArterial: {
      type: String,
      required: false
    },
    frecuenciaCardiaca: {
      type: String,
      required: false
    },
    frecuenciaRespiratoria: {
      type: String,
      required: false
    },
    temperatura: {
      type: String,
      required: false
    },
    peso: {
      type: String,
      required: false
    },
    estatura: {
      type: String,
      required: true
    },
    alergias: {
      type: String,
      required: true
    },
    diagnostico: {
      type: String,
      required: true
    },
    tratamiento: {
      type: String,
      required: true
    }
  }, {
    timestamps: true,
    versionKey: false
  }
)

export default mongoose.model('receta', doctorSchema)
