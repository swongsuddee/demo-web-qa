/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://github.com/swongsuddee/demo-web-qa.git' : '',
    images: {
        loader: 'imgix',
        path: '',
    },
    trailingSlash: true,
};

export default nextConfig;
