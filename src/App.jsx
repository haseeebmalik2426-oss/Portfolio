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
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills & Languages', href: '#skills-languages' },
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
            IT Teacher & Computer Science Educator
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
            IT teacher with experience at Zavia Science College, The Professors College, and Punjab Group of Colleges. I hold a BS in Computer Science (Hons) and a B.Ed.
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
              src={`${import.meta.env.BASE_URL}muhammad-haseeb-profile.png`}
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
            <h2 className="section-title">IT Educator,<br />Computer Science Graduate</h2>
            <div className="divider-gold" style={{ marginBottom: '1.75rem' }} />

            <p style={{ color: '#b8b8b8', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.4rem' }}>
              I am an experienced <strong style={{ color: '#f0efe8', fontWeight: 500 }}>IT Teacher</strong>, currently teaching at <strong style={{ color: '#f0efe8', fontWeight: 500 }}>Punjab Group of Colleges, Shujabad Campus</strong>. I began my teaching career in 2015 and have also worked at Zavia Science College and The Professors College.
            </p>
            <p style={{ color: '#b8b8b8', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2rem' }}>
              I earned a <strong style={{ color: '#f0efe8', fontWeight: 500 }}>BS in Computer Science (Hons)</strong> from The Islamia University of Bahawalpur and a <strong style={{ color: '#f0efe8', fontWeight: 500 }}>B.Ed.</strong> from Allama Iqbal Open University. I am seeking opportunities to apply my education and teaching experience, continue growing professionally, and contribute to the success of my organization. My technical interests include image processing, artificial intelligence, programming, and networking.
            </p>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              {[
                { label: 'Education', value: 'BS Computer Science' },
                { label: 'Position', value: 'IT Teacher' },
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
    { icon: School, title: 'IT Teaching', desc: 'Teaching information technology and computer science at college level since 2015.', color: '#c9a84c' },
    { icon: Code2, title: 'Programming', desc: 'Working with C#, C++, Visual Basic, HTML, and object-oriented programming.', color: '#d4ba6e' },
    { icon: BrainCircuit, title: 'Computing', desc: 'Academic and project experience in image processing, artificial intelligence, and CCNA networking.', color: '#e8c97a' },
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
  const qualifications = [
    { name: 'B.Ed.', institution: 'Allama Iqbal Open University', year: '2019', result: '67%' },
    { name: 'BS Computer Science (Hons)', institution: 'The Islamia University of Bahawalpur', year: '2015', result: '70% · 2.86 CGPA' },
    { name: 'Diploma of Associate Engineering — Electrical', institution: 'PBTE Lahore', year: '2011', result: '72%' },
    { name: 'Matriculation', institution: 'Multan Board', year: '2008', result: '84%' },
  ];
  return (
    <section id="education" style={{ position: 'relative', zIndex: 2, background: 'var(--navy-deep)' }}>
      <div className="bg-texture" />
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '120px 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 640, marginBottom: '3rem' }}>
          <div className="section-label">Education</div>
          <h2 className="section-title">Qualifications</h2>
          <div className="divider-gold" style={{ marginBottom: '1.5rem' }} />
        </div>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {qualifications.map((item, index) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="glass-card qualification-row" style={{ padding: '1.5rem 2rem', display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) minmax(110px, .5fr) minmax(120px, .6fr)', gap: '1rem', alignItems: 'center' }}>
              <div><h3 style={{ color: '#f0efe8', fontSize: '1.15rem', fontWeight: 500 }}>{item.name}</h3><p style={{ color: '#8a8a8a', marginTop: '.35rem' }}>{item.institution}</p></div>
              <span style={{ color: '#c9a84c' }}>{item.year}</span><span style={{ color: '#b8b8b8' }}>{item.result}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  INTERESTS                                                         */
/* ------------------------------------------------------------------ */
function Experience() {
  const roles = [
    { institution: 'Punjab Group of Colleges, Shujabad Campus', role: 'IT Teacher', period: 'December 2019 – Present' },
    { institution: 'The Professors College, Shujabad', role: 'IT Teacher', period: 'April 2016 – November 2019' },
    { institution: 'Zavia Science College, Zareef Shaheed (Raja Ram)', role: 'IT Teacher', period: 'February 2015 – March 2016' },
  ];
  return (
    <section id="experience" style={{ position: 'relative', zIndex: 2, background: 'var(--navy)' }}>
      <div className="bg-texture" />
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '120px 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 640, marginBottom: '3rem' }}><div className="section-label">Career</div><h2 className="section-title">Teaching Experience</h2><div className="divider-gold" /></div>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {roles.map((item, index) => <motion.div key={item.institution} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: index * .08 }} className="glass-card" style={{ padding: '1.6rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}><div><h3 style={{ color: '#f0efe8', fontSize: '1.2rem', fontWeight: 500 }}>{item.institution}</h3><p style={{ color: '#c9a84c', marginTop: '.4rem' }}>{item.role}</p></div><span style={{ color: '#8a8a8a' }}>{item.period}</span></motion.div>)}
        </div>
      </div>
    </section>
  );
}

function SkillsLanguages() {
  const skills = ['C#', 'C++', 'HTML', 'Visual Basic', 'Object-oriented programming', 'MS Word', 'MS Excel', 'MS PowerPoint', 'Image processing', 'Artificial intelligence', 'CCNA', 'Internet research'];
  return (
    <section id="skills-languages" style={{ position: 'relative', zIndex: 2, background: 'var(--navy-deep)' }}>
      <div className="bg-texture" />
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '120px 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 640, marginBottom: '3rem' }}><div className="section-label">Skills</div><h2 className="section-title">Computing & Languages</h2><div className="divider-gold" /></div>
        <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}><h3 style={{ color: '#f0efe8', fontSize: '1.2rem', marginBottom: '1.25rem' }}>Computer Skills & Other Qualifications</h3><div style={{ display: 'flex', flexWrap: 'wrap', gap: '.7rem' }}>{skills.map(skill => <span key={skill} style={{ border: '1px solid rgba(201,168,76,.25)', borderRadius: 999, padding: '.55rem .9rem', color: '#d3d0c5', fontSize: '.9rem' }}>{skill}</span>)}</div><p style={{ color: '#8a8a8a', marginTop: '1.25rem', lineHeight: 1.7 }}><strong style={{ color: '#c9a84c' }}>Final year project:</strong> Image processing using C# in Visual Studio.</p></div>
        <div className="glass-card" style={{ padding: '2rem' }}><h3 style={{ color: '#f0efe8', fontSize: '1.2rem', marginBottom: '1rem' }}>Languages</h3><p style={{ color: '#b8b8b8' }}>English · Urdu · Punjabi</p></div>
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
              <a href="mailto:haseebhassan230@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: '#b8b8b8', textDecoration: 'none', transition: 'color 0.3s', fontSize: '0.95rem' }} onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'} onMouseLeave={e => e.currentTarget.style.color = '#b8b8b8'}>
                <Mail size={18} color="#c9a84c" strokeWidth={1.5} /> haseebhassan230@gmail.com
              </a>
              <a href="tel:+923022624293" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: '#b8b8b8', textDecoration: 'none', transition: 'color 0.3s', fontSize: '0.95rem' }} onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'} onMouseLeave={e => e.currentTarget.style.color = '#b8b8b8'}>
                <Phone size={18} color="#c9a84c" strokeWidth={1.5} /> +92 302 2624293
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: '#b8b8b8', textDecoration: 'none', transition: 'color 0.3s', fontSize: '0.95rem' }} onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'} onMouseLeave={e => e.currentTarget.style.color = '#b8b8b8'}>
                <MapPin size={18} color="#c9a84c" strokeWidth={1.5} /> Raja Ram, Shujabad · Multan, Punjab, Pakistan
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
      <Experience />
      <SkillsLanguages />
      <Footer />
    </>
  );
}
