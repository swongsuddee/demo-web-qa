'use client'

import clsx from 'clsx';
import React, { useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function ToggleButton(
    {
        ButtonProps,
        datatestid
    }: {
        ButtonProps: ButtonProps,
        datatestid: string
    }
) {
    const style = 'mx-1 px-2 rounded-md border-solid border border-amber-500'
    const [bgColor, setBgColor] = useState(style);
    const [toggle, setToggle] = useState(true);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(event.type, toggle)
        if (toggle) {
            setBgColor('mx-1 px-2 bg-amber-500 rounded-md border-solid border border-amber-500');
            setToggle(!toggle)
        }
        else {
            setBgColor(style)
            setToggle(!toggle)
        }
    };

    return (
        <button
            className={clsx(
                `${bgColor}`
            )}
            onClick={handleClick}
            disabled={ButtonProps.disabled}
            data-testid={datatestid}
        >
            {ButtonProps.children}
        </button >
    );
}
