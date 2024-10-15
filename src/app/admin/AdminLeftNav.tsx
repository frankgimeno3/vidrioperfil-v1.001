import React, { FC } from 'react';

interface AdminLeftNavProps {
  currentModule: string;
  setCurrentModule: (module: string) => void;  
}

const AdminLeftNav: FC<AdminLeftNavProps> = ({ currentModule, setCurrentModule }) => {

  const selectModule = (moduleName: string) => {
    setCurrentModule(moduleName);
  };

  return (
    <div className='flex flex-col min-h-screen bg-gray-300 text-gray-600' style={{ width: '250px' }}>
      <div className='bg-gray-700 px-5 py-2'>
        <p className='text-lg text-white'>Módulos</p>
      </div>
      <div className='p-3'>
      <div className='flex flex-row py-2 items-center'>
          {currentModule === 'dashboard' ? <div className='bg-gray-700 h-4 w-2 mr-2'></div> : <div className='h-2 w-1 mr-3'></div>}
          <p onClick={() => selectModule('dashboard')}>Dashboard</p>
        </div>
      <div className='flex flex-row py-2 items-center'>
          {currentModule === 'articulos' ? <div className='bg-gray-700 h-4 w-2 mr-2'></div> : <div className='h-2 w-1 mr-3'></div>}
          <p onClick={() => selectModule('articulos')}>Gestión de artículos</p>
        </div>
      <div className='flex flex-row py-2 items-center'>
          {currentModule === 'revistas' ? <div className='bg-gray-700 h-4 w-2 mr-2'></div> : <div className='h-2 w-1 mr-3'></div>}
          <p onClick={() => selectModule('revistas')}>Gestión de revistas</p>
        </div>
      <div className='flex flex-row py-2 items-center'>
          {currentModule === 'cuentas' ? <div className='bg-gray-700 h-4 w-2 mr-2'></div> : <div className='h-2 w-1 mr-3'></div>}
          <p onClick={() => selectModule('cuentas')}>Gestión de cuentas</p>
        </div>
      <div className='flex flex-row py-2 items-center'>
          {currentModule === 'banners' ? <div className='bg-gray-700 h-4 w-2 mr-2'></div> : <div className='h-2 w-1 mr-3'></div>}
          <p onClick={() => selectModule('banners')}>Gestión de banners</p>
        </div>
      <div className='flex flex-row py-2 items-center'>
          {currentModule === 'wiki' ? <div className='bg-gray-700 h-4 w-2 mr-2'></div> : <div className='h-2 w-1 mr-3'></div>}
          <p onClick={() => selectModule('wiki')}>Gestión de "wiki"</p>
        </div>
      <div className='flex flex-row py-2 items-center'>
          {currentModule === 'red' ? <div className='bg-gray-700 h-4 w-2 mr-2'></div> : <div className='h-2 w-1 mr-3'></div>}
          <p onClick={() => selectModule('red')}>Gestión de "red"</p>
        </div>
      <div className='flex flex-row py-2 items-center'>
          {currentModule === 'eventos' ? <div className='bg-gray-700 h-4 w-2 mr-2'></div> : <div className='h-2 w-1 mr-3'></div>}
          <p onClick={() => selectModule('eventos')}>Gestión de "eventos"</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLeftNav;
