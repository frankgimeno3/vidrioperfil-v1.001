import React, { FC } from 'react';
import Logo from '../../logo/Logo';

interface FixedNavProps { }

const FixedNav: FC<FixedNavProps> = () => {
    return (
        <div className='flex flex-row items-center justify-left w-full px-12 text-white 
        // bg-zinc-500
        ' 
        style={{ backgroundColor: '#657896' }}
        >
            <button className='py-2 px-24 hover:bg-white bg-opacity-5 hover:bg-opacity-10 border-x border-white border-opacity-10'>Directorio</button>
            <button className='py-2 px-24 hover:bg-white bg-opacity-5 hover:bg-opacity-10 border-x border-white border-opacity-10'>Revistas</button>
            <button className='py-2 px-24 hover:bg-white bg-opacity-5 hover:bg-opacity-10 border-x border-white border-opacity-10'>Eventos</button>
            <button className='py-2 px-24 hover:bg-white bg-opacity-5 hover:bg-opacity-10 border-x border-white border-opacity-10'>Arquitectura</button>
            <button className='py-2 px-24 hover:bg-white bg-opacity-5 hover:bg-opacity-10 border-x border-white border-opacity-10'>Red</button>
            </div>
    );
};

export default FixedNav;
