import React from 'react';
import { Notification } from './notification';
import SwitchThemeLogo from './switch-theme';

const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between font-mono text-sm px-5">
            <SwitchThemeLogo />
            <Notification />
        </div>
    );
};

export default Navbar;
