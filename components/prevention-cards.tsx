import React from 'react';
import { Card } from './ui/card';
import Image from 'next/image';

type PreventionCardType = {
    path: string
    text: string
}
const arrayCards = [
    {
        path: "/avoid-congested-areas.jpg",
        text: "Please avoid congested areas"
    },
    {
        path: "/closing-window.webp",
        text: "Close Windows"
    },
    {
        path: "/stay-home.jpg",
        text: "Try to stay home"
    },
    {
        path: "/wear-mask.jpg",
        text: "Whenever going outside wear mask"
    },
]

const PreventionCard = ({ path, text }: PreventionCardType) => {
    return (
        <Card className='backdrop-blur-sm p-4 my-4'>
            <Image src={path} alt={text} className="rounded-md object-cover" width={80} height={80}/>
            <p className='mt-4 text-gray-600'>
                {text}
            </p>
        </Card>
    )
}

const PreventionCards = () => {
    return (
        <div>
            {arrayCards.map(({ path, text }) => <PreventionCard key={Math.random()} path={path} text={text}/>)}
        </div>
    );
};

export default PreventionCards;
