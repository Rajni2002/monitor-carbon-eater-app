import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const PlanTheTrip = () => {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Plan your Trip</AccordionTrigger>
                <AccordionContent className='text-gray-400'>
                    Using this feature user can plan the greenest route of the journey ✨
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default PlanTheTrip;
