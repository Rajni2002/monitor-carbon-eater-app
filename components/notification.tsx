"use client"
import React from 'react';
import {
    PopoverNotificationCenter,
    NotificationBell,
    ButtonTypeEnum,
    IMessage,
} from '@novu/notification-center';

export const Notification = () => {
    async function handlerOnActionClick(
        templateIdentifier: string,
        type: ButtonTypeEnum,
        message: IMessage
    ) {
        console.log("ƒ")
    }
    return (
        <PopoverNotificationCenter colorScheme={'light'} onActionClick={handlerOnActionClick}>
            {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
        </PopoverNotificationCenter>
    );
};   