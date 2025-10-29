import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <h1 className="hero-heading max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Building playful, modern web experiences
        </h1>
        <p className="hero-subheading mt-4 max-w-xl text-base text-white/80 md:text-lg">
          I craft interactive interfaces with React, GSAP, and WebGL. Scroll to explore selected work and motion studies.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a href="#projects" className="hero-cta rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90">
            View Projects
          </a>
          <a href="#contact" className="hero-cta rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition-colors hover:border-white/40">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
