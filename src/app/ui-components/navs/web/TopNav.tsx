'use client';
import React, { FC, useState, useEffect } from 'react';
import Logo from '../../logo/Logo';
import SearchBar from '../SearchBar';
import { handleSignOut } from '@/actions/cognitoActions';
import MenuIcon from './MenuIcon';
import MessagesIcon from './MessagesIcon';
import ProfileIcon from './ProfileIcon';

interface NavWebProps {
    isLoggedIn:boolean;
 }

const redirect = (destination: string) => {
    if (destination === 'home') { window.location.href = '/'; }
    if (destination === 'login') { window.location.href = '/auth/login'; }
    if (destination === 'signup') { window.location.href = '/auth/signup'; }
};

const NavWeb: FC<NavWebProps> = ({isLoggedIn}) => {
    const [edition, setEdition] = useState('');

    useEffect(() => {
        const path = window.location.pathname;
        const firstPart = path.split('/')[1]; 
        
        if (['es', 'al', 'pt'].includes(firstPart)) {
            setEdition(firstPart);
        } else {setEdition('es')}
    }, []);  

    const changeEdition = (chosenEdition: string) => {
        setEdition(chosenEdition);
    };

    const handleCerrarSesion = ()=>{
        handleSignOut()
        window.location.href = '/';
    }

    return (
        <div className='flex flex-row items-center justify-between w-full px-12 text-gray-300' style={{ backgroundColor: '#1d305e' }}>
            <div className='flex flex-row justify-between items-center py-2 text-xs '>
                <div className='py-auto' onClick={() => redirect('home')}>
                    <Logo />
                </div>
                {(edition === 'es') && (
                    <div className='flex flex-col ml-12 w-56 mt-2'>
                        <a href="/es" className='hover:font-bold font-bold' onClick={() => changeEdition('es')}>Edición España</a>
                        <a href="/pt" className='hover:font-bold ' onClick={() => changeEdition('pt')}>Edição Portugal</a>
                        <a href="/al" className='hover:font-bold' onClick={() => changeEdition('al')}>Edición América Latina</a>
                    </div>
                )}
                {(edition === 'al') && (
                    <div className='flex flex-col ml-12 w-56 mt-2'>
                        <a href="/es" className='hover:font-bold' onClick={() => changeEdition('es')}>Edición España</a>
                        <a href="/pt" className='hover:font-bold ' onClick={() => changeEdition('pt')}>Edição Portugal</a>
                        <a href="/al" className='hover:font-bold font-bold' onClick={() => changeEdition('al')}>Edición América Latina</a>
                    </div>
                )}
                {(edition === 'pt') && (
                    <div className='flex flex-col ml-12 w-56 mt-2'>
                        <a href="/es" className='hover:font-bold' onClick={() => changeEdition('es')}>Edición España</a>
                        <a href="/pt" className='hover:font-bold font-bold' onClick={() => changeEdition('pt')}>Edição Portugal</a>
                        <a href="/al" className='hover:font-bold' onClick={() => changeEdition('al')}>Edición América Latina</a>
                    </div>
                )}
                {(edition === '') && (
                    <div className='flex flex-col ml-12 w-56 mt-2'>
                        <a href="/es" className='hover:font-bold' onClick={() => changeEdition('es')}>Edición España</a>
                        <a href="/pt" className='hover:font-bold ' onClick={() => changeEdition('pt')}>Edição Portugal</a>
                        <a href="/al" className='hover:font-bold' onClick={() => changeEdition('al')}>Edición América Latina</a>
                    </div>
                )}
            </div>
            <div className='flex flex-row items-center '>
                <SearchBar color={'white'} placeholderText={'Buscar...'} />
                <div className='flex flex-row text-xs items-center my-auto '>
                    {isLoggedIn ? (
                        <div className='  flex flex-row items-center '>
                            <MessagesIcon isOpen={false}/>
                            <ProfileIcon/>
                            <MenuIcon/>
                             <button className='px-5 py-2 bg-red-500 hover:bg-red-700 text-white rounded-lg mr-1'
                            onClick={()=>handleCerrarSesion()} >
                            Cerrar Sesión
                        </button>
                        </div>
                    ) : (
                        <>
                            <button className='px-5 py-2 bg-white bg-opacity-10 hover:bg-opacity-30 text-white rounded-lg mr-1'
                                style={{ width: '120px' }}
                                onClick={() => redirect('signup')}>
                                Registro
                            </button>
                            <button className='px-5 py-2 bg-white bg-opacity-10 hover:bg-opacity-30 text-white rounded-lg mr-1'
                                style={{ width: '120px' }}
                                onClick={() => redirect('login')}>
                                Iniciar sesión
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavWeb;
