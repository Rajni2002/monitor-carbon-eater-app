"use client"
import React from 'react';
import useAppContext from '@/hooks/use-app-context';
import MicroCard from './micro-card';

const MicroCards = () => {
    const { appState } = useAppContext();

    return (
        <div className='grid grid-cols-2 gap-4 my-10'>
            <MicroCard type="PM10" value={appState.airQuality.pm10} />
            <MicroCard type="PM2.5" value={appState.airQuality.pm2dec5} />
            <MicroCard type="NO2" value={appState.airQuality.no2} />
            <MicroCard type="Others" value={appState.airQuality.other} />
        </div>
    );
};

export default MicroCards;
