"use client"
import FixedNav from '@/app/ui-components/navs/web/FixedNav';
import TopNav from '@/app/ui-components/navs/web/TopNav';
import React, { FC, useState } from 'react';

interface HomeProps {

}

const Home: FC<HomeProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('home')

  return (
    <div>
      <TopNav />
      <FixedNav sectionSelected={sectionSelected}/>
      Home
    </div>
  );
};

export default Home;