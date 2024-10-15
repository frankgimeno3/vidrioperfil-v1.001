"use client"
import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

interface FixedNavProps {
    sectionSelected: string
}

const FixedNav: FC<FixedNavProps> = ({ sectionSelected }) => {
    const router = useRouter();
    const [isLogged, setIsLogged] = useState(false);
    const [portalSelected, setPortalSelected] = useState('es');

    const useRedirectNavLink = (param: string) => {
        // Definir la basePath
        const basePath = portalSelected; // 'es'
        
        // Lógica para determinar la ruta de redirección
        if (param === 'home' && !isLogged) {
            // Redirigir a /basePath si param es 'home' y no está logueado
            router.push(`/${basePath}`);
        } else {
            // Construir la URL para los demás casos
            const targetPath = isLogged ? `l/${param}` : param; // 'l/home' o 'home'
            const redirectUrl = `/${basePath}/${targetPath}`;
            router.push(redirectUrl);
        }
    };

    return (
        <div className='flex flex-row items-center justify-center w-full px-12 text-gray-200' 
            style={{ backgroundColor: '#657896' }}
        >
            <button 
                className={`py-3 px-24 border-x border-gray-50 border-opacity-5 ${sectionSelected === 'home' ? 'bg-opacity-50 bg-gray-400' : 'hover:bg-opacity-10 hover:bg-gray-50'}`} 
                onClick={() => useRedirectNavLink('home')}
            >
                NOTICIAS
            </button>
            <button 
                className={`py-3 px-24 border-x border-gray-50 border-opacity-5 ${sectionSelected === 'directorio' ? 'bg-opacity-50 bg-gray-400' : 'hover:bg-opacity-10 hover:bg-gray-50'}`} 
                onClick={() => useRedirectNavLink('directorio')}
            >
                DIRECTORIO
            </button>
            <button 
                className={`py-3 px-24 border-x border-gray-50 border-opacity-5 ${sectionSelected === 'revistas' ? 'bg-opacity-50 bg-gray-400' : 'hover:bg-opacity-10 hover:bg-gray-50'}`} 
                onClick={() => useRedirectNavLink('revistas')}
            >
                REVISTAS
            </button>
            <button 
                className={`py-3 px-24 border-x border-gray-50 border-opacity-5 ${sectionSelected === 'eventos' ? 'bg-opacity-50 bg-gray-400' : 'hover:bg-opacity-10 hover:bg-gray-50'}`} 
                onClick={() => useRedirectNavLink('eventos')}
            >
                EVENTOS
            </button>
            <button 
                className={`py-3 px-24 border-x border-gray-50 border-opacity-5 ${sectionSelected === 'arquitectura' ? 'bg-opacity-50 bg-gray-400' : 'hover:bg-opacity-10 hover:bg-gray-50'}`} 
                onClick={() => useRedirectNavLink('arquitectura')}
            >
                ARQUITECTURA
            </button>
            <button 
                className={`py-3 px-24 border-x border-gray-50 border-opacity-5 ${sectionSelected === 'wiki' ? 'bg-opacity-50 bg-gray-400' : 'hover:bg-opacity-10 hover:bg-gray-50'}`} 
                onClick={() => useRedirectNavLink('arquitectura')}
            >
                WIKI
            </button>
            <button 
                className={`py-3 px-24 border-x border-gray-50 border-opacity-5 ${sectionSelected === 'red' ? 'bg-opacity-50 bg-gray-400' : 'hover:bg-opacity-10 hover:bg-gray-50'}`} 
                onClick={() => useRedirectNavLink('red')}
            >
                RED
            </button>
        </div>
    );
};

export default FixedNav;
