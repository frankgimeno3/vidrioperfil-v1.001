"use client"
import React, { FC, useState } from 'react'; 
import TopNav from '../0-components/ui-components/navs/web/TopNav';
import FixedNav from '../0-components/ui-components/navs/web/FixedNav';

interface EsProps {

}

const Es: FC<EsProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('home')

  return (
    <div>
      <TopNav isLoggedIn={false} />
      <FixedNav sectionSelected={sectionSelected}/>
      Es
    </div>
  );
};

export default Es;