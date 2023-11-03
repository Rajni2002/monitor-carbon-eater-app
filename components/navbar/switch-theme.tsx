"use client"
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

const SwitchThemeLogo = () => {
    const { setTheme, theme } = useTheme();
  
    return (
        <div className='border p-2 rounded-full cursor-pointer' onClick={() => setTheme((theme === "dark" ? "light" : "dark"))}>
            <Image src="/logo.svg" alt='logo' width={25} height={25} />
        </div>
    );
}

export default SwitchThemeLogo;
