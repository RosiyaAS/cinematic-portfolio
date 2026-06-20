import profile from '@/data/profile.json'
import Link from 'next/link'

export default function ProjectPage({ params }) {
  const project = profile.projects.find(p => String(p.id) === String(params.id))

  if (!project) {
    return (
      <main style={{ background: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#fff' }}>Project not found.</p>
      </main>
    )
  }

  return (
    <main style={{
      background: '#0a0a0a',
      minHeight: '100vh',
      color: '#fff',
      fontFamily: 'var(--font-sans, sans-serif)',
      padding: '0',
    }}>

      {/* Back button */}
      <div style={{ padding: '2rem 4rem' }}>
        <Link href="/" style={{
          color: 'rgba(255,255,255,0.5)',
          textDecoration: 'none',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          transition: 'color 0.2s',
        }}>
          ← Back to Portfolio
        </Link>
      </div>

      {/* Hero */}
      <div style={{
        padding: '2rem 4rem 4rem',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <span style={{
          display: 'inline-block',
          background: 'rgba(247,147,30,0.15)',
          border: '1px solid rgba(247,147,30,0.4)',
          color: '#f7931e',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '0.35rem 0.9rem',
          borderRadius: '999px',
          marginBottom: '1.5rem',
        }}>
          {project.type}
        </span>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          textTransform: 'uppercase',
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
        }}>
          {project.title}
        </h1>

        <p style={{
          fontSize: '1.1rem',
          color: 'rgba(255,255,255,0.5)',
          marginBottom: '2rem',
        }}>
          {project.subtitle}
        </p>

        {/* Tech Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              background: 'rgba(247,147,30,0.1)',
              border: '1px solid rgba(247,147,30,0.3)',
              color: '#f7931e',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.3rem 0.8rem',
              borderRadius: '999px',
              letterSpacing: '0.05em',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Project Image */}
      <div style={{
        width: '100%',
        height: '50vh',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            opacity: 0.7,
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 50%, #0a0a0a)',
        }} />
      </div>

      {/* Description */}
      <div style={{
        padding: '4rem',
        maxWidth: '860px',
      }}>
        <h2 style={{
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#f7931e',
          marginBottom: '1.5rem',
        }}>
          About This Project
        </h2>
        <p style={{
          fontSize: '1.05rem',
          lineHeight: 1.85,
          color: 'rgba(255,255,255,0.72)',
        }}>
          {project.desc}
        </p>
      </div>

    </main>
  )
}

export function generateStaticParams() {
  return profile.projects.map(p => ({ id: String(p.id) }))
}
