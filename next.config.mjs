/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.awesome-selfhosted.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
