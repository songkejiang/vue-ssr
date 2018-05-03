module.exports = (isDev) => {
  return {
    preserveWhiteSpace: true,
    extractCSS: !isDev,
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    }
    // hotReload:true,
    // loaders:{},
    // preLoader:{},
    // postLoader:{}
  }
}
