import React, { FC } from 'react';

interface MainArticleMiniatureProps {
  // Define props here if needed
}

const MainArticleMiniature: FC<MainArticleMiniatureProps> = () => {
  return (
    <div className="flex flex-col border border-gray-600">
      <p className="bg-gray-300 text-black m-8" style={{ height: '500px', width: '1000px'}}>
        MainArticleMiniature
      </p>
    </div>
  );
};

export default MainArticleMiniature;
