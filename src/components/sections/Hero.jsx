import React, { useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, FileDown, Github, Linkedin, Mail, Sparkles, Terminal, Code2 } from 'lucide-react';
import { SiReact, SiNodedotjs, SiTailwindcss, SiDocker, SiMongodb, SiFlutter } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { PERSONAL_INFO, QUICK_STATS, SOCIAL_LINKS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import Backdrop from '../backgrounds/Backdrop';
import myImage from '../../assets/my_image.jpeg';

const techBadges = [
    { name: 'React', icon: SiReact, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { name: 'AWS', icon: FaAws, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400', bg: 'bg-green-500/10' },
    { name: 'Flutter', icon: SiFlutter, color: 'text-sky-400', bg: 'bg-sky-500/10' },
];

const Hero = () => {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: py * -8, y: px * 10 });
    };

    const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

    return (
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-bg pt-28 pb-16">
            <Backdrop variant="hero" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">

                    {/* Left Column — Core Identity & Value */}
                    <div className="text-left flex flex-col items-start">
                        
                        {/* Status Availability Chip */}
                        <FadeIn delay={0}>
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface border border-border text-ink-soft text-xs font-medium shadow-sm mb-6">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                <span>{PERSONAL_INFO.status}</span>
                            </div>
                        </FadeIn>

                        {/* Main Impact Headline */}
                        <FadeIn delay={100}>
                            <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.4rem] font-extrabold text-ink leading-[1.08] tracking-tight mb-6">
                                Hi, I'm <span className="text-gradient">{PERSONAL_INFO.name.split(' ')[0]}</span>. <br />
                                I build <span className="marker-glow text-accent">full-stack web</span> &amp; cloud systems.
                            </h1>
                        </FadeIn>

                        {/* Bio / Value Summary */}
                        <FadeIn delay={200}>
                            <p className="text-base sm:text-lg text-ink-soft max-w-[580px] mb-8 leading-relaxed">
                                {PERSONAL_INFO.title} based in <span className="text-ink font-medium">{PERSONAL_INFO.location}</span>.
                                Focused on architecting modern MERN applications, Java/Spring Boot services,
                                CI/CD cloud deployment with Docker &amp; AWS, and cross-platform mobile apps.
                            </p>
                        </FadeIn>

                        {/* Call to Actions & Resume */}
                        <FadeIn delay={300}>
                            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white font-display font-semibold text-sm hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                                >
                                    <span>Explore Projects</span>
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                                </button>

                                <a
                                    href={PERSONAL_INFO.resume}
                                    download="Hiruni_Iresha_CV.pdf"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-surface border border-border text-ink hover:border-accent hover:text-accent font-display font-semibold text-sm transition-all duration-200 shadow-sm"
                                >
                                    <FileDown className="w-4 h-4 text-accent" />
                                    <span>Download Resume</span>
                                </a>

                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-surface-2 text-ink-soft hover:text-ink font-display font-medium text-sm transition-colors duration-200 cursor-pointer"
                                >
                                    <span>Get In Touch</span>
                                </button>
                            </div>
                        </FadeIn>

                        {/* Social Strip */}
                        <FadeIn delay={350}>
                            <div className="flex items-center gap-3 mb-10">
                                <span className="text-xs font-mono text-ink-soft uppercase tracking-wider">Connect:</span>
                                <a
                                    href={SOCIAL_LINKS.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-xl bg-surface border border-border text-ink-soft hover:text-accent hover:border-accent/40 transition-colors duration-200"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-4 h-4" />
                                </a>
                                <a
                                    href={SOCIAL_LINKS.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-xl bg-surface border border-border text-ink-soft hover:text-accent hover:border-accent/40 transition-colors duration-200"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a
                                    href={`mailto:${PERSONAL_INFO.email}`}
                                    className="p-2.5 rounded-xl bg-surface border border-border text-ink-soft hover:text-accent hover:border-accent/40 transition-colors duration-200"
                                    aria-label="Email"
                                >
                                    <Mail className="w-4 h-4" />
                                </a>
                            </div>
                        </FadeIn>

                        {/* Metric Highlights Strip */}
                        <FadeIn delay={400}>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-xl">
                                {QUICK_STATS.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="p-3.5 rounded-2xl bg-surface/80 border border-border/80 glass-card shadow-sm hover:border-accent/30 transition-colors duration-200"
                                    >
                                        <div className="font-display font-extrabold text-xl text-ink mb-0.5">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs font-medium text-ink-soft">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column — Portrait Showcase & Tech Orbit */}
                    <FadeIn delay={250}>
                        <div className="relative max-w-[400px] mx-auto lg:ml-auto lg:mr-0 w-full">

                            {/* Radiant background halo */}
                            <div
                                className="absolute -inset-4 rounded-3xl opacity-50 dark:opacity-40 blur-2xl pointer-events-none"
                                style={{
                                    background: 'conic-gradient(from 180deg at 50% 50%, #6366F1 0deg, #06B6D4 180deg, #8B5CF6 360deg)',
                                }}
                            />

                            {/* Main Interactive Portrait Card */}
                            <div
                                ref={cardRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                className="relative rounded-3xl bg-surface border border-border p-3 shadow-2xl shadow-black/10 dark:shadow-black/50 transition-transform duration-200 ease-out will-change-transform"
                                style={{
                                    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                                }}
                            >
                                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-surface-2">
                                    <img
                                        src={myImage}
                                        alt={PERSONAL_INFO.name}
                                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                                    {/* Bottom Overlay Label */}
                                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                                        <div>
                                            <div className="font-display font-bold text-sm text-white">
                                                {PERSONAL_INFO.name}
                                            </div>
                                            <div className="text-[11px] text-white/80 font-mono">
                                                Undergraduate Developer
                                            </div>
                                        </div>
                                        <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-mono border border-white/20">
                                            SLIIT
                                        </span>
                                    </div>
                                </div>

                                {/* Floating Location Tag */}
                                <div className="absolute -top-3 -right-3 px-3.5 py-2 rounded-2xl bg-surface border border-border shadow-lg flex items-center gap-2 z-20">
                                    <span className="text-base">🇱🇰</span>
                                    <div className="text-left">
                                        <div className="text-xs font-bold text-ink leading-none">Colombo, LK</div>
                                        <div className="text-[10px] text-ink-soft leading-none mt-0.5">Remote Ready</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Tech Badges Strip */}
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 p-3 rounded-2xl bg-surface/90 border border-border glass-card shadow-sm">
                                {techBadges.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-2/80 border border-border text-xs font-medium text-ink hover:border-accent/40 transition-colors duration-200"
                                    >
                                        <tech.icon className={`w-3.5 h-3.5 ${tech.color}`} />
                                        <span>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </div>

            {/* Bottom Scroll Indicator */}
            <button
                onClick={() => scrollToSection('about')}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ink-soft hover:text-accent transition-colors duration-200 animate-float-slow cursor-pointer"
                aria-label="Scroll to about section"
            >
                <span className="text-[10px] uppercase font-mono tracking-widest">Scroll</span>
                <ArrowDown className="w-3.5 h-3.5" />
            </button>
        </section>
    );
};

export default Hero;