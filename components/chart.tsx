"use client"

import { gaugeColor } from "@/lib/utils";
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts"

function formatDate(date: Date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    return `${day}/${month}`;
}

function generateDateRange() {
    const currentDate = new Date();
    const dateRange = [];

    // Generate 4 dates backward
    for (let i = 4; i >= 1; i--) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() - i);
        dateRange.push({
            aqi: Math.floor(Math.random() * (214 - 95) + 95),
            date: formatDate(date)
        });
    }

    // Add the current date
    dateRange.push({
        aqi: Math.floor(Math.random() * (214 - 95) + 95),
        date: formatDate(currentDate)
    });

    // Generate 4 dates forward
    for (let i = 1; i <= 4; i++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i);
        dateRange.push({
            aqi: Math.floor(Math.random() * (214 - 95) + 95),
            date: formatDate(date)
        });
    }

    return dateRange;
}

const data = generateDateRange();

export function Chart() {
    return (
        <ResponsiveContainer width="90%" height={250}>
            <BarChart data={data} title="1-Day AQI">
                <XAxis
                    dataKey="date"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => value}
                />
                <Bar dataKey="aqi" fill="#000000" radius={[10, 10, 10, 10]} >
                    {data.map((item, index) => {
                        const fillColor = gaugeColor(item.aqi / 500 * 100).bgcolor
                        return <Cell key={index} fill={fillColor} />
                    })}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}