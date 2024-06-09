import { Metadata } from "next";
import { InputCard } from "./input-card";

export const metadata: Metadata = {
    title: '3. Input text',
};

const input = (() => {
    return (
        <div>
            <div className="py-4">
                <InputCard
                    cardName="Text"
                    inputProps={{
                        type: "text",
                        placeholder: ""
                    }}
                    datatestid="input-text"
                />
            </div>
            <div className="py-4">
                <InputCard
                    cardName="Email"
                    inputProps={{
                        type: "Email",
                        placeholder: "email@domain.com"
                    }}
                    datatestid="input-email"
                />
            </div>
            <div className="py-4">
                <InputCard
                    cardName="Password"
                    inputProps={{
                        type: "password",
                        placeholder: "Password"
                    }}
                    datatestid="input-password"
                />
            </div>
            <div className="py-4">
                <InputCard
                    cardName="Tel"
                    inputProps={{
                        type: "tel",
                        placeholder: "Phone number"
                    }}
                    datatestid="input-phone"
                />
            </div>
            <div className="py-4 ">
                <div className="mx-1 p-2">
                    <div className="grid grid-flow-col auto-cols-max ">
                        <div className="w-40">
                            div
                        </div>
                        <div className="w-60 ">
                            <div
                                className="px-2 min-h-6 h-auto max-w-48 rounded-md border-solid border border-slate-400"
                                contentEditable="true"
                                data-testid="div-input"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default input;