"use client"
import useAppContext from '@/hooks/use-app-context';
import React, { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Gauge } from './ui/gauge';
import MicroCards from './micro-cards/micro-cards';
import Map from './map';
import { Separator } from './ui/separator';
import AlertModal from './alert';
import { useSocket } from '@novu/notification-center';
import AlertBeacon from "./alert-beacon"
import { gaugeColor } from '@/lib/utils';
import { Chart } from './chart';
import PlanTheTrip from './plan-the-trip/plan-the-trip';

const Main = () => {
    const { appState } = useAppContext();
    const [open, setOpen] = useState<boolean>(false);
    const [alertBeacon, setAlertBeacon] = useState<boolean>(false);

    const { socket } = useSocket();

    useEffect(() => {
        if (socket) {
            socket.on("notification_received", () => {
                if (!open) setOpen(true);
                if (!alertBeacon) setAlertBeacon(true);
            });
        }

        return () => {
            if (socket) {
                socket.off("notification_received");
            }
        };
    }, [socket, open, alertBeacon]);

    return (
        <div className='p-4'>
            {alertBeacon && <AlertBeacon openAlertHandler={() => setOpen(true)} />}
            <h1 className='text-2xl mt-4 font-bold dark:text-white'>{appState.location.city}</h1>
            <h3 className='text-lg mt-1 font-semibold text-gray-500'>{appState.location.state}</h3>
            <Badge className={`mt-6 bg-gray-200 text-gray-800`} >{gaugeColor(appState.airQuality.index / 500 * 100).status}</Badge>
            <Gauge value={appState.airQuality.index} size='large' showValue />
            <MicroCards />
            <Chart />
            <Separator />
            <Map />
            <AlertModal open={open} handleOpen={(open) => setOpen(open)} />
            <PlanTheTrip />
        </div>
    );
};

export default Main;
