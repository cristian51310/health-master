import { useParams, useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { DELETE_PACIENTE, GET_PACIENTE, GET_ALL_PACIENTES } from '../graphql/pacientes'
import DefaultLayout from '../layout/DefaultLayout'
import { AiOutlineWarning, AiOutlineCloseCircle, AiOutlineFilePdf } from 'react-icons/ai'
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
    refetchQueries: [{ query: GET_ALL_PACIENTES }, 'GetAllPacintes']
  })

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error :</p>

  const recetas = data.paciente.receta

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

        <div className='xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-3 col-span-6 rounded-2xl border border-stroke bg-white shadow-xl '>
          <div className='border-b border-stroke py-4 px-6.5  '>
            <h3 className='font-lg font-semibold text-black  '>
              Recetas de {data.paciente.nombre}
            </h3>
          </div>
          <div className='grid grid-cols-1 p-6.5 gap-8'>
            <p className=' text-lg'>Recetas Medicas</p>

            {recetas.map((receta, index) => (
              <div key={index} className='grid grid-cols-12 bg-gray-200 shadow-lg shadow-black/10 rounded-xl p-5'>
                <div className='col-span-11'>
                  <p>Diagnóstico: {receta.diagnostico}</p>
                  <p>Fecha de creación: {new Date(Number(receta.createdAt)).toLocaleString('es', { dateStyle: 'long', timeStyle: 'short', hour12: true })}</p>
                </div>
                <div className='col-span-1'>
                  <ButtonDanger
                    icon={<AiOutlineFilePdf />}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </DefaultLayout>
  )
}

export default DetailPaciente
