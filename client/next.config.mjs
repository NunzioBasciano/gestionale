/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3-inventory-management-basciano.s3.eu-central-1.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;

// https://s3-inventory-management-basciano.s3.eu-central-1.amazonaws.com/logo.png