"use client"
import FixedNav from '@/app/ui-components/navs/web/FixedNav';
import TopNav from '@/app/ui-components/navs/web/TopNav';
import React, { FC, useState } from 'react';

interface DirectorioProps {

}

const Directorio: FC<DirectorioProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('directorio')

  return (

    <div>
      <TopNav />
      <FixedNav sectionSelected={sectionSelected}/>
      Directorio
    </div>
  );
};

export default Directorio;