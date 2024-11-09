/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-image-domain.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  webpack(config, { dev, isServer }) {
    if (dev) {
      // Use the default eval-source-map for development
      config.devtool = 'eval-source-map';
    }
    return config;
  },
};

export default nextConfig;
