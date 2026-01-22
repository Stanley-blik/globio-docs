import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

export default withNextra({
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true
  },
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      // Redirect legacy paths if needed
      // {
      //   source: '/legacy-path',
      //   destination: '/new-path',
      //   permanent: true
      // }
    ]
  }
})