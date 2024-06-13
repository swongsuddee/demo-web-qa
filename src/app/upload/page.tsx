import { Metadata } from "next";
import ImageUploadPage from "./upload-handler";

export const metadata: Metadata = {
    title: '8. Upload',
};

const UploadPage = (() => {
    return (
        <div className="grid grid-cols-1">
            <ImageUploadPage />
            {/* <div>
                <MultipleImageUploadPage />
            </div> */}
        </div>
    )
})

export default UploadPage;