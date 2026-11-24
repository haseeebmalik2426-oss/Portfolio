import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, School, Code2, Server, BrainCircuit, MonitorPlay, Trophy,
  Menu, X, ChevronDown, Sparkles, BookOpen, ArrowUpRight, Mail, Phone, MapPin
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  NAVIGATION                                                        */
/* ------------------------------------------------------------------ */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Education', href: '#education' },
    { label: 'Interests', href: '#interests' },
  ];

  return (
    <nav className="nav-bar">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 300, color: '#c9a84c', textDecoration: 'none', letterSpacing: '0.08em' }}>
          Muhammad Haseeb
        </a>

        <div style={{ display: 'flex', gap: '2.2rem', alignItems: 'center' }} className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#e0ddd0', textDecoration: 'none', transition: 'color 0.3s', position: 'relative' }}
              onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
              onMouseLeave={e => e.currentTarget.style.color = '#e0ddd0'}
            >
              {l.label}
              <span style={{ position: 'absolute', bottom: -4, left: 0, width: '100%', height: '1px', background: '#c9a84c', transform: 'scaleX(0)', transformOrigin: 'right', transition: 'transform 0.3s ease' }}
                className="nav-underline"
              />
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: '#e0ddd0', cursor: 'pointer', display: 'none', zIndex: 110 }} className="mobile-menu-btn" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{ position: 'fixed', top: 72, left: 0, right: 0, zIndex: 105, background: 'rgba(6,15,28,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '2rem' }}
          >
            <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontSize: '1.2rem', fontFamily: "'Cormorant Garamond', serif", color: '#f0efe8', textDecoration: 'none', letterSpacing: '0.05em' }}>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', height: '100vh', minHeight: 700, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background image with overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18, filter: 'grayscale(60%) contrast(1.2)' }}
        />
        <div className="hero-overlay" />
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <div className="hero-content">
          <div className="hero-copy">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.15rem', color: '#c9a84c', letterSpacing: '0.14em', marginBottom: '1.2rem' }}
          >
            Lecturer of Computer Science
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#f0efe8', marginBottom: '1.5rem' }}
          >
            Muhammad <br />
            <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>Haseeb</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontSize: '1.05rem', color: '#b0b0b0', maxWidth: 520, lineHeight: 1.75, marginBottom: '2.5rem' }}
          >
            Teaching excellence meets digital craft. Based at Punjab College Shujabad with a Master's from IUB in Computer Science.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a href="#about" className="btn-pro">Explore My Work</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </motion.div>
          </div>
          <motion.div
            className="hero-profile-icon"
            initial={{ opacity: 0, scale: 0.9, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/muhammad-haseeb-profile.png"
              alt="Muhammad Haseeb"
              className="hero-profile-image"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5a6578' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={20} color="#c9a84c" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ABOUT                                                              */
/* ------------------------------------------------------------------ */
function About() {
  return (
    <section id="about" style={{ position: 'relative', zIndex: 2, background: 'var(--navy-deep)' }}>
      <div className="bg-texture" />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '140px 2rem 120px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-label">About Me</div>
            <h2 className="section-title">Educator, Developer,<br />Lifelong Learner</h2>
            <div className="divider-gold" style={{ marginBottom: '1.75rem' }} />

            <p style={{ color: '#b8b8b8', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.4rem' }}>
              I serve as a <strong style={{ color: '#f0efe8', fontWeight: 500 }}>Lecturer of Computer Science</strong> at <strong style={{ color: '#f0efe8', fontWeight: 500 }}>Punjab College Shujabad</strong>, where I combine rigorous academic instruction with hands-on digital practice.
            </p>
            <p style={{ color: '#b8b8b8', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2rem' }}>
              Beyond the classroom, I'm deeply engaged in <strong style={{ color: '#f0efe8', fontWeight: 500 }}>web development</strong> and <strong style={{ color: '#f0efe8', fontWeight: 500 }}>Python programming</strong>, constantly exploring how technology can enhance education and everyday life.
            </p>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              {[
                { label: 'Education', value: 'Masters — IUB CS' },
                { label: 'Position', value: 'Lecturer' },
                { label: 'Location', value: 'Shujabad, Punjab' },
              ].map((item) => (
                <div key={item.label} style={{ minWidth: 140 }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 300, color: '#c9a84c', fontFamily: "'Cormorant Garamond', serif", lineHeight: 1 }}>{item.value}</div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a6578', marginTop: 4 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  EXPERTISE                                                         */
/* ------------------------------------------------------------------ */
function Expertise() {
  const skills = [
    { icon: School, title: 'Teaching', desc: 'Delivering structured, engaging computer science lectures at college level.', color: '#c9a84c' },
    { icon: Code2, title: 'Web Development', desc: 'Building responsive, modern interfaces with clean code and professional design.', color: '#d4ba6e' },
    { icon: Server, title: 'Python Programming', desc: 'Writing efficient Python for automation, data tasks, and backend logic.', color: '#e8c97a' },
  ];

  return (
    <section id="expertise" style={{ position: 'relative', zIndex: 2, background: 'var(--navy)' }}>
      <div className="bg-texture" />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ textAlign: 'center' }}>Expertise</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Where Passion Meets Practice</h2>
          <div className="divider-gold" style={{ margin: '0 auto 1rem', width: 80 }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card"
              style={{ padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, width: 140, height: 140, background: `radial-gradient(circle at 100% 0%, ${s.color}18 0%, transparent 70%)`, borderRadius: '0 20px 0 0' }} />
              <div style={{ width: 60, height: 60, borderRadius: 14, background: 'rgba(201,168,76,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', border: '1px solid rgba(201,168,76,0.12)' }}>
                <s.icon size={28} color={s.color} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.6rem', color: '#f0efe8', marginBottom: '0.6rem' }}>{s.title}</h3>
              <p style={{ color: '#8a8a8a', fontSize: '0.95rem', lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  EDUCATION                                                         */
/* ------------------------------------------------------------------ */
function Education() {
  return (
    <section id="education" style={{ position: 'relative', zIndex: 2, background: 'var(--navy-deep)' }}>
      <div className="bg-texture" />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 640, marginBottom: '4rem' }}>
          <div className="section-label">Education</div>
          <h2 className="section-title">Academic Foundation</h2>
          <div className="divider-gold" style={{ marginBottom: '1.5rem' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card"
            style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: 0, right: 0, width: 160, height: 160, background: 'radial-gradient(circle at 100% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(201,168,76,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(201,168,76,0.15)' }}>
                <GraduationCap size={24} color="#c9a84c" strokeWidth={1.5} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.4rem', color: '#f0efe8' }}>Masters Degree</h3>
                <p style={{ fontSize: '0.8rem', color: '#5a6578', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Computer Science</p>
              </div>
            </div>
            <p style={{ color: '#b8b8b8', fontSize: '1rem', lineHeight: 1.7 }}>
              Completed my <strong style={{ color: '#f0efe8', fontWeight: 500 }}>Master's in Computer Science</strong> from <strong style={{ color: '#c9a84c', fontWeight: 500 }}>IUB (Islamia University of Bahawalpur)</strong>, building deep expertise in algorithms, software engineering, and systems design.
            </p>
            <div style={{ marginTop: '1.5rem', paddingTop: '1.2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '2rem' }}>
              <div><div style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5a6578' }}>Institution</div><div style={{ color: '#f0efe8', fontWeight: 400 }}>IUB</div></div>
              <div><div style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5a6578' }}>Program</div><div style={{ color: '#f0efe8', fontWeight: 400 }}>Computer Science</div></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card"
            style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: 0, right: 0, width: 160, height: 160, background: 'radial-gradient(circle at 100% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(201,168,76,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(201,168,76,0.15)' }}>
                <BookOpen size={24} color="#c9a84c" strokeWidth={1.5} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.4rem', color: '#f0efe8' }}>Teaching Focus</h3>
                <p style={{ fontSize: '0.8rem', color: '#5a6578', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Computer Science</p>
              </div>
            </div>
            <p style={{ color: '#b8b8b8', fontSize: '1rem', lineHeight: 1.7 }}>
              At <strong style={{ color: '#f0efe8', fontWeight: 500 }}>Punjab College Shujabad</strong>, I teach core computer science subjects, guiding students through programming fundamentals, data structures, and the emerging landscape of technology.
            </p>
            <div style={{ marginTop: '1.5rem', paddingTop: '1.2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '2rem' }}>
              <div><div style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5a6578' }}>Institution</div><div style={{ color: '#f0efe8', fontWeight: 400 }}>Punjab College</div></div>
              <div><div style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5a6578' }}>Location</div><div style={{ color: '#f0efe8', fontWeight: 400 }}>Shujabad</div></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  INTERESTS                                                         */
/* ------------------------------------------------------------------ */
function Interests() {
  const interests = [
    {
      icon: Trophy,
      title: 'Cricket',
      desc: 'A strategic sport that mirrors the patience and precision of good teaching.',
      color: '#c9a84c',
    },
    {
      icon: MonitorPlay,
      title: 'Football',
      desc: 'The beautiful game — teamwork, discipline, and the thrill of competition.',
      color: '#d4ba6e',
    },
    {
      icon: BrainCircuit,
      title: 'Movies',
      desc: 'Storytelling through cinema — from classic narratives to modern cinematography.',
      color: '#e8c97a',
    },
    {
      icon: Sparkles,
      title: 'Games',
      desc: 'Interactive worlds that blend strategy, creativity, and problem-solving.',
      color: '#c9a84c',
    },
  ];

  return (
    <section id="interests" style={{ position: 'relative', zIndex: 2, background: 'var(--navy)' }}>
      <div className="bg-texture" />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 640, marginBottom: '4rem' }}>
          <div className="section-label">Interests</div>
          <h2 className="section-title">Beyond the Classroom</h2>
          <div className="divider-gold" style={{ marginBottom: '1.5rem' }} />
          <p style={{ color: '#b8b8b8', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 540 }}>
            Life outside academia keeps me balanced, inspired, and connected to the world in fresh ways.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {interests.map((item, i) => (
            <motion.a
              href="#"
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={e => { const el = e.currentTarget.querySelector('.card-inner'); if (el) el.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { const el = e.currentTarget.querySelector('.card-inner'); if (el) el.style.transform = 'translateY(0)'; }}
            >
              <div className="card-inner glass-card" style={{ padding: '2rem', height: '100%', transition: 'transform 0.35s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(201,168,76,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(201,168,76,0.12)', flexShrink: 0 }}>
                    <item.icon size={24} color={item.color} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.35rem', color: '#f0efe8' }}>{item.title}</h3>
                </div>
                <p style={{ color: '#8a8a8a', fontSize: '0.95rem', lineHeight: 1.7 }}>{item.desc}</p>
                <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: item.color, fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500 }}>
                  Learn more <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER / CONTACT                                                   */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <section id="contact" style={{ position: 'relative', zIndex: 2, background: 'linear-gradient(180deg, var(--navy-deep) 0%, #040a12 100%)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 2rem 60px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'start', marginBottom: '5rem' }}>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.1, color: '#f0efe8', marginBottom: '0.75rem' }}>
              Let's Build <br /> <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>Something Great</span>
            </h2>
            <p style={{ color: '#8a8a8a', fontSize: '1rem', lineHeight: 1.75, maxWidth: 420 }}>
              Whether you have a teaching opportunity, a web project idea, or just want to talk tech — I'm open to connecting.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.3rem', color: '#f0efe8', marginBottom: '1.25rem' }}>Get in Touch</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: '#b8b8b8', textDecoration: 'none', transition: 'color 0.3s', fontSize: '0.95rem' }} onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'} onMouseLeave={e => e.currentTarget.style.color = '#b8b8b8'}>
                <Mail size={18} color="#c9a84c" strokeWidth={1.5} /> muhammad.haseeb@email.com
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: '#b8b8b8', textDecoration: 'none', transition: 'color 0.3s', fontSize: '0.95rem' }} onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'} onMouseLeave={e => e.currentTarget.style.color = '#b8b8b8'}>
                <Phone size={18} color="#c9a84c" strokeWidth={1.5} /> +92 300 123 4567
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: '#b8b8b8', textDecoration: 'none', transition: 'color 0.3s', fontSize: '0.95rem' }} onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'} onMouseLeave={e => e.currentTarget.style.color = '#b8b8b8'}>
                <MapPin size={18} color="#c9a84c" strokeWidth={1.5} /> Punjab College, Shujabad
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: '#c9a84c', letterSpacing: '0.06em' }}>
            Muhammad Haseeb
          </div>
          <div style={{ color: '#5a6578', fontSize: '0.8rem', letterSpacing: '0.06em' }}>
            Teaching · Development · Innovation
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  APP                                                                */
/* ------------------------------------------------------------------ */
export default function App() {
  return (
    <>
      <div className="bg-texture" />
      <Nav />
      <Hero />
      <About />
      <Expertise />
      <Education />
      <Interests />
      <Footer />
    </>
  );
}
