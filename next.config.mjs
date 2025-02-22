/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["aceternity.com", "api.microlink.io", "cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aceternity.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ],
  },
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },
};

export default nextConfig;
