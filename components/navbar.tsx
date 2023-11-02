import React from 'react';
import { Notification } from './notification';

const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-end font-mono text-sm px-5">
            <Notification/>
        </div>
    );
};

export default Navbar;
