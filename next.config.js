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
      {
        hostname: 'maja-colman.be',
      },
      {
        hostname: 'thecentraltrend.com',
      },
      {
        hostname: 'i1.sndcdn.com',
      },
      {
        hostname: 'thecentraltrend.com',
      },
      {
        hostname: 'images.paramount.tech',
      },
      {
        hostname: 'www.udiscovermusic.com',
      },
      {
        hostname: 'i0.wp.com',
      },
      {
        hostname: 'nullee.storage.iran.liara.space',
      },
      {
        hostname: 'cdn.wegow.com',
      },
      {
        hostname: 'www.the-sun.com',
      },
    ],
  },
});
