/*
module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}
*/ 

// module.exports = {
//   reactStrictMode: true,
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
//   images: {
//     domains: ['localhost', 'via.placeholder.com', 'raw.githubusercontent.com', 'github.com'],
//   }
// };

module.exports = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    domains: ['localhost', 'via.placeholder.com', 'raw.githubusercontent.com', 'github.com'],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}
