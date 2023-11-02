import React, { useState } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from './ui/sheet';
import { Separator } from './ui/separator';
import { Progress } from './ui/progress';
import useInterval from '@/hooks/use-interval';
import PreventionCards from './prevention-cards';

type AlertModalType = {
    open: boolean
    handleOpen: (open: boolean) => void
}

const AlertModal: React.FC<AlertModalType> = ({ open, handleOpen }) => {
    const [value, setValue] = useState(20);
    useInterval(() => {
        setValue(Math.floor(Math.random() * (20 - 10) + 10))
    }, 5000)

    return (
        <Sheet open={open} onOpenChange={(open) => handleOpen(open)}>
            <SheetContent side="bottom" className='h-[80vh] dark:bg-alertBG'>
                <SheetTitle className='text-2xl dark:text-white'>
                    🚨 Alert Rajni
                </SheetTitle>
                <SheetDescription className='mt-2'>
                    Nearest DeviceID <span className='font-semibold'>GJAMD-b40f53f2</span> is turned ON.
                    Air Quality is Poor.
                    Please take the Mentioned Recondations
                </SheetDescription>
                <Separator className='my-4' />
                <h2 className='font-semibold text-lg text-gray-300'>Vehicle Density per frame</h2>
                <div className='flex items-center justify-between'>
                    <div className='w-11/12'>
                        <Progress value={value} className='mt-3 w-full' color='#FF0000' />
                    </div>
                    <div className='pt-2 font-semibold text-red-500'>{value}</div>
                </div>
                <Separator className='my-4' />
                <div className='overflow-y-scroll h-full no-scrollbar'>
                    <h2 className='text-lg text-gray-400 mb-3'>Preventions</h2>
                    <PreventionCards />
                    <SheetFooter className='text-center font-semibold mt-6 mb-56'>
                        Stay Safe 💖
                    </SheetFooter>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default AlertModal;
