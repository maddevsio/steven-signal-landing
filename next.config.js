module.exports = {
  reactStrictMode: true,

  webpack: function (config) {
    config.experiments = { topLevelAwait: true }
    config.module.rules.push()
    return config
  },
}
