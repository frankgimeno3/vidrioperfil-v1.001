"use client"
import SearchBar from '@/app/ui-components/navs/SearchBar';
import FixedNav from '@/app/ui-components/navs/web/FixedNav';
import TopNav from '@/app/ui-components/navs/web/TopNav';
import Link from 'next/link';
import React, { FC, useState } from 'react';

interface WikiProps {

}

const Wiki: FC<WikiProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('wiki')

  return (
    <div>
      <TopNav isLoggedIn={false} />
      <FixedNav sectionSelected={sectionSelected}/>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center  pt-36">
      <div className="mb-12 text-center">
      <h1 className="text-5xl text-gray-400  font-bold ">Glasswiki</h1>
      <p className="text-lg text-gray-700 mb-1">
        Bienvenido a Glasswiki, la enciclopedia del sector del vidrio.
      </p>
      <SearchBar color={'gray-300'} placeholderText={'Busque por nombre, temática, etiqueta...'}  />
      </div>

      <div className="flex flex-row w-full text-gray-500 px-12 mt-12">
      <div className="bg-white shadow-md rounded-lg p-6  w-full mx-6">
         <p className="text-xl">Artículos destacados</p>
         <p className="text-sm">Check</p>

      </div>
      <div className="bg-white shadow-md rounded-lg p-6 w-full mx-6">
      <p className="text-xl">Artículos recientes</p>
      <p className="text-sm">Check</p>
      <Link href={"/es/wiki/arts"}/>
      </div>
      </div>
      <p className="font-bold text-7xl text-gray-300 mt-24">Página en construcción</p>
    </div>    </div>
  );
};

export default Wiki;