import React from 'react';

type AlertBeaconType = {
    openAlertHandler: () => void
}

const AlertBeacon: React.FC<AlertBeaconType> = ({ openAlertHandler }) => {
    return (
        <div className='h-20 mt-5 flex items-center justify-center'>
            <span
                className='inline-flex z-0 font-semibold px-4 py-2 bg-red-500 rounded-3xl animate-bounce text-white'
                onClick={openAlertHandler}>
                ⚠️{" "}DeviceId : GJAMD-b40f53f2
            </span >
        </div>
    );
};

export default AlertBeacon;
/**
 *    <span className='font-semibold px-4 py-2 bg-red-500 rounded-3xl text-white animate-bounce'>
                ⚠️{" "}DeviceId : GJAMD-b40f53f2</span>
 */