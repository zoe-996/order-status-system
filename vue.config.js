module.exports = {
    css: {
      loaderOptions: {
        less: {
          lessOptions: {
            modifyVars: {
              'primary-color': '#1DA57A',
              'link-color': '#1DA57A',
              'text-color': '#000000',
              'border-radius-base': '2px',
              'font-size-base':'0.14rem'
            },
            javascriptEnabled: true,
          },
        },
      },
      extract: process.env.NODE_ENV === 'production' ? {
        ignoreOrder: true,
      } : false,
    },
    chainWebpack:config => {
      config.optimization.minimize(true);
      config.optimization.splitChunks({
          chunks:'all'
      })
    },
    productionSourceMap: false
};