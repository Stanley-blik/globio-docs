import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'

const docsComponents = getDocsMDXComponents()

// Custom components for Globio docs
const FeatureCard = ({ children, title, icon, color = '#0ea5e9' }) => (
  <div style={{
    border: '1px solid #e5e7eb',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    backgroundColor: '#f9fafb',
    marginBottom: '1rem',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  }} onMouseEnter={(e) => {
    e.target.style.transform = 'translateY(-5px)';
    e.target.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
  }} onMouseLeave={(e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = 'none';
  }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
      <div style={{ fontSize: '1.5rem', flexShrink: 0' }}>{icon}</div>
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0', color: color, fontSize: '1.25rem' }}>{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  </div>
)

const PricingCard = ({ children, title, price, highlight = false }) => (
  <div style={{
    border: `2px solid ${highlight ? '#0ea5e9' : '#e5e7eb'}`,
    borderRadius: '0.75rem',
    padding: '1.5rem',
    textAlign: 'center',
    backgroundColor: highlight ? '#f0f9ff' : 'white',
    position: 'relative',
    overflow: 'hidden'
  }}>
    {highlight && (
      <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        background: '#0ea5e9',
        color: 'white',
        padding: '0.25rem 0.75rem',
        fontSize: '0.8rem',
        borderTopRightRadius: '0.25rem',
        borderBottomLeftRadius: '0.25rem',
        fontWeight: 'bold'
      }}>
        POPULAR
      </div>
    )}
    <h3 style={{ color: highlight ? '#0ea5e9' : '#0ea5e9', fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
    {price && <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>{price}</div>}
    <ul style={{ listStyleType: 'none', paddingLeft: 0, textAlign: 'left', marginBottom: '1.5rem' }}>
      {children}
    </ul>
    <button style={{
      backgroundColor: highlight ? '#0ea5e9' : '#9ca3af',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      fontWeight: 'bold',
      width: '100%'
    }}>
      Get Started
    </button>
  </div>
)

const ComparisonTable = ({ children }) => (
  <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
      {children}
    </table>
  </div>
)

const Callout = ({ children, type = 'default' }) => {
  const styles = {
    default: { borderLeftColor: '#9ca3af', backgroundColor: '#f9fafb' },
    info: { borderLeftColor: '#3b82f6', backgroundColor: '#eff6ff' },
    warning: { borderLeftColor: '#f59e0b', backgroundColor: '#fffbeb' },
    error: { borderLeftColor: '#ef4444', backgroundColor: '#fef2f2' },
    success: { borderLeftColor: '#10b981', backgroundColor: '#ecfdf5' }
  }
  
  return (
    <div style={{
      borderLeft: '4px solid',
      borderLeftColor: styles[type].borderLeftColor,
      backgroundColor: styles[type].backgroundColor,
      padding: '1rem',
      borderRadius: '0 0.5rem 0.5rem 0',
      margin: '1rem 0'
    }}>
      {children}
    </div>
  )
}

export const useMDXComponents = components => ({
  ...docsComponents,
  ...components,
  FeatureCard,
  PricingCard,
  ComparisonTable,
  Callout
})
