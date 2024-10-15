'use client';
import React, { FC, useState, useEffect } from 'react';
import Logo from '../../logo/Logo';

interface NavWebProps {}

const NavWeb: FC<NavWebProps> = () => {
    const [edition, setEdition] = useState('');

    useEffect(() => {
        // Obtener la parte del idioma de la URL
        const path = window.location.pathname;
        const firstPart = path.split('/')[1]; // Esto obtiene 'es', 'al' o 'pt'
        
        if (['es', 'al', 'pt'].includes(firstPart)) {
            setEdition(firstPart);
        }
    }, []); // Solo se ejecuta una vez al montar el componente

    const changeEdition = (chosenEdition: string) => {
        setEdition(chosenEdition);
    };

    return (
        <div className='flex flex-row items-center justify-between w-full px-12' style={{ backgroundColor: '#1d305e' }}>
            <div className='flex flex-row items-center py-2'>
                <div className='py-auto'>
                    <Logo />
                </div>
                {(edition === 'es') && (
                    <div className='flex flex-col ml-12 w-56 mt-2'>
                        <a href="/es" className='hover:font-bold font-bold' onClick={() => changeEdition('es')}>Edición España</a>
                        <a href="/pt" className='hover:font-bold' onClick={() => changeEdition('pt')}>Edición Portugal</a>
                        <a href="/al" className='hover:font-bold' onClick={() => changeEdition('al')}>Edición América Latina</a>
                    </div>
                )}
                {(edition === 'al') && (
                    <div className='flex flex-col ml-12 w-56 mt-2'>
                        <a href="/es" className='hover:font-bold' onClick={() => changeEdition('es')}>Edición España</a>
                        <a href="/pt" className='hover:font-bold' onClick={() => changeEdition('pt')}>Edición Portugal</a>
                        <a href="/al" className='hover:font-bold font-bold' onClick={() => changeEdition('al')}>Edición América Latina</a>
                    </div>
                )}
                {(edition === 'pt') && (
                    <div className='flex flex-col ml-12 w-56 mt-2'>
                        <a href="/es" className='hover:font-bold' onClick={() => changeEdition('es')}>Edição Espanha</a>
                        <a href="/pt" className='hover:font-bold font-bold' onClick={() => changeEdition('pt')}>Edição Portugal</a>
                        <a href="/al" className='hover:font-bold' onClick={() => changeEdition('al')}>Edição América Latina</a>
                    </div>
                )}
            </div>
            <div className='relative w-96'>
                <svg className='absolute left-3 top-2.5 w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M10 2a8 8 0 105.293 14.707l5 5a1 1 0 001.414-1.414l-5-5A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z' />
                </svg>
                <input
                    className='bg-transparent border border-white rounded-lg text-white pl-10 py-2 w-full placeholder-white'
                    placeholder='Buscar...'
                />
            </div>
            <div className='flex flex-col'>
                <button className='px-7 py-1 bg-transparent hover:bg-white hover:bg-opacity-10 text-white border border-white rounded-lg my-1'>Registro</button>
                <button className='px-7 py-1 bg-transparent hover:bg-white hover:bg-opacity-10 text-white border border-white rounded-lg my-1'>Iniciar sesión</button>
            </div>
        </div>
    );
};

export default NavWeb;
