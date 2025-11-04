// src/pages/index.tsx
import React from 'react';
import Layout from '@theme/Layout';

const pearIcon = '/img/pear-vector.svg';

const heroTiles = [
  {
    icon: pearIcon,
    title: 'What is Pear?',
    desc: 'A quick definition and purpose.',
    href: '/docs/pear-intro#what-is-pear',
    featured: false,
  },
  {
    emoji: '🆕',
    title: "What’s new with Pear?",
    desc: 'Latest updates and changes.',
    href: '/docs/whats-new',
    featured: true,
  },
  {
    emoji: '📖',
    title: 'Build Your First App',
    desc: 'Learn how to create your first app with Pear.',
    href: '/docs',
    featured: false,
  },
  {
    emoji: '❓',
    title: 'FAQ',
    desc: 'Answers to common questions.',
    href: '/docs/faq',
    featured: false,
  },
];

export default function Home() {
  return (
    <Layout
      title="Pear by Holepunch"
      description="Peer-to-peer runtime for local-first applications">
      <main className="pearHero">

        <img
          src="/img/pear-vector.svg"
          alt="Pear Logo"
          style={{ height: 72, marginBottom: 24 }}
        />

        <h1 className="pearHeroTitle">Pear by Holepunch</h1>

        <p className="pearHeroSubtitle">
          Pear by Holepunch is a combined Peer-to-Peer (P2P) Runtime, Development & Deployment tool.
          Build, share & extend unstoppable, zero-infrastructure P2P applications for Desktop, Terminal & Mobile.
        </p>
        <p className="pearHeroSubtitle" style={{ marginTop: -10 }}>
          Welcome to the Internet of Peers...
        </p>

        <a href="/docs/onboarding/first-application" className="pearButton">
          End-to-end Documentation
        </a>

        <div className="pearLinks">
          <a href="/blog">Blogs →</a>
        </div>

        {/* BIG CIRCLE TILES */}
        <div className="pearHeroTiles pearHeroTiles--grid">
          {heroTiles.map((tile) => (
            <a
              key={tile.title}
              className={`pearTile pearTile--large${tile.featured ? ' pearTile--featured' : ''}`}
              href={tile.href}
              aria-label={tile.title}
            >
              <div className="pearTileIcon" aria-hidden>
                {tile.icon ? (
                  <img src={tile.icon} alt="" style={{ width: 30, height: 30 }} />
                ) : (
                  <span style={{ fontSize: '2rem' }}>{tile.emoji}</span>
                )}
              </div>
              <div className="pearTileText">
                <h3>{tile.title}</h3>
                <p>{tile.desc}</p>
              </div>
            </a>
          ))}
        </div>

      </main>
    </Layout>
  );
}
