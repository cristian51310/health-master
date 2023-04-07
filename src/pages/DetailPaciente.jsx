import { useParams, useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { DELETE_PACIENTE, GET_PACIENTE, GET_ALL_PACIENTES } from '../graphql/pacientes'
import DefaultLayout from '../layout/DefaultLayout'
import { AiOutlineWarning, AiOutlineCloseCircle } from 'react-icons/ai'
import { ButtonDanger, ButtonWarning } from '../components/Button'
import PacienteCard from '../components/PacienteCard'

const DetailPaciente = () => {
  const navigate = useNavigate()
  const params = useParams()

  const { data, loading, error } = useQuery(GET_PACIENTE, {
    variables: {
      id: params.id
    }
  })

  const [deletePaciente] = useMutation(DELETE_PACIENTE, {
    refetchQueries: [
      {
        query: GET_ALL_PACIENTES
      },
      'GetAllPacintes'
    ]
  })

  console.log(data)

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error :</p>

  return (
    <DefaultLayout>
      <div className='grid grid-cols-6 gap-4'>
        <div className='col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-2'>
          <PacienteCard
            paciente={data.paciente}
          >
            <ButtonWarning
              icon={<AiOutlineWarning />}
              text='Editar'
            />
            <ButtonDanger
              icon={<AiOutlineCloseCircle />}
              text='Eliminar'
              type='submit'
              onClick={() => {
                deletePaciente({
                  variables: {
                    id: data.paciente._id
                  }
                })
                navigate('/pacientes')
              }}
            />
          </PacienteCard>
        </div>

        <div className='xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-3 col-span-6 rounded-2xl border border-stroke bg-white shadow-xl min-h-screen'>
          <div className='border-b border-stroke py-4 px-6.5  '>
            <h3 className='font-medium text-black  '>
              Recetas de {data.paciente.nombre}
            </h3>
          </div>
          <div className='grid grid-cols-5 p-6.5 gap-10'>
            Recetas
          </div>
        </div>
      </div>

    </DefaultLayout>
  )
}

export default DetailPaciente
