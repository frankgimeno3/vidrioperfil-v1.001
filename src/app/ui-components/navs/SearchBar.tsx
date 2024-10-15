import Link from 'next/link';
 import React, { FC } from 'react';

interface SearchBarProps {
  color: string;
  placeholderText:string;
  lupaColor:string;
}

const SearchBar: FC<SearchBarProps> = ({ color, placeholderText, lupaColor }) => {
  

  return (
    <div className={`flex flex-row w-96 border border-${color} rounded-lg text-${color} text-xs mr-12`}>
      <input
        className={`bg-transparent pl-4 py-2 w-full placeholder-${color} h-8`}
        placeholder={placeholderText}
      />
      <Link className="w-10 my-auto"   href={'/search/check'}>
        <svg
          viewBox="0 0 60 30"
          xmlns="http://www.w3.org/2000/svg"
          className={`fill-${color} hover:fill-${lupaColor} text-${color}`}
        >
          <path className={`fill-${color} hover:fill-${color}`} d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" />
        </svg>
      </Link>
    </div>
  );
};

export default SearchBar;
