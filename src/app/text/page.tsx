import { Metadata } from "next";

export const metadata: Metadata = {
    title: '1. Text',
};

const text = (() => {
    return (
        <div>
            <div className="py-4">
                This text is contains <span className="hidden">word</span> with display hidden.
            </div>
            <div className="py-4">
                This text is contains <span className="opacity-50">word</span> with opacity 50.
            </div>
            <div className="py-4">
                This text is contains <span className="opacity-0">word</span> with opacity 0.
            </div>
            <div className="py-4">
                This text is just a plain text.
            </div>
        </div >
    )
})

export default text;