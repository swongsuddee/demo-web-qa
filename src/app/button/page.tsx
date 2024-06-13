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
            <div className="py-4">
                <div className="grid grid-cols-3 justify-center">
                    <div>Single</div>
                    <div>
                        <LeftClickButton
                            ButtonProps={{ children: "Click" }}
                            datatestid={"click-count"}
                        />
                    </div>
                    <div>button</div>
                </div>
            </div>
            <div className="py-4">
                <div className="grid grid-cols-3">
                    <div>Double</div>
                    <DoubleClickButton
                        ButtonProps={{ children: "Click" }}
                        datatestid={"dbclick-count"}
                    />
                    <div>button</div>
                </div>
            </div>
            <div className="py-4">
                <div className="grid grid-cols-3">
                    <div>Right</div>
                    <RightClickButton
                        ButtonProps={{ children: "Click" }}
                        datatestid={"rightclick-count"}
                    />
                    <div>button</div>
                </div>
            </div>
            <div className="py-4">
                <div className="grid grid-cols-3">
                    <div>Disabled</div>
                    <LeftClickButton
                        ButtonProps={{ children: "Click", disabled: true }}
                        datatestid={"diabled-count"}
                    />
                    <div>button</div>
                </div>
            </div>
            <div className="py-4">
                <div className="grid grid-cols-3">
                    <div>Toggle</div>
                    <ToggleButton
                        ButtonProps={{ children: "Like" }}
                        datatestid={"like-button"}
                    />
                    <div>button</div>
                </div>
            </div>
        </div >
    )
})

export default button;