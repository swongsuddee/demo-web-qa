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
                    datatestid="input-text"
                />
            </div>
            <div className="py-4">
                <InputCard
                    cardName="Password"
                    inputProps={{
                        type: "password",
                        placeholder: "Password"
                    }}
                    datatestid="input-text"
                />
            </div>
            <div className="py-4">
                <InputCard
                    cardName="Tel"
                    inputProps={{
                        type: "tel",
                        placeholder: "Phone number"
                    }}
                    datatestid="input-text"
                />
            </div>
        </div>
    )
});

export default input;