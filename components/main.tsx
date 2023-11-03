"use client"
import useAppContext from '@/hooks/use-app-context';
import React, { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Gauge } from './ui/gauge';
import MicroCards from './MicroCards/micro-cards';
import Map from './map';
import { Separator } from './ui/separator';
import AlertModal from './alert';
import { useSocket } from '@novu/notification-center';
import AlertBeacon from "./alert-beacon"
import { cn, gaugeColor } from '@/lib/utils';
import { Chart } from './chart';

const Main = () => {
    const { appState, setAppState } = useAppContext();
    const [open, setOpen] = useState<boolean>(false);

    const { socket } = useSocket();

    useEffect(() => {
        if (socket)
            socket.on("notification_received", (data) => {
                if (!open) {
                    console.log(data);
                    setOpen(true);
                }
            });

        return () => {
            if (socket) socket.off("notification_received");
        };
    }, [socket, open]);

    return (
        <div className='p-4'>
            <AlertBeacon openAlertHandler={() => setOpen(true)} />
            <h1 className='text-2xl mt-4 font-bold dark:text-white'>{appState.location.city}</h1>
            <h3 className='text-lg mt-1 font-semibold text-gray-500 dark:text-white'>{appState.location.state}</h3>
            <Badge className={`mt-6 bg-gray-200 text-gray-800`} >{gaugeColor(appState.airQuality.index / 500 * 100).status}</Badge>
            <Gauge value={appState.airQuality.index} size='large' showValue />
            <MicroCards />
            <Chart />
            <Separator />
            <Map />
            <AlertModal open={open} handleOpen={(open) => setOpen(open)} />
        </div>
    );
};

export default Main;
