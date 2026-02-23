/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Enable SWC minification for faster builds
  compress: true, // Enable Gzip compression
  poweredByHeader: false, // Remove X-Powered-By header for security

  /**
   * Remote patterns for Next.js Image optimization
   * @see https://nextjs.org/docs/app/api-reference/components/image#remotepatterns
   */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'www.credly.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
