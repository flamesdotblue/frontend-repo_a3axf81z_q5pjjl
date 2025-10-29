import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Interactive Data Canvas',
    desc: 'WebGL + GSAP driven data storytelling with rich transitions and micro-interactions.',
    tags: ['React', 'GSAP', 'WebGL'],
    link: '#'
  },
  {
    title: 'Realtime Collab Board',
    desc: 'A multiplayer whiteboard with buttery-smooth ink and delightful motion cues.',
    tags: ['React', 'Socket.io', 'Motion'],
    link: '#'
  },
  {
    title: 'Immersive Product Site',
    desc: '3D product exploration with choreographed scroll-based sequences.',
    tags: ['Spline', 'GSAP', 'Three.js'],
    link: '#'
  }
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-title', {
        y: 20,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      });

      gsap.from('.project-card', {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="projects-title text-3xl font-semibold tracking-tight md:text-4xl">Selected Projects</h2>
        <p className="mt-3 max-w-2xl text-white/70">A snapshot of things I’ve built recently — focused on performance, polish, and purposeful motion.</p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <article key={i} className="project-card group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/20">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">{t}</span>
                ))}
              </div>
              <a href={p.link} className="mt-5 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
                Visit <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
