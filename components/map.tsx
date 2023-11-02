import React from 'react';
import { Card } from './ui/card';

const Map = () => {
    return (
        <Card className='overflow-hidden w-full h-[100vw] my-6'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.726699769772!2d72.54400907546425!3d23.033804915908625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84eaf57ac615%3A0x5c7498bb96b34c97!2sLalbhai%20Dalpatbhai%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1698946648502!5m2!1sen!2sin"
                style={{
                    border: 0
                }}
                className='w-full h-full'
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Card>
    );
};

export default Map;