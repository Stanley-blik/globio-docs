import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <div style={{
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '0.5rem',
        backgroundColor: '#0ea5e9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.2rem'
      }}>
        🎮
      </div>
      <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#0ea5e9' }}>Globio</span>
    </div>
  ),
  project: {
    link: 'https://github.com/Stanley-blik/globio-docs',
  },
  chat: {
    link: 'https://discord.gg/wfkCSURNcq',
  },
  docsRepositoryBase: 'https://github.com/Stanley-blik/globio-docs',
  footer: {
    text: (
      <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
        <div style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>🎮</div>
        <div>Built with ❤️ by game developers, for game developers © {new Date().getFullYear()} Globio Platform</div>
        <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
          The complete serverless game backend. 99% cheaper than Firebase.
        </div>
      </div>
    ),
  },
  primaryHue: 200,
  primarySaturation: 100,
  banner: {
    key: 'next-version',
    text: (
      <a href="https://globio.dev" target="_blank" rel="noopener noreferrer">
        🎉 <strong>Globio v2 is here!</strong> Check out our new features →
      </a>
    ),
  },
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
      <link rel="icon" href="/favicon.ico" />
      <style>
        {`
          :root {
            --nextra-primary-hue: 200deg;
            --nextra-primary-saturation: 100%;
          }
          .dark {
            --nextra-primary-hue: 205deg;
            --nextra-primary-saturation: 90%;
          }
          .nextra-callout {
            border-radius: 0.5rem;
          }
          .nextra-code-block {
            border-radius: 0.5rem;
          }
        `}
      </style>
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div style={{ 
            fontWeight: 'bold', 
            fontSize: '0.9rem', 
            color: '#0ea5e9',
            marginTop: '1.5rem',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {title}
          </div>
        )
      }
      return <>{title}</>
    },
    toggleButton: true
  },
  toc: {
    backToTop: true,
    float: true,
    title: 'On this page',
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
  },
  darkMode: true,
}

export default config