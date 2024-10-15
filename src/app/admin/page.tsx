"use client"
import React, { FC, useState } from 'react';
import AdminLeftNav from './AdminLeftNav';
import AdminTopNav from './AdminTopNav';

interface AdminProps {

}

const Admin: FC<AdminProps> = ({ }) => {
  const [currentModule, setCurrentModule] = useState('notificaciones')
  return (
    <div className=' flex flex-col'>
      <AdminTopNav/>
      <div className='flex flex-row min-h-screen w-full'>
        <AdminLeftNav currentModule={currentModule} setCurrentModule={setCurrentModule} />
        <div>
          {/* content */}
        </div>
      </div>
    </div>
  );
};

export default Admin;