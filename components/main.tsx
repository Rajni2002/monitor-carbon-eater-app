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

const Main = () => {
    const appState = useAppContext();
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
            <Badge >{appState.status}</Badge>
            <h1 className='text-2xl mt-4 font-bold dark:text-white'>{appState.location.city}</h1>
            <h3 className='text-lg mt-1 font-semibold text-gray-500 dark:text-white'>{appState.location.state}</h3>
            <Gauge value={45} size='large' showValue />
            <MicroCards />
            <Separator />
            <Map />
            <AlertModal open={open} handleOpen={(open) => setOpen(open)} />
        </div>
    );
};

export default Main;
