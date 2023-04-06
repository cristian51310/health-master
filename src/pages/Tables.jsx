import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import TableOne from '../components/TableOne';
import TableTwo from '../components/TableTwo';

const Tables = () => {
  return (
    <DefaultLayout>
      <div className='flex flex-col gap-10'>
        <TableOne />
        <TableTwo />
      </div>
    </DefaultLayout>
  )
}

export default Tables;
