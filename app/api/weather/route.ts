import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=76.6565&lon=38.98878&appid=206993f2213eb386550b79602da0d3ee")
    const data = await res.json();
    return NextResponse.json({
        data
    })
}