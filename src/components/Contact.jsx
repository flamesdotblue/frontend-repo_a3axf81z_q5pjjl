import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-title', { y: 20, autoAlpha: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } });
      gsap.from('.contact-card', { y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out', delay: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="contact-title text-3xl font-semibold tracking-tight md:text-4xl">Let’s work together</h2>
        <div className="contact-card mt-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <p className="max-w-2xl text-white/80">Have a project in mind or want to jam on a motion system? I’m available for select collaborations and freelance engagements.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="mailto:hello@flames.dev" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90">Email me</a>
            <a href="#projects" className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-white/40">See more work</a>
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-white/50">© {new Date().getFullYear()} Flames.dev — Built with React & GSAP</p>
      </div>
    </section>
  );
}
