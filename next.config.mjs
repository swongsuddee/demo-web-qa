/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://github.com/swongsuddee/demo-web-qa.git' : '',
    images: {
        loader: 'imgix',
        path: '',
    },
    trailingSlash: true,
};