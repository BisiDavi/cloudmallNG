const withImages = require('next-images');

module.exports = withImages({
  env: {
    API_KEY: process.env.API_KEY
  }
});

/* module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: `http://localhost:3333/api/:slug*`,
      },
    ]
 },
  withImages()
} */
