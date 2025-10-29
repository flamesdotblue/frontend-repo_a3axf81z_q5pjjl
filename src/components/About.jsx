import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-block', {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About</h2>
        <div className="about-block mt-6 max-w-3xl text-white/80">
          I’m a creative developer focused on crafting immersive, performant web experiences. My toolkit centers on React, GSAP, and modern 3D on the web. I care about clear information hierarchy, expressive motion, and the small details that make interfaces feel alive.
        </div>
        <div className="about-block mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <p className="text-sm text-white/70">Motion Systems</p>
            <p className="mt-1 text-lg font-semibold">Choreography first</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <p className="text-sm text-white/70">Performance</p>
            <p className="mt-1 text-lg font-semibold">60fps as a feature</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <p className="text-sm text-white/70">Accessibility</p>
            <p className="mt-1 text-lg font-semibold">Motion with respect</p>
          </div>
        </div>
      </div>
    </section>
  );
}
