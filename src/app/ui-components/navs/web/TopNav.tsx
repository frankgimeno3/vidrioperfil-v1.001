'use client';
import React, { FC, useState, useEffect } from 'react';
import Logo from '../../logo/Logo';
import SearchBar from '../SearchBar';

interface NavWebProps {}

// Función para redirigir a la página principal
const redirectHome = () => {
    window.location.href = '/';
};

const NavWeb: FC<NavWebProps> = () => {
    const [edition, setEdition] = useState('');

    useEffect(() => {
        // Obtener la parte del idioma de la URL
        const path = window.location.pathname;
        const firstPart = path.split('/')[1]; // Esto obtiene 'es', 'al' o 'pt'
        
        if (['es', 'al', 'pt'].includes(firstPart)) {
            setEdition(firstPart);
        }
    }, []);  

    const changeEdition = (chosenEdition: string) => {
        setEdition(chosenEdition);
    };

    return (
        <div className='flex flex-row items-center justify-between w-full px-12' style={{ backgroundColor: '#1d305e' }}>
            <div className='flex flex-row items-center py-2 text-xs'>
                <div className='py-auto' onClick={() => redirectHome()}>
                    <Logo />
                </div>
                {( edition == '' || edition == undefined  ) && (
                    <div className='flex flex-col ml-12 w-56 mt-2'>
                        <a href="/es" className='hover:font-bold ' onClick={() => changeEdition('es')}>Edición España</a>
                        <a href="/pt" className='hover:font-bold' onClick={() => changeEdition('pt')}>Edición Portugal</a>
                        <a href="/al" className='hover:font-bold' onClick={() => changeEdition('al')}>Edición América Latina</a>
                    </div>
                )}
                              
                {(edition === 'es'  ) && (
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
     
            <SearchBar/>
            <div className='flex flex-col text-xs'>
                <button className='px-7 py-1 bg-transparent hover:bg-white hover:bg-opacity-10 text-white border border-white rounded-lg my-1'>Registro</button>
                <button className='px-7 py-1 bg-transparent hover:bg-white hover:bg-opacity-10 text-white border border-white rounded-lg my-1'>Iniciar sesión</button>
            </div>
        </div>
    );
};

export default NavWeb;
