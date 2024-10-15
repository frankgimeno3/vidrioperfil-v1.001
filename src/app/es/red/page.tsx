"use client"
import FixedNav from '@/app/ui-components/navs/web/FixedNav';
import TopNav from '@/app/ui-components/navs/web/TopNav';
import React, { FC, useState } from 'react';

interface RedProps {

}

const Red: FC<RedProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('red')

  return (
    <div>
      <TopNav />
      <FixedNav sectionSelected={sectionSelected}/>
      Red
    </div>

  );
};

export default Red;