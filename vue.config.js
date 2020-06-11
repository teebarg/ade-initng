module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  devServer: {
    progress: false,
  },
  configureWebpack: {
    // Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
      symlinks: false,
    },
  },
  transpileDependencies: [
    '@coreui/utils',
  ],
};
