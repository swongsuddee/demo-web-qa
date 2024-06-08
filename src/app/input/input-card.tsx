'use client'

import React, { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

export function InputCard(
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
    const [value, setValue] = useState("");

    return (
        <div className="mx-1 p-2">

            <div className="grid grid-flow-col auto-cols-max ">
                <div className="w-40">
                    {cardName}
                </div>
                <div className="w-60 ">
                    <input
                        className="px-2 rounded-md border-solid border border-slate-400"
                        type={inputProps.type}
                        placeholder={inputProps.placeholder}
                        value={inputProps.value}
                        disabled={inputProps.disabled}
                        onChange={(e) => { console.log(e.currentTarget.value) }}
                        data-testid={datatestid}
                    />
                </div>
                {/* <div className="">
                    Value:
                </div>
                <div className="w-40 max-w-40 mx-1 px-2 rounded-md bg-slate-100">
                    {value}
                </div> */}
            </div>
        </div>
    )
}