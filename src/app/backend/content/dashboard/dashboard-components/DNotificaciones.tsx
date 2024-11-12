import React, { FC } from 'react';

interface DNotificacionesProps {
  
}

const DNotificaciones: FC<DNotificacionesProps> = ({ }) => {
  return (
    <div>
        <p> Número de usuarios actuales en vidrioperfil.com: </p>
        <p>Tráfico en edición España</p>
        <p>Tráfico en edición AL</p>
        <p>Tráfico en edición PT</p>
    </div>
  );
};

export default DNotificaciones;