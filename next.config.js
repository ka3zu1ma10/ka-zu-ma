module.exports = {
  reactStrictMode: true,
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === 'production' ? '/ka-zu-ma' : undefined,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ka-zu-ma/' : undefined,
  trailingSlash: true,
}
