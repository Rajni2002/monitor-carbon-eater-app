import React from 'react';

type AlertBeaconType = {
    openAlertHandler: () => void
}

const AlertBeacon: React.FC<AlertBeaconType> = ({ openAlertHandler }) => {
    return (
        <div className='h-20 mt-5 flex items-center justify-center'>
            <span className="leading-6 relative rounded-full cursor-pointer flex items-center whitespace-nowrap animate-bounce">
                <span className="animate-ping mx-auto h-[90%] w-full absolute rounded-full bg-red-500 opacity-75">
                </span>
                <span
                    className='inline-flex z-0 font-semibold px-4 py-2 bg-red-500 rounded-3xl text-white'
                    onClick={openAlertHandler}>
                    ⚠️{" "}DeviceId : GJAMD-b40f53f2
                </span >
            </span>
        </div>
    );
};

export default AlertBeacon;
/**
 *    <span className='font-semibold px-4 py-2 bg-red-500 rounded-3xl text-white animate-bounce'>
                ⚠️{" "}DeviceId : GJAMD-b40f53f2</span>
 */