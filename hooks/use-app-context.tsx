"use client"
import React, { useState } from 'react';

type StatusTypes = "Good" | "Satisfactory" | "Moderately polluted" | "Poor" | "Very Poor" | "Severe"


const useAppContext = () => {
    const [appState, setAppState] = useState({
        location: {
            city: "Ahmedabad",
            state: "Gujarat"
        },
        status: "Good",
        airQuality: {
            index: 40,
            pm10: 12.43,
            pm2dec5: 10.05,
            no2: 8.57,
            other: 9.9
        }
    })

    return appState;
};

export default useAppContext;
