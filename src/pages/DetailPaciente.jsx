import { useParams, useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { DELETE_PACIENTE, GET_PACIENTE, GET_ALL_PACIENTES } from '../graphql/pacientes'
import DefaultLayout from '../layout/DefaultLayout'
import { AiOutlineCloseCircle, AiOutlineFilePdf } from 'react-icons/ai'
import { ButtonDanger } from '../components/Button'
import PacienteCard from '../components/PacienteCard'
import { Document, Page, Text, View, PDFDownloadLink } from '@react-pdf/renderer'

const ViewPDF = ({ data, receta }) => {
  return (
    <Document>
      <Page size='A5' orientation='landscape'>
        <View>
          <Text> {receta.createdAt} </Text>

          <Text> {data.paciente.nombre} </Text>
          <Text> {data.paciente.apellidoPaterno} </Text>
          <Text> {data.paciente.apellidoMaterno} </Text>
          <Text> {data.paciente.fechaNacimiento} </Text>

          <Text> {receta.alergias} </Text>
          <Text> {receta.diagnostico} </Text>
          <Text> {receta.estatura} </Text>
          <Text> {receta.frecuenciaCardiaca} </Text>
          <Text> {receta.frecuenciaRespiratoria} </Text>
          <Text> {receta.peso} </Text>
          <Text> {receta.presionArterial} </Text>
          <Text> {receta.temperatura} </Text>
          <Text> {receta.tratamiento} </Text>

          <Text> {receta.doctor[0].nombre} </Text>
          <Text> {receta.doctor[0].apellidoPaterno} </Text>
          <Text> {receta.doctor[0].apellidoMaterno} </Text>
          <Text> {receta.doctor[0].cedula} </Text>
        </View>
      </Page>
    </Document>
  )
}

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
  console.log(recetas[0])

  return (
    <DefaultLayout>
      <div className='grid grid-cols-6 gap-4'>
        <div className='col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-2'>
          <PacienteCard
            paciente={data.paciente}
          >
            <ButtonDanger
              icon={<AiOutlineCloseCircle />}
              text='Eliminar'
              type='submit'
              onClick={() => {
                deletePaciente({ variables: { id: data.paciente._id } })
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
                  <PDFDownloadLink document={<ViewPDF receta={receta} data={data} />} fileName='docu.pdf'>
                    <ButtonDanger icon={<AiOutlineFilePdf />} />
                  </PDFDownloadLink>
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
