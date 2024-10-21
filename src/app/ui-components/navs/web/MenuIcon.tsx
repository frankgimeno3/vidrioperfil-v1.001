import React, { FC } from 'react';

interface MenuIconProps {}

const MenuIcon: FC<MenuIconProps> = () => {
  return (
    <div className='h-full mx-3'>
      <svg
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="fill-current text-white h-7 w-7   h-12 w-12  " 
    >
      <g>
        <g>
          <path d="M381,190.9H131c-11,0-20-9-20-20s9-20,20-20h250c11,0,20,9,20,20S392,190.9,381,190.9z" />
        </g>
        <g>
          <path d="M381,361.1H131c-11,0-20-9-20-20s9-20,20-20h250c11,0,20,9,20,20S392,361.1,381,361.1z" />
        </g>
        <g>
          <path d="M381,276H131c-11,0-20-9-20-20s9-20,20-20h250c11,0,20,9,20,20S392,276,381,276z" />
        </g>
      </g>
    </svg>
    </div>
  );
};

export default MenuIcon;
