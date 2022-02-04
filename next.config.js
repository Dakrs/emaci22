const withFonts = require('next-fonts');
module.exports = withFonts({
  reactStrictMode: true,
  images: {
    domains: ['ddjrr3j94g7u7.cloudfront.net','images.unsplash.com'],
  },
  webpack(config, options) {
    return config;
  }
});
