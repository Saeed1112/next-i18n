const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts',
);

module.exports = withNextIntl({
  experimental: {
    serverActions: true,
    appDir: true,
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'yt3.googleusercontent.com',
      },
    ],
  },
});
