"use client"
import FixedNav from '@/app/ui-components/navs/web/FixedNav';
import TopNav from '@/app/ui-components/navs/web/TopNav';
import React, { FC, useState } from 'react';

interface ConfiguracionProps {

}

const Configuracion: FC<ConfiguracionProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('')

  return (
    <div>
      <TopNav isLoggedIn={true} />
      <FixedNav sectionSelected={sectionSelected}/>
      Configuración
    </div>
  );
};

export default Configuracion;