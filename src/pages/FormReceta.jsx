import React, { useState, useEffect } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { GET_ALL_PACIENTES } from '../graphql/pacientes'
import { CREATE_RECETA } from '../graphql/recetas'
import { AiFillAlipayCircle } from 'react-icons/ai'
import { Button } from '../components/Button'
import TextArea from '../components/TextArea'
import jwtDecode from 'jwt-decode'
import { FormatDate } from '../js/formatDate'
import { useFormik } from 'formik'
import Select from 'react-select'
import * as yup from 'yup'
import { ErrorBadge, SuccesBadge, WarningBadge } from '../components/ErrorBadge'

const FormReceta = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      presionArterial: 'Na',
      frecuenciaCardiaca: 'Na',
      frecuenciaRespiratoria: 'Na',
      temperatura: '',
      peso: '',
      estatura: '',
      alergias: '',
      diagnostico: '',
      tratamiento: ''
    },
    validationSchema: yup.object({
      temperatura: yup.string().required('Temperatura obligatorio'),
      peso: yup.string().required('Peso obligatorio'),
      estatura: yup.string().required('Estatura obligatoria'),
      alergias: yup.string().required('Alergias obligatorias'),
      diagnostico: yup.string().required('Diagnostico obligatorio'),
      tratamiento: yup.string().required('Tratamiento obligatorio')
    }),
    onSubmit: async (values, { resetForm }) => {
      await createReceta({
        variables: {
          doctorId: decodedToken.user.doctorId,
          pacienteId: selectedPatient,
          presionArterial: values.presionArterial,
          frecuenciaCardiaca: values.frecuenciaCardiaca,
          frecuenciaRespiratoria: values.frecuenciaRespiratoria,
          temperatura: values.temperatura,
          peso: values.peso,
          estatura: values.estatura,
          alergias: values.alergias,
          diagnostico: values.diagnostico,
          tratamiento: values.tratamiento
        }
      })
      navigate(`/paciente/${selectedPatient}`)
    }
  })

  function calcularEdad (fechaNacimiento) {
    const fechaNacimientoMs = fechaNacimiento// Convertir fecha Unix a milisegundos
    const fechaNacimientoObj = new Date(fechaNacimientoMs) // Crear objeto Date
    const edadMs = Date.now() - fechaNacimientoObj.getTime() // Calcular diferencia en milisegundos
    const edad = new Date(edadMs) // Crear objeto Date a partir de la diferencia de tiempo
    return Math.abs(edad.getUTCFullYear() - 1970) // Obtener la edad en años
  }

  // obtener datos del doctor
  const token = window.localStorage.getItem('token')
  const decodedToken = jwtDecode(token)

  const [fecha, setFecha] = useState(new Date().toISOString().substr(0, 10))
  useEffect(() => {
    const date = new Date().toISOString().substr(0, 10)
    setFecha(date)
  }, [])

  const [selectedPatient, setSelectedPatient] = useState('')
  const { loading, error, data } = useQuery(GET_ALL_PACIENTES)

  const [createReceta] = useMutation(CREATE_RECETA)

  const getDateById = (id) => {
    const patient = data.pacientes.find(p => p._id === id)
    return patient ? patient.fechaNacimiento : ''
  }

  const getGenderById = (id) => {
    const patient = data.pacientes.find(p => p._id === id)
    return patient ? patient.genero : ''
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const patients = data.pacientes

  const options = patients.map((patient) => ({
    value: patient._id,
    label: patient.nombre + ' ' + patient.apellidoPaterno + ' ' + patient.apellidoMaterno
  }))

  return (
    <DefaultLayout>
      <div className='grid grid-cols-1 gap-9'>

        {/* <!-- Sign in Form --> */}
        <div className='rounded-2xl border border-stroke bg-white shadow-default    '>
          <div className='border-b border-stroke py-4 px-6.5  '>
            <h3 className='font-medium text-black  '>
              Receta Medica
            </h3>
          </div>
          <form
            className='grid grid-cols-12 p-8 px-10 gap-x-7 gap-y-3'
            onSubmit={formik.handleSubmit}
          >

            <div className='col-span-8' />

            <div className='col-span-4'>
              <p className=' text-right mr-3 mb-3 mt-3'>Fecha: {fecha}</p>
            </div>

            <div className='col-span-12 mb-5'>
              <label className=' text-black'>Selecciona un paciente:</label>
              <Select
                name='genero'
                options={options}
                value={options.find((option) => option.value._id)}
                onChange={(option) => setSelectedPatient(option.value)}
                className='mt-3 active:border-blue-500 rounded-xl'
              />
            </div>

            <div className='col-span-3'>
              <Input
                name='fechaNacimiento'
                text='Fecha Nacimiento'
                type='text'
                value={FormatDate(getDateById(selectedPatient))}
                onChange={formik.handleChange}
              />
            </div>

            <div className='col-span-3'>
              <Input
                name='edad'
                text='Edad'
                type='text'
                value={calcularEdad(getDateById(selectedPatient))}
              />
            </div>

            <div className='col-span-6'>
              <Input
                name='genero'
                text='Genero'
                type='text'
                value={getGenderById(selectedPatient)}
                onChange={formik.handleChange}
              />
            </div>

            <div className='col-span-4'>

              <Input
                name='presionArterial'
                text='Presion Arterial (mm/Hg)'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.presionArterial}
              />
              <Input
                name='frecuenciaCardiaca'
                text='Frecuencia Cardiaca (xmin)'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.frecuenciaCardiaca}
              />
              <Input
                name='frecuenciaRespiratoria'
                text='Frecuencia Respiratoria (xmin)'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.frecuenciaRespiratoria}
              />
              <Input
                name='temperatura'
                text='Temperatura (°C)'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.temperatura}
              >
                {formik.touched.temperatura && formik.errors.temperatura
                  ? (<ErrorBadge errorMessage={formik.errors.temperatura} />)
                  : formik.touched.temperatura && !formik.errors.temperatura
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </Input>

              <Input
                name='peso'
                text='Peso (kg)'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.peso}
              >
                {formik.touched.peso && formik.errors.peso
                  ? (<ErrorBadge errorMessage={formik.errors.peso} />)
                  : formik.touched.peso && !formik.errors.peso
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </Input>

              <Input
                name='estatura'
                text='Estatura (m)'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.estatura}
              >
                {formik.touched.estatura && formik.errors.estatura
                  ? (<ErrorBadge errorMessage={formik.errors.estatura} />)
                  : formik.touched.estatura && !formik.errors.estatura
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </Input>

            </div>

            <div className='col-span-8'>
              <TextArea
                name='alergias'
                text='Alergias'
                type='text'
                numRows={2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.alergias}
              >
                {formik.touched.alergias && formik.errors.alergias
                  ? (<ErrorBadge errorMessage={formik.errors.alergias} />)
                  : formik.touched.alergias && !formik.errors.alergias
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </TextArea>

              <TextArea
                name='diagnostico'
                text='Diagnostico'
                type='text'
                numRows={3}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.diagnostico}
              >
                {formik.touched.diagnostico && formik.errors.diagnostico
                  ? (<ErrorBadge errorMessage={formik.errors.diagnostico} />)
                  : formik.touched.diagnostico && !formik.errors.diagnostico
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </TextArea>

              <TextArea
                name='tratamiento'
                text='Tratamiento'
                type='text'
                numRows={15}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.tratamiento}
              >
                {formik.touched.tratamiento && formik.errors.tratamiento
                  ? (<ErrorBadge errorMessage={formik.errors.tratamiento} />)
                  : formik.touched.tratamiento && !formik.errors.tratamiento
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </TextArea>
            </div>

            <div className='col-span-12'>
              <Button
                text='Guardar Receta'
                icon={<AiFillAlipayCircle />}
                type='submit'
                disabled={!formik.values.diagnostico}
              />
            </div>
          </form>
        </div>
      </div>

    </DefaultLayout>
  )
}

export default FormReceta
