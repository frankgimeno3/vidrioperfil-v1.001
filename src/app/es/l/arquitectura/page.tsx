"use client"
 
import FixedNav from '@/app/0-components/ui-components/navs/web/FixedNav';
import TopNav from '@/app/0-components/ui-components/navs/web/TopNav';
import React, { FC, useState } from 'react';

interface ArquitecturaProps {

}

const Arquitectura: FC<ArquitecturaProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('arquitectura')

  return (
    <div>
      <TopNav isLoggedIn={true} />
      <FixedNav sectionSelected={sectionSelected}/>
      Arquitectura
    </div>
  );
};

export default Arquitectura;