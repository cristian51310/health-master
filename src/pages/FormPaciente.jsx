import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import Input from '../components/Input'
// eslint-disable-next-line no-unused-vars
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { CREATE_PACIENTE, GET_ALL_PACIENTES } from '../graphql/pacientes'
import { AiFillAlipayCircle } from 'react-icons/ai'
import { Button } from '../components/Button'
import { toast } from 'sonner'
import { useFormik } from 'formik'
import Select from 'react-select'

const options = [
  { value: 'masculino', label: 'Masculino' },
  { value: 'femenino', label: 'Femenino' }
]

const FormPaciente = () => {
  // const navigate = useNavigate()

  const [createPaciente, { loading }] = useMutation(CREATE_PACIENTE, {
    refetchQueries: [{ query: GET_ALL_PACIENTES }, 'GetAllPacintes']
  })

  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      fechaNacimiento: '',
      genero: ''
    },
    onSubmit: async (values, { resetForm }) => {
      resetForm()
      await createPaciente({
        variables: {
          nombre: values.nombre,
          apellidoPaterno: values.apellidoPaterno,
          apellidoMaterno: values.apellidoMaterno,
          fechaNacimiento: values.fechaNacimiento,
          genero: values.genero
        }
      })
      // navigate('/pacientes')
      toast.success('Paciente Creado Correctamente')
    }
  })

  return (
    <DefaultLayout>
      <div className='grid grid-cols-1 gap-9'>

        {/* <!-- Sign in Form --> */}
        <div className='rounded-2xl border border-stroke bg-white shadow-xl    '>
          <div className='border-b border-stroke py-4 px-6.5  '>
            <h3 className='font-medium text-black  '>
              Tus datos personales
            </h3>
          </div>
          <form
            className='grid grid-cols-12 gap-x-6 p-9'
            onSubmit={formik.handleSubmit}
          >

            <div className='col-span-12'>
              <Input
                name='nombre'
                text='Nombre'
                type='text'
                placeholder='Ingresa tu nombre'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nombre}
              />
            </div>

            <div className='col-span-6'>
              <Input
                name='apellidoPaterno'
                text='Apellido Paterno'
                type='text'
                placeholder='Ingresa tu apellido paterno'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.apellidoPaterno}
              />
            </div>

            <div className='col-span-6'>
              <Input
                name='apellidoMaterno'
                text='Apellido Materno'
                type='text'
                placeholder='Ingresa tu apellido materno'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.apellidoMaterno}
              />
            </div>

            <div className='col-span-6'>
              <Input
                name='fechaNacimiento'
                text='Fecha Nacimiento'
                type='date'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fechaNacimiento}
              />
            </div>

            <div className='col-span-6'>
              <label className=' text-black'>Genero</label>
              <Select
                name='genero'
                options={options}
                value={options.find((option) => option.value === formik.values.genero)}
                defaultValue={options.find((option) => option.value === 'masculino')}
                onChange={(option) => formik.setFieldValue('genero', option.value)}
                onBlur={formik.handleBlur}
                className='mt-3 active:border-blue-500 rounded-xl w-full'
              />
            </div>

            <div className='col-span-12'>
              <Button
                text='Registrar Paciente'
                icon={<AiFillAlipayCircle />}
                type='submit'
                disabled={!formik.values.nombre || loading}
              />
            </div>

          </form>
        </div>
      </div>

    </DefaultLayout>
  )
}

export default FormPaciente
