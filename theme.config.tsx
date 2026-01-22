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
    text: (
      <span>
        Built with ❤️ by game developers, for game developers © {new Date().getFullYear()} Globio Platform
      </span>
    ),
  },
  primaryHue: 200,
  primarySaturation: 100,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Globio Platform'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Globio - The Serverless Game Backend" />
      <meta property="og:description" content="99% cheaper than Firebase. Built for games." />
      <meta name="description" content="The complete serverless game backend. 99% cheaper than Firebase with real-time multiplayer, AI, and edge computing." />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎮</text></svg>" />
    </>
  ),
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div style={{ 
            fontWeight: 'bold', 
            fontSize: '0.9rem', 
            color: '#0ea5e9',
            marginTop: '1rem',
            marginBottom: '0.5rem'
          }}>
            {title}
          </div>
        )
      }
      return <>{title}</>
    }
  },
  toc: {
    backToTop: true
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  search: {
    placeholder: 'Search Globio docs...'
  }
}

export default config