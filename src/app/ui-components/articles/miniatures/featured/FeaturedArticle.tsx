import React, { FC } from 'react';

interface FeaturedArticleMiniatureProps {
  
}

const FeaturedArticleMiniature: FC<FeaturedArticleMiniatureProps> = ({ }) => {
  return (
    <div className='flex flex-row m-5 h-full border border-gray-50'>
      <div className='bg-gray-400 ' style={{width: '120px',height: '120px' }}>
      </div>
      <div className='flex flex-col ml-4'>
      <p> Featured Article Miniature Title</p>
      <p> Featured Article Miniature Content</p>
      <p> Featured Article Miniature Content</p>
      <p> Featured Article Miniature Content</p>

      </div>
          </div>
  );
};

export default FeaturedArticleMiniature;