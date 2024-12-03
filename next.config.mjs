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

  webpack(config, { isDevelopment }) {
    if (isDevelopment) {
      // Ensure that we use an optimal devtool for development mode
      config.devtool = 'cheap-module-source-map'; // or 'eval-source-map' based on your needs
    }
    return config;
  },
};

export default nextConfig;
