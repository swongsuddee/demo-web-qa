import { Metadata } from "next";
import Image from 'next/image'

export const metadata: Metadata = {
    title: '7. Download',
};

const DownloadPage = (() => {
    const IndexPage = () => <a href="/api/getPDF">Download PDF</a>;
    // export default IndexPage;

    return (
        <div className="justify-center">
            <Image
                className="justify-self-center"
                src="/image.webp"
                width={200}
                height={200}
                alt="Dummy image for download"
            />
            <br />
            <a href="/image.webp" download="image.webp">
                <button
                    className="
                    justify-self-center
                    bg-amber-500 
                    text-white 
                    px-4 
                    py-2 
                    rounded 
                    hover:bg-amber-400 
                    ">
                    Download Image
                </button>
            </a>
        </div>
    )
});

export default DownloadPage;

