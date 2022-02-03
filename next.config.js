const withFonts = require('next-fonts');
module.exports = withFonts({
  reactStrictMode: true,
  images: {
    domains: ['ddjrr3j94g7u7.cloudfront.net'],
  },
  webpack(config, options) {
    return config;
  }
});
