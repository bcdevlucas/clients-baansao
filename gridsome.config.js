module.exports = {
  siteName: 'Baan Saowanee',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/blog/:slug',
        refs: {
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'properties/*.yml',
        typeName: 'Property',
        route: '/property/:id',
        refs: {
          tags: {
            typeName: 'PropertyTag',
            route: '/property-tag/:id',
            create: true
          }
        }
      }
    }
  ],
  chainWebpack: (config, { isServer }) => {
    config.mode('development');

    config.module
			.rule('scss')
				.test(/\.scss$/)
				.oneOf('normal')
					.use('sass')
					.loader('sass-loader')
					.end()
				.end();

    // TODO: Document this - https://github.com/gridsome/gridsome/issues/384
    if (isServer) {
      config.externals([/^(vue|vue-router|vue-meta)$/]);
    }
  }
};
