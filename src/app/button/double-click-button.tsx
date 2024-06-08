'use client'

import clsx from 'clsx';
import React, { useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function DoubleClickButton(
    {
        ButtonProps,
        datatestid
    }: {
        ButtonProps: ButtonProps,
        datatestid: string
    }
) {
    const style = 'mx-1 px-2 rounded-md border-solid border border-amber-500 active:active:bg-amber-500'
    const [count, setCount] = useState(0);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(event.type)
        if (event.type === 'dblclick') {
            setCount(count + 1);
        }
    };

    return (
        <button
            className={clsx(
                `${style}`
            )}
            onDoubleClick={handleClick}
            disabled={ButtonProps.disabled}
        >
            <div>
                {ButtonProps.children} (
                <span data-testid={datatestid}>{count}</span>
                )
            </div>
        </button >
    );
}
