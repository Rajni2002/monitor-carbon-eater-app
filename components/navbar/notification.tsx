"use client"
import React from 'react';
import {
    PopoverNotificationCenter,
    NotificationBell,
    ButtonTypeEnum,
    IMessage,
} from '@novu/notification-center';
import { useTheme } from 'next-themes';

export const Notification = () => {
    const { theme } = useTheme();
    async function handlerOnActionClick(
        templateIdentifier: string,
        type: ButtonTypeEnum,
        message: IMessage
    ) {
        console.log("ƒ")
    }
    return (
        <PopoverNotificationCenter colorScheme={theme === "dark" ? "dark" : "light"} onActionClick={handlerOnActionClick}>
            {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
        </PopoverNotificationCenter>
    );
};   