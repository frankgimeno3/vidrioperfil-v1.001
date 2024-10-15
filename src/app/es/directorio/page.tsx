"use client"
import SearchBar from '@/app/ui-components/navs/SearchBar';
import FixedNav from '@/app/ui-components/navs/web/FixedNav';
import TopNav from '@/app/ui-components/navs/web/TopNav';
import React, { FC, useState } from 'react';

interface DirectorioProps {

}

const Directorio: FC<DirectorioProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('directorio')

  return (

    <div className='text-gray-500 bg-gray-200 min-h-screen'>
      <TopNav />
      <FixedNav sectionSelected={sectionSelected} />

      <div className='p-12 w-full '>
        <div className='flex flex-row bg-white shadow p-5 w-full'>
          <div className='flex flex-col  w-full  border-r border-gray-300'>
            <p className='text-3xl'>Directorio de <span className='font-bold'>vidrioperfil.com</span></p>
            <p>Miles de perfiles del sector del vidrio y carpintería le esperan</p>
            <div className='w-full my-3'>
              <SearchBar color={'gray-500'} lupaColor={'gray-400'} placeholderText={'Busque por nombre o marca'} />
            </div>
          </div>
          <div className='w-full pl-12 text-3xl'>
            <p>Qué está buscando?</p>
            <p>Empresas del sector del vidrio</p>
            <p>Empresas del sector del cerramiento</p>
          </div>

        </div>


        <p></p>
      </div>
    </div>
  );
};

export default Directorio;