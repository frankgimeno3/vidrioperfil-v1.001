import React, { FC } from 'react';
import Dashboard from './dashboard/Dashboard';
 
interface AdminContentProps {
    currentModule:string;
}

const AdminContent: FC<AdminContentProps> = ({ currentModule}) => {

  return (
    <div className='bg-gray-100 w-full min-h-screen'>
        {currentModule == 'dashboard' && <Dashboard/>}
    </div>
  );
};

export default AdminContent;