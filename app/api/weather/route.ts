import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=23.033935267406207&lon=72.546535945367728&appid=206993f2213eb386550b79602da0d3ee")
    const data = await res.json();
    return NextResponse.json({
        data
    })
}