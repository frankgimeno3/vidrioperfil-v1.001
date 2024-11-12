import React, { FC } from 'react';

interface BasicArticleMiniatureProps {
  
}

const BasicArticleMiniature: FC<BasicArticleMiniatureProps> = ({ }) => {
  return (
    <div className='flex flex-col bg-gray-300 w-72 h-72 m-3 rounded-md'>
        <p>BasicArticleMiniature</p>
    </div>
  );
};

export default BasicArticleMiniature;