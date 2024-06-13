'use client'

import { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

export function BoxCard(
    {
        cardName,
        inputProps,
        datatestid
    }: {
        cardName: string,
        inputProps: InputProps,
        datatestid: string
    }
) {
    return (
        <div className="py-4">
            {/* <input
                className="mr-2"
                type={inputProps.type}
                key={cardName}
                value={cardName}
                checked={inputProps.checked}
                disabled={inputProps.disabled}
                data-testid={datatestid}


                onClick={() => {
                    console.log({ cardName })
                }}
            /> */}
            <span>{cardName}</span>
        </div>
    );
}