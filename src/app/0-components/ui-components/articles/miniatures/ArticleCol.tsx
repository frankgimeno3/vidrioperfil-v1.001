import React, { FC } from 'react';
import FeaturedArticleMiniature from './featured/FeaturedArticle';

interface ArticleColProps {

}

const ArticleCol: FC<ArticleColProps> = ({ }) => {
  return (
    <div className="border border-gray-600 h-full" style={{ width: '1000px'}}>
      <p className='bg-gray-300 p-3 py-4 text-black'>Featured Articles</p>
      <div className='p-5 border border-gray-300'>
        <FeaturedArticleMiniature />
        <FeaturedArticleMiniature />
        <FeaturedArticleMiniature />
      </div>
    </div>
  );
};

export default ArticleCol;