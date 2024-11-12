import React, { FC } from 'react';
import MainArticleMiniature from './miniatures/main-article/MainArticle';
import ArticleCol from './miniatures/ArticleCol';

interface HeroSectionProps {
  
}

const HeroSection: FC<HeroSectionProps> = ({ }) => {
  return (
    <div className='flex flex-row w-full'>
        <MainArticleMiniature/>
        <ArticleCol/>
    </div>
  );
};

export default HeroSection;