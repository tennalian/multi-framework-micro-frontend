const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4202/",
    uniqueName: "mfe2"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe2",
      library: { type: "var", name: "mfe2" },
      filename: "remoteEntry.js",
      // For hosts (please adjust)
      remotes: {
        'mfe3': "mfe3",
      },
      // For remotes (please adjust)
      exposes: {
        './web-components': './src/bootstrap.ts',
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    }),
  ],
};
