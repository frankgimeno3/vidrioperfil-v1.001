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
        <div className='flex flex-row items-center justify-between w-full px-1 text-gray-200 text-xs' 
            style={{ backgroundColor: '#657896' }}
        >
            <button 
                className={` py-2  w-full border-x border-gray-50 border-opacity-5 ${sectionSelected === 'home' ? 'bg-opacity-50 bg-gray-400' : 'hover:bg-opacity-10 hover:bg-gray-50'}`} 
                onClick={() => useRedirectNavLink('home')}
            >
                Noticias
            </button>
            <button 
                className={` py-2  w-full border-x border-gray-50 border-opacity-5 ${sectionSelected === 'directorio' ? 'bg-opacity-50 bg-gray-400' : 'hover:bg-opacity-10 hover:bg-gray-50'}`} 
                onClick={() => useRedirectNavLink('directorio')}
            >
                Directorio
            </button>
            <button 
                className={` py-2  w-full border-x border-gray-50 border-opacity-5 ${sectionSelected === 'revistas' ? 'bg-opacity-50 bg-gray-400' : 'hover:bg-opacity-10 hover:bg-gray-50'}`} 
                onClick={() => useRedirectNavLink('revistas')}
            >
                Revistas
            </button>
            <button 
                className={` py-2  w-full border-x border-gray-50 border-opacity-5 ${sectionSelected === 'eventos' ? 'bg-opacity-50 bg-gray-400' : 'hover:bg-opacity-10 hover:bg-gray-50'}`} 
                onClick={() => useRedirectNavLink('eventos')}
            >
                Eventos
            </button>
            <button 
                className={` py-2  w-full border-x border-gray-50 border-opacity-5 ${sectionSelected === 'arquitectura' ? 'bg-opacity-50 bg-gray-400' : 'hover:bg-opacity-10 hover:bg-gray-50'}`} 
                onClick={() => useRedirectNavLink('arquitectura')}
            >
                Arquitectura
            </button>
            <button 
                className={` py-2  w-full border-x border-gray-50 border-opacity-5 ${sectionSelected === 'wiki' ? 'bg-opacity-50 bg-gray-400' : 'hover:bg-opacity-10 hover:bg-gray-50'}`} 
                onClick={() => useRedirectNavLink('wiki')}
            >
                Wiki
            </button>
            <button 
                className={` py-2  w-full border-x border-gray-50 border-opacity-5 ${sectionSelected === 'red' ? 'bg-opacity-50 bg-gray-400' : 'hover:bg-opacity-10 hover:bg-gray-50'}`} 
                onClick={() => useRedirectNavLink('red')}
            >
                Red
            </button>
        </div>
    );
};

export default FixedNav;
