import React, { FC, useState } from 'react';
import DNotificaciones from './dashboard-components/DNotificaciones';
import Dalertas from './dashboard-components/Dalertas';
import Danaliticas from './dashboard-components/Danaliticas';

interface DashboardProps {

}

const Dashboard: FC<DashboardProps> = ({ }) => {
    const [dashboardContent, setDashboardContent] = useState('notificaciones')

    const ChangeDashboardContent = (selection: string) => {
        setDashboardContent(selection)
    }
    return (
        <div className='text-gray-800 p-5'>
            <div className='flex flex-row w-full' >
                {dashboardContent == 'notificaciones'
                    ?
                    <div className='bg-gray-200 border-r border-gray-300 mr-1' style={{ width: "240px" }} 
                    onClick={() => ChangeDashboardContent('notificaciones')}>
                        <p className='pl-3 py-1'>Página de notificaciones </p>
                    </div>
                    :
                    <div className='bg-gray-300 border-r border-gray-300 mr-1' style={{ width: "240px" }}
                        onClick={() => ChangeDashboardContent('notificaciones')}>
                        <p className='pl-3 py-1'>Página de notificaciones </p>
                    </div>
                }
                {dashboardContent == 'alertas'
                    ? <div className='bg-gray-200 border-r border-gray-300 mr-1' style={{ width: "240px" }}
                        onClick={() => ChangeDashboardContent('alertas')}> <p className='pl-3 py-1'>Alertas </p>
                    </div>
                    :
                    <div className='bg-gray-300 border-r border-gray-300 mr-1' style={{ width: "240px" }}
                        onClick={() => ChangeDashboardContent('alertas')}> <p className='pl-3 py-1'>Alertas </p>
                    </div>
                }
                {dashboardContent == 'analiticas'
                    ?
                    <div className='bg-gray-200 border-r border-gray-300 mr-1' style={{ width: "240px" }}
                        onClick={() => ChangeDashboardContent('analiticas')}>
                        <p className='pl-3 py-1'>Analíticas </p>
                    </div>
                    :
                    <div className='bg-gray-300 border-r border-gray-300 mr-1' style={{ width: "240px" }}
                        onClick={() => ChangeDashboardContent('analiticas')}>
                        <p className='pl-3 py-1'>Analíticas </p>
                    </div>
                }
            </div>
            <div className='bg-gray-200 w-full h-full'    >
                {dashboardContent == 'notificaciones' && <DNotificaciones/>}
                {dashboardContent == 'alertas' && <Dalertas/>}
                {dashboardContent == 'analiticas' && <Danaliticas/>}
            </div>
        </div>
    );
};

export default Dashboard;