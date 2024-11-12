"use client"
import React, { FC, useState } from 'react'; 
import TopNav from '../0-components/ui-components/navs/web/TopNav';
import FixedNav from '../0-components/ui-components/navs/web/FixedNav';

interface AlProps {

}

const Al: FC<AlProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('home')

  return (
    <div>
      <TopNav isLoggedIn={false} />
      <FixedNav sectionSelected={sectionSelected}/>
      Al
    </div>
  );
};

export default Al;