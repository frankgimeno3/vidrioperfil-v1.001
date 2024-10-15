"use client"
import FixedNav from '@/app/ui-components/navs/web/FixedNav';
import TopNav from '@/app/ui-components/navs/web/TopNav';
import React, { FC, useState } from 'react';

interface RevistasProps {

}

const Revistas: FC<RevistasProps> = ({ }) => {
  const [sectionSelected, setSectionSelected] = useState('revistas')

  return (
    <div className='bg-gray-200 text-gray-600'>
      <TopNav />
      <FixedNav sectionSelected={sectionSelected} />
      <div className='min-h-screen'>
      <div className='flex flex-col '>
        <p>REVISTAS Y PUBLICACIONES</p>
        <p>Vea los últimos números publicados de nuestras revistas para España, Portugal y América Latina.</p>

        <div>
          <p>España y Portugal</p>
        </div>

        <div>
          <p>América Latina</p>
        </div>

        <div>
          <p>Quién es Quién España, Portugal y Fabricantes mundiales</p>
        </div>

        <div>
          <p>Hueco Arquitectura</p>
        </div>

        <div>
          <p>Galería de artistas</p>
        </div>

        <div>
          <p>Memorias y artículos de ferias y congresos </p>
        </div>
      </div>
      <div className='flex flex-col mt-12'>
        <p>GALERÍAS DE ARTISTAS EN VIDRIO</p>
        <p>HUECO ARQUITECTURA</p>
        <p>MEMORIAS Y ARTÍCULOS DE FERIAS Y CONGRESOS</p>
        <p>QUIÉN ES QUIÉN ESPAÑA, PORTUGAL Y FABRICANTES MUNDIALES</p>
        <p>REVISTAS AMÉRICA LATINA</p>
        <p>REVISTAS ESPAÑA Y PORTUGAL</p>
        <p>VIDRIOPERFIL NEWS</p>

      </div>
      </div>
    </div>
  );
};

export default Revistas;