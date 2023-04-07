import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import PacienteCard from '../components/PacienteCard'
import { useQuery } from '@apollo/client'
import { GET_ALL_PACIENTES } from '../graphql/pacientes.js'
import { Button } from '../components/Button'
import { AiOutlineEye } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const ListPacientes = () => {
  const { loading, error, data } = useQuery(GET_ALL_PACIENTES)
  const navigate = useNavigate()

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error :</p>

  return (
    <DefaultLayout>
      <div className='grid grid-cols-3 gap-10'>
        {data.pacientes?.map(paciente => (
          <PacienteCard key={paciente._id} paciente={paciente}>
            <Button
              onClick={() => navigate(`/paciente/${paciente._id}`)}
              icon={<AiOutlineEye />}
              text='Ver detalles'
            />
          </PacienteCard>
        ))}
      </div>
    </DefaultLayout>
  )
}

export default ListPacientes
