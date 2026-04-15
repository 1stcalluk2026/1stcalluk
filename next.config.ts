/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "threebestrated.co.uk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
      // ✅ FIXED: Free Movement RSS images
      {
        protocol: "https",
        hostname: "freemovement.org.uk",
        pathname: "/**",
      },
    ],
  },

  // ✅ UPDATED: Added wildcard redirect for legal pages
  async redirects() {
    return [
      {
        source: '/get-started',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/legal/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors http://localhost:3333 http://localhost:3000 https://*.sanity.build https://*.sanity.dev;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;