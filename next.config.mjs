/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.panda.org'
            },
            {
                protocol: 'https',
                hostname: 'svgsilh.com'
            },
        ],
      }
};

export default nextConfig;
