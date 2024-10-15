"use client"
import FixedNav from '@/app/ui-components/navs/web/FixedNav';
import TopNav from '@/app/ui-components/navs/web/TopNav';
import React, { FC, useState } from 'react';

interface WikiProps {

}

const Wiki: FC<WikiProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('wiki')

  return (
    <div>
      <TopNav />
      <FixedNav sectionSelected={sectionSelected}/>
      Wiki
    </div>
  );
};

export default Wiki;