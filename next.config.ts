import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  /* config options here */
 
  images: {
    domains: [
      "i.ibb.co",
      "i.ibb.co.com",
      "10.10.7.9",
    ],
  },
};
 
export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: '**',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: '**',
//         pathname: '/**',
//       },
//     ],
//   },
//   experimental: {
//     serverActions: {
//       bodySizeLimit: '1000mb',
//     },
//   },
// };

// export default nextConfig;
