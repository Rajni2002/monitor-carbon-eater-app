"use client"
import useAppContext from '@/hooks/use-app-context';
import React from 'react';
import { Badge } from './ui/badge';
import { Gauge } from './ui/gauge';
import MicroCards from './MicroCards/micro-cards';
import Map from './map';
import { Separator } from './ui/separator';

const Main = () => {
    const appState = useAppContext();
    return (
        <div className='p-4'>
            <Badge >{appState.status}</Badge>
            <h1 className='text-2xl mt-4 font-bold dark:text-white'>{appState.location.city}</h1>
            <h3 className='text-lg mt-1 font-semibold text-gray-500 dark:text-white'>{appState.location.state}</h3>
            <Gauge value={45} size='large' showValue />
            <MicroCards />
            <Separator />
            <Map />
        </div>
    );
};

export default Main;
