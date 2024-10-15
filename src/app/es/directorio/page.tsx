"use client"
import SearchBar from '@/app/ui-components/navs/SearchBar';
import FixedNav from '@/app/ui-components/navs/web/FixedNav';
import TopNav from '@/app/ui-components/navs/web/TopNav';
import React, { FC, useState } from 'react';
import SumarioVidrio from './SumarioVidrio';
import SumarioCarpinteria from './SumarioCarpintería';

interface DirectorioProps {

}

const Directorio: FC<DirectorioProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('directorio')
  const [fase, setFase] = useState(1)
  const [selectedF1Option, setSelectedF1Option] = useState('')

  const selectF1Option = (option: string) => {
    setSelectedF1Option(option)
    setFase(2)
  }

  return (
    <div className='text-gray-500 bg-gray-200 min-h-screen'>
      <TopNav />
      <FixedNav sectionSelected={sectionSelected} />

      <div className='p-12 w-full flex flex-col'>
        <div className='flex flex-row bg-white shadow p-5 w-full'>
          <div className='flex flex-col  w-full  border-r border-gray-300'>
            <p className='text-3xl'>Directorio de <span className='font-bold'>vidrioperfil.com</span></p>
            <p>Miles de perfiles del sector del vidrio y carpintería le esperan</p>
            <div className='w-full my-3'>
              <SearchBar color={'gray-500'} lupaColor={'gray-400'} placeholderText={'Busque por nombre o marca'} />
            </div>
          </div>
          <div className='w-full pl-12 '>
            <p className='text-3xl mb-2'>Qué está buscando?</p>
            {selectedF1Option == 'empresasVidrio' ?
              <p className='font-bold text-blue-500' onClick={() => { selectF1Option('empresasVidrio') }}> Empresas o productos del sector del vidrio</p>
              :
              <p onClick={() => { selectF1Option('empresasVidrio') }}> Empresas o productos del sector del vidrio</p>}
            {selectedF1Option == 'empresasVentanas' ?
              <p className='font-bold text-blue-500' onClick={() => { selectF1Option('empresasVentanas') }}>Empresas o productos del sector del cerramiento</p>
              :
              <p onClick={() => { selectF1Option('empresasVentanas') }}>Empresas o productos del sector del cerramiento</p>}
            {selectedF1Option == 'personas' ?
              <p className='font-bold text-blue-500' onClick={() => { selectF1Option('personas') }}> Personas del sector del vidrio - carpintería</p>
              :
              <p onClick={() => { selectF1Option('personas') }}> Personas del sector del vidrio - carpintería</p>}

          </div>
        </div>

        {fase > 1 &&
          <div className='flex flex-col bg-white shadow p-5 w-full mt-12'>

          { selectedF1Option == 'personas' && <p className='w-full   text-3xl'>Encuentra personas con la red de vidrioperfil</p> }
          { selectedF1Option == 'empresasVidrio' && <SumarioVidrio/> }
          { selectedF1Option == 'empresasVentanas' &&  <SumarioCarpinteria/>}

          </div>
          }
      </div>
    </div>
  );
};

export default Directorio;