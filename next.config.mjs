/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  
    images: {
      remotePatterns: [
        {
          // This matches any images from the specified domain
          protocol: 'https',
          hostname: 'your-image-domain.com',
          port: '', // Leave empty for default ports
          pathname: '/**', // Match any path
        },
      ],
    },
  };
  
  export default nextConfig;
  