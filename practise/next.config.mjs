/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'governorsindh.com',
      }
    ],
  }

};

export default nextConfig;
