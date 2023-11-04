"use client"
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

const SwitchThemeLogo = () => {
    const { setTheme, theme } = useTheme();
  
    return (
        <div className='cursor-pointer overflow-hidden flex items-center'>
            <Image onClick={() => setTheme((theme === "dark" ? "light" : "dark"))} className='border object-contain rounded-full h-12 w-12' src="/g20.png" alt='logo' width={40} height={80} />
            <Image className='border object-contain p-2 bg-white rounded-full h-12 w-12 ml-4' src="/emblem.png" alt='logo' width={40} height={80} />
        </div>
    );
}

export default SwitchThemeLogo;
