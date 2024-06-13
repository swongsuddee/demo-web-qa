import { Metadata } from "next";
import Image from 'next/image'
import { useRouter } from "next/router";

export const metadata: Metadata = {
    title: '7. Download',
};

const DownloadPage = (() => {
    const router = useRouter();
    const basePath = router.basePath;

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
            <a href={`${basePath}/image.png`} download="image.webp">
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

