/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image optimization configuration for local images
  images: {
    unoptimized: true, // Disable remote image optimization since you're using local assets
  },

  // Custom headers configuration
  async headers() {
    return [
      {
        // This applies to all files inside the `_next/static` folder
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache assets for 1 year
          },
        ],
      },
      {
        // Cache control for static files like images, fonts, etc.
        source: '/_next/static/media/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache media files for 1 year
          },
        ],
      },
    ];
  },
};

export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'your-image-domain.com',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },

//   webpack(config, { isDevelopment }) {
//     if (isDevelopment) {
//       // Ensure that we use an optimal devtool for development mode
//       config.devtool = 'cheap-module-source-map'; // or 'eval-source-map' based on your needs
//     }
//     return config;
//   },
// };

// export default nextConfig;
