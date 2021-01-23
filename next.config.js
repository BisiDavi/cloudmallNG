const withImages = require('next-images');

module.exports = withImages();

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
