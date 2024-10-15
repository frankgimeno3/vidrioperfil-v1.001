import React, { FC } from 'react';

interface AdminTopNavProps {
  
}

const AdminTopNav: FC<AdminTopNavProps> = ({ }) => {
  return (
    <div className='flex flex-row w-full   text-white justify-between px-5 py-4' style={{ backgroundColor: '#1d305e' }}>
        <p className='text-2xl '>Panel de control</p>
        <button className=' text-xs bg-transparent text-white rounded-lg hover:bg-white hover:bg-opacity-5 border border-white px-5'>
            Cerrar Sesión
        </button>
    </div>
  );
};

export default AdminTopNav;