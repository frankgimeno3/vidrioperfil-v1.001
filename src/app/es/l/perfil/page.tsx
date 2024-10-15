"use client"
import FixedNav from '@/app/ui-components/navs/web/FixedNav';
import TopNav from '@/app/ui-components/navs/web/TopNav';
import React, { FC, useState } from 'react';

interface PerfilProps {

}

const Perfil: FC<PerfilProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('')

  return (
    <div>
      <TopNav />
      <FixedNav sectionSelected={sectionSelected}/>
      Perfil
    </div>
  );
};

export default Perfil;