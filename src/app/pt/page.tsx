"use client"
import React, { FC, useState } from 'react';
import TopNav from '../ui-components/navs/web/TopNav';
import FixedNav from '../ui-components/navs/web/FixedNav';

interface PtProps {

}

const Pt: FC<PtProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('home')

  return (
    <div>
      <TopNav isLoggedIn={false} />
      <FixedNav sectionSelected={sectionSelected}/>
      Pt
    </div>
  )
};

export default Pt;