"use client"
import React from 'react';
import {
    PopoverNotificationCenter,
    NotificationBell,
} from '@novu/notification-center';

export const Notification = () => {
    return (
        <PopoverNotificationCenter colorScheme={'light'}>
            {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
        </PopoverNotificationCenter>
    );
};   