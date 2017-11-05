var config = require('create-nwb-webpack-config')();

// We need to filter out any chunking plugins, and also the HtmlWebpackPlugin as it conflicts.
config.plugins = config.plugins.filter(function(plugin) {
  return !plugin.chunkNames && !(plugin.options && plugin.options.template);
});

module.exports = config;

