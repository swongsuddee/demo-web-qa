import { Metadata } from "next";
import { LeftClickButton } from "./left-click-button";
import { DoubleClickButton } from "./double-click-button";
import { RightClickButton } from "./right-click-button";
import { ToggleButton } from "./toggle-button";

export const metadata: Metadata = {
    title: '2. Button',
};

const button = (() => {
    return (
        <div>
            <div className="grid grid-flow-col auto-cols-max py-4 ">
                <div>
                    Single
                    <LeftClickButton
                        ButtonProps={{ children: "Click" }}
                        datatestid={"click-count"}
                    />
                    button
                </div>
            </div>
            <div className="grid grid-flow-col auto-cols-max py-4 ">
                <div>
                    Double
                    <DoubleClickButton
                        ButtonProps={{ children: "Click" }}
                        datatestid={"dbclick-count"}
                    />
                    button
                </div>
            </div>
            <div className="grid grid-flow-col auto-cols-max py-4 ">
                <div>
                    Right
                    <RightClickButton
                        ButtonProps={{ children: "Click" }}
                        datatestid={"rightclick-count"}
                    />
                    button
                </div>
            </div>
            <div className="grid grid-flow-col auto-cols-max py-4 ">
                <div>
                    Disabled
                    <LeftClickButton
                        ButtonProps={{ children: "Click", disabled: true }}
                        datatestid={"diabled-count"}
                    />
                    button
                </div>
            </div>
            <div className="grid grid-flow-col auto-cols-max py-4 ">
                <div>
                    Toggle
                    <ToggleButton
                        ButtonProps={{ children: "Like" }}
                        datatestid={"like-button"}
                    />
                    button
                </div>
            </div>
        </div >
    )
})

export default button;