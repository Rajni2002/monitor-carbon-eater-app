"use client"
import React from 'react';
import {
    NovuProvider,
    PopoverNotificationCenter,
    NotificationBell,
} from '@novu/notification-center';
import { useMediaQuery } from '@/hooks/use-media-query';

export const Notification = () => {
    const matches = useMediaQuery('(max-width: 500px)')
    return (
        <NovuProvider subscriberId="6537c9e35d52f64aae0e1d8f" applicationIdentifier={'vs4fK7LaheE-'} styles={{
            layout: {
                root: {
                    width: !matches ? "30vw" : "100vw",
                    background: "blur(10px)"
                }
            }
        }}>
            <PopoverNotificationCenter colorScheme={'dark'}>
                {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
            </PopoverNotificationCenter>
        </NovuProvider>
    );
};   