export default {
  index: {
    title: 'Introduction',
    theme: {
      breadcrumb: false,
      footer: true,
      sidebar: false,
      toc: true,
      pagination: false
    }
  },
  'getting-started': 'Getting Started',
  '---': {
    type: 'separator'
  },
  'core-services': {
    title: 'The Core 5',
    type: 'menu',
    items: {
      globaldoc: 'GlobalDoc',
      globalvault: 'GlobalVault', 
      globalcode: 'GlobalCode',
      globioid: 'GlobioID',
      globalpulse: 'GlobalPulse'
    }
  },
  'power-services': {
    title: 'The Power 5',
    type: 'menu',
    items: {
      globalsync: 'GlobalSync',
      globalbrain: 'GlobalBrain',
      globalscope: 'GlobalScope',
      globalsignal: 'GlobalSignal',
      globalmart: 'GlobalMart'
    }
  },
  '----': {
    type: 'separator'
  },
  deployment: 'Deployment',
  features: 'Platform Features'
}