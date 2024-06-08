import { Metadata } from "next";
import { InputCard } from "./input-card";

export const metadata: Metadata = {
    title: '3. Input text',
};

const input = (() => {
    return (
        <div>
            <InputCard
                cardName="Text"
                inputProps={{
                    type: "text",
                    placeholder: ""
                }}
                datatestid="input-text"
            />
            <InputCard
                cardName="Email"
                inputProps={{
                    type: "Email",
                    placeholder: "email@domain.com"
                }}
                datatestid="input-text"
            />
            <InputCard
                cardName="Password"
                inputProps={{
                    type: "password",
                    placeholder: "Password"
                }}
                datatestid="input-text"
            />
            <InputCard
                cardName="Tel"
                inputProps={{
                    type: "tel",
                    placeholder: "Phone number"
                }}
                datatestid="input-text"
            />
        </div>
    )
});

export default input;