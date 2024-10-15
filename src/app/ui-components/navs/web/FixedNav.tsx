"use client"
import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

interface FixedNavProps { }

const FixedNav: FC<FixedNavProps> = () => {
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
        <div className='flex flex-row items-center justify-left w-full px-12 text-white' 
            style={{ backgroundColor: '#657896' }}
        >
            <button className='py-2 px-24 hover:bg-white bg-opacity-5 hover:bg-opacity-10 border-x border-white border-opacity-10' 
                onClick={() => useRedirectNavLink('home')}
            >
                Noticias
            </button>
            <button className='py-2 px-24 hover:bg-white bg-opacity-5 hover:bg-opacity-10 border-x border-white border-opacity-10' 
                onClick={() => useRedirectNavLink('directorio')}
            >
                Directorio
            </button>
            <button className='py-2 px-24 hover:bg-white bg-opacity-5 hover:bg-opacity-10 border-x border-white border-opacity-10' 
                onClick={() => useRedirectNavLink('revistas')}
            >
                Revistas
            </button>
            <button className='py-2 px-24 hover:bg-white bg-opacity-5 hover:bg-opacity-10 border-x border-white border-opacity-10' 
                onClick={() => useRedirectNavLink('eventos')}
            >
                Eventos
            </button>
            <button className='py-2 px-24 hover:bg-white bg-opacity-5 hover:bg-opacity-10 border-x border-white border-opacity-10' 
                onClick={() => useRedirectNavLink('arquitectura')}
            >
                Arquitectura
            </button>
            <button className='py-2 px-24 hover:bg-white bg-opacity-5 hover:bg-opacity-10 border-x border-white border-opacity-10' 
                onClick={() => useRedirectNavLink('red')}
            >
                Red
            </button>
        </div>
    );
};

export default FixedNav;
