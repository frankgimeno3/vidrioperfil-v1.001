import React, { FC } from 'react';
import BasicArticleMiniature from './miniatures/basic/BasicArticle';

interface ArticleRowProps {

}

const ArticleRow: FC<ArticleRowProps> = ({ }) => {
    return (
        <div className='flex flex-row m-5'>
            <BasicArticleMiniature />
            <BasicArticleMiniature />
            <BasicArticleMiniature />
        </div>
    );
};

export default ArticleRow;