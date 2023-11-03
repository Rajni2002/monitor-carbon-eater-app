// @ts-nocheck
"use client"
import React, { useEffect } from 'react';
import useAppContext from '@/hooks/use-app-context';
import MicroCard from './micro-card';
import { checkEnvironment } from '@/lib/utils';
import { Card } from '../ui/card';
import DirectionIcon from './direction-icon';
import { Skeleton } from '../ui/skeleton';

const MicroCards = () => {
    const { appState, setAppState } = useAppContext();
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(checkEnvironment() + '/api/weather', {
                    method: "GET"
                })
                return await response.json();
            } catch (error) {
                return error;
            }
        }
        if (!appState.loading) {
            setAppState(prev => ({
                ...prev,
                loading: true
            }))
            fetchWeather().then((data) => {
                setAppState(prev => ({
                    ...prev,
                    loading: false,
                    weather: data
                }))
            }).catch(err => console.log(err));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='grid grid-cols-2 gap-4 my-10'>
            {appState.loading ?
                <>
                    <Skeleton className='w-full h-40' />
                    <Skeleton className='w-full h-40' />
                    <Skeleton className='w-full h-40' />
                    <Skeleton className='w-full h-40' />
                    <Skeleton className='w-full h-40' />
                    <Skeleton className='w-full h-40' />
                </>
                :
                <>
                    <Card className='backdrop-blur-sm bg-black/5 p-4'>
                        <h4 className='text-md font-semibold text-gray-500'>Temperature</h4>
                        <h2 className='text-2xl mt-3 font-bold'>{
                            appState.weather?.data?.main?.temp}˚C</h2>
                    </Card>
                    <Card className='backdrop-blur-sm bg-black/5 p-4'>
                        <h4 className='text-md font-semibold text-gray-500'>Windspeed</h4>
                        <div style={{
                            rotate: `${appState.weather?.data?.wind?.deg ?? 67}deg`
                        }}>
                            <DirectionIcon className="my-4 mx-auto" />
                        </div>
                        <h3 className='text-gray-400'>{appState.weather?.data?.wind?.speed}{" "}Kmph</h3>
                    </Card>
                    <MicroCard type="PM10" value={appState.airQuality.pm10} />
                    <MicroCard type="PM2.5" value={appState.airQuality.pm2dec5} />
                    <MicroCard type="NO2" value={appState.airQuality.no2} />
                    <MicroCard type="Others" value={appState.airQuality.other} />
                </>}
        </div>
    );
};

export default MicroCards;
