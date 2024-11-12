"use client"
import React, { FC, useState } from 'react';
import AdminLeftNav from './AdminLeftNav';
import AdminTopNav from './AdminTopNav';
import AdminContent from './content/AdminContent';

interface AdminProps {

}

const Admin: FC<AdminProps> = ({ }) => {
  const [currentModule, setCurrentModule] = useState('dashboard')
  return (
    <div className=' flex flex-col'>
      <AdminTopNav/>
      <div className='flex flex-row min-h-screen w-full'>
        <AdminLeftNav currentModule={currentModule} setCurrentModule={setCurrentModule} />
        <div className='w-full h-full'>
         <AdminContent currentModule={currentModule}/>
        </div>
      </div>
    </div>
  );
};

export default Admin;