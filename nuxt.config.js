module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Vue NYC',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'The VueNYC homepage'
      },
      {
        name: 'google-site-verification',
        content: 'RVWaoC-PG8ywIVJDIt6SguYHf3_h_pixSjk1rYALiC8'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      config.module.rules.push({
        test: /\.md$/,
        loader: 'vue-markdown-loader'
      });
      config.module.rules.map( r => {
        let regex = r.test.toString();
        if (regex.includes('svg')) {
          regex = regex.replace('|svg', '');
          r.test = new RegExp(regex);
        }
        return r;
      });
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
        options: {
          // optional [svgo](https://github.com/svg/svgo) options
          svgo: {
            plugins: [{ removeDoctype: true }, { removeComments: true }]
          }
        }
      });
    }
  }
};
