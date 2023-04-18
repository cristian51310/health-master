import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import Input from '../components/Input'
import { useMutation } from '@apollo/client'
import { CREATE_PACIENTE, GET_ALL_PACIENTES } from '../graphql/pacientes'
import { AiFillAlipayCircle } from 'react-icons/ai'
import { Button } from '../components/Button'
import { toast } from 'sonner'
import { useFormik } from 'formik'
import Select from 'react-select'
import * as yup from 'yup'
import { ErrorBadge, SuccesBadge, WarningBadge } from '../components/ErrorBadge'

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
      genero: 'masculino',
      fotoPerfil: ''
    },
    validationSchema: yup.object({
      nombre: yup.string().required('Nombre obligatorio'),
      apellidoPaterno: yup.string().required('Apellido obligatorio'),
      apellidoMaterno: yup.string().required('Apellido obligatorio'),
      fechaNacimiento: yup.date().required('Fecha obligatoria')
    }),
    onSubmit: async (values, { resetForm }) => {
      resetForm()
      const typeFoto = values.genero === 'femenino' ? 'female' : 'male'
      await createPaciente({
        variables: {
          nombre: values.nombre,
          apellidoPaterno: values.apellidoPaterno,
          apellidoMaterno: values.apellidoMaterno,
          fechaNacimiento: values.fechaNacimiento,
          genero: values.genero,
          fotoPerfil: `https://xsgames.co/randomusers/assets/avatars/${typeFoto}/${(Math.floor(Math.random() * 78) + 1)}.jpg`
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
              >
                {formik.touched.nombre && formik.errors.nombre
                  ? (<ErrorBadge errorMessage={formik.errors.nombre} />)
                  : formik.touched.nombre && !formik.errors.nombre
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </Input>
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
              >
                {formik.touched.apellidoPaterno && formik.errors.apellidoPaterno
                  ? (<ErrorBadge errorMessage={formik.errors.apellidoPaterno} />)
                  : formik.touched.apellidoPaterno && !formik.errors.apellidoPaterno
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </Input>
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
              >
                {formik.touched.apellidoMaterno && formik.errors.apellidoMaterno
                  ? (<ErrorBadge errorMessage={formik.errors.apellidoMaterno} />)
                  : formik.touched.apellidoMaterno && !formik.errors.apellidoMaterno
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </Input>
            </div>

            <div className='col-span-6'>
              <Input
                name='fechaNacimiento'
                text='Fecha Nacimiento'
                type='date'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fechaNacimiento}
              >
                {formik.touched.fechaNacimiento && formik.errors.fechaNacimiento
                  ? (<ErrorBadge errorMessage={formik.errors.fechaNacimiento} />)
                  : formik.touched.fechaNacimiento && !formik.errors.fechaNacimiento
                    ? (<SuccesBadge />)
                    : (<WarningBadge />)}
              </Input>
            </div>

            <div className='col-span-6 mt-3.5'>
              <label className=' text-black'>Genero</label>
              <Select
                name='genero'
                options={options}
                value={options.find((option) => option.value === formik.values.genero)}
                defaultValue={options.find((option) => option.value === 'masculino')}
                onChange={(option) => formik.setFieldValue('genero', option.value)}
                onBlur={formik.handleBlur}
                className='mt-4 active:border-blue-500 rounded-xl w-full'
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
