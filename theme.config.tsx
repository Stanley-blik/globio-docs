import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#0ea5e9' }}>🎮 Globio</span>,
  project: {
    link: 'https://github.com/Stanley-blik/globio-docs',
  },
  chat: {
    link: 'https://discord.gg/globio',
  },
  docsRepositoryBase: 'https://github.com/Stanley-blik/globio-docs',
  footer: {
    text: 'Globio Platform Documentation',
  },
  primaryHue: 200,
  primarySaturation: 100,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Globio'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Globio" />
      <meta property="og:description" content="The complete serverless game backend" />
    </>
  )
}

export default config