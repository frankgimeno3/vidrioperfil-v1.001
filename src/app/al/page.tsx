"use client"
import React, { FC, useState } from 'react';
import TopNav from '../ui-components/navs/web/TopNav';
import FixedNav from '../ui-components/navs/web/FixedNav';

interface AlProps {

}

const Al: FC<AlProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('home')

  return (
    <div>
      <TopNav />
      <FixedNav sectionSelected={sectionSelected}/>
      Al
    </div>
  );
};

export default Al;