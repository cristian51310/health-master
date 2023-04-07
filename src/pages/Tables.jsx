import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import PacienteCard from '../components/PacienteCard';
import { useQuery } from '@apollo/client';
import { GET_ALL_PACIENTES } from '../graphql/pacientes.js';

const Tables = () => {
  const { loading, error, data } = useQuery(GET_ALL_PACIENTES)

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error :</p>;

  return (
    <DefaultLayout>
      <div className='grid grid-cols-3 gap-10'>
        {data.pacientes?.map(paciente => (
          <PacienteCard key={paciente._id} paciente={paciente}/>
        ))}
      </div>
    </DefaultLayout>
  )
}

export default Tables;
