"use client"
 
import FixedNav from '@/app/0-components/ui-components/navs/web/FixedNav';
import TopNav from '@/app/0-components/ui-components/navs/web/TopNav';
import React, { FC, useState } from 'react';

interface EventosProps {

}

const Eventos: FC<EventosProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('eventos')

  return (
    <div>
      <TopNav isLoggedIn={false} />
      <FixedNav sectionSelected={sectionSelected}/>
      Eventos
    </div>
  );
};

export default Eventos;