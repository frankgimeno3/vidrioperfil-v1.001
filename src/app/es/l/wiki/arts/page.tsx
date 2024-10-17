import FixedNav from '@/app/ui-components/navs/web/FixedNav';
import TopNav from '@/app/ui-components/navs/web/TopNav';
import React, { FC } from 'react';
 
interface ArtsProps  {
  
}

const Arts: FC<ArtsProps> = ({ }) => {
  return (
    <div className='min-h-screen p-12'>
      <TopNav isLoggedIn={true} />
      <FixedNav sectionSelected={'wiki'}/>
              <p>Listado de artículos en orden cronológico</p>
    </div>
  );
};

export default Arts;