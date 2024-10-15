"use client"
import FixedNav from '@/app/ui-components/navs/web/FixedNav';
import TopNav from '@/app/ui-components/navs/web/TopNav';
import React, { FC, useState } from 'react';

interface RevistasProps {

}

const Revistas: FC<RevistasProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('revistas')

  return (
    <div>
      <TopNav />
      <FixedNav sectionSelected={sectionSelected}/>
      Revistas
    </div>
  );
};

export default Revistas;