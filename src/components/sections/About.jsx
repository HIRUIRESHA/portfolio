import React from 'react';
import { Download, Code2, Sparkles, Server, FileText, CheckCircle2, Award, BookOpen, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';

const pillars = [
    {
        icon: Code2,
        title: 'Full Stack Engineering',
        description: 'Building end-to-end web applications with React, Node.js, Express, and Spring Boot with clean separation of concerns.'
    },
    {
        icon: Server,
        title: 'DevOps & Cloud Automation',
        description: 'Streamlining software delivery with Docker containerization, Jenkins automation, Terraform IaC, and AWS cloud hosting.'
    },
    {
        icon: Sparkles,
        title: 'Modern UI/UX & Mobile',
        description: 'Developing responsive web interfaces using Tailwind CSS and cross-platform mobile apps in Flutter with Firebase.'
    }
];

const highlights = [
    'Software Engineering Undergraduate with strong computer science fundamentals',
    'Experience architecting full-stack systems with role-based access control',
    'Practical hands-on CI/CD pipeline automation and cloud infrastructure',
    'Dedicated team player with agile development experience in academic projects'
];

const About = () => {
    return (
        <section id="about" className="relative py-24 sm:py-32 bg-bg overflow-hidden">
            {/* Subtle background blueprint grid */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <FadeIn delay={0}>
                    <div className="mb-16 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-border text-xs font-mono text-ink-soft mb-4">
                            <BookOpen className="w-3.5 h-3.5 text-accent" />
                            <span>01 / ABOUT ME</span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight mb-4">
                            Driven by curiosity, powered by <span className="text-gradient">modern code</span>.
                        </h2>
                        <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
                            A software engineering undergraduate committed to crafting scalable web applications,
                            automating infrastructure, and solving real problems through technology.
                        </p>
                    </div>
                </FadeIn>

                {/* Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">

                    {/* Left Column — Detailed Narrative & Resume Download */}
                    <div className="flex flex-col gap-8">
                        <FadeIn delay={100}>
                            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-ink-soft">
                                <p className="text-ink font-medium text-lg sm:text-xl border-l-2 border-accent pl-4">
                                    {PERSONAL_INFO.bio[0]}
                                </p>
                                <p className="pl-4">
                                    {PERSONAL_INFO.bio[1]}
                                </p>
                                <p className="pl-4">
                                    {PERSONAL_INFO.bio[2]}
                                </p>
                            </div>
                        </FadeIn>

                        {/* Checklist Highlights */}
                        <FadeIn delay={180}>
                            <div className="p-6 rounded-2xl bg-surface border border-border glass-card shadow-sm space-y-3">
                                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink flex items-center gap-2">
                                    <Award className="w-4 h-4 text-accent" />
                                    Core Competencies
                                </h3>
                                <div className="space-y-2.5">
                                    {highlights.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                                            <span className="text-sm text-ink-soft leading-normal">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        {/* Interactive Resume Download Widget */}
                        <FadeIn delay={250}>
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-surface to-surface-2 border border-border/80 shadow-md">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                                            <FileText className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h4 className="font-display font-bold text-sm text-ink">
                                                Curriculum Vitae (CV)
                                            </h4>
                                            <p className="text-xs text-ink-soft font-mono mt-0.5">
                                                {PERSONAL_INFO.resumeMeta.fileLabel} · {PERSONAL_INFO.resumeMeta.size} · {PERSONAL_INFO.resumeMeta.format}
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        href={PERSONAL_INFO.resume}
                                        download="Hiruni_Iresha_CV.pdf"
                                        className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent text-white font-display font-semibold text-xs hover:bg-ink transition-colors duration-200 shrink-0 shadow-sm"
                                    >
                                        <span>Download CV</span>
                                        <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column — Pillars of Focus */}
                    <div className="flex flex-col gap-5">
                        <FadeIn delay={150}>
                            <div className="space-y-4">
                                {pillars.map((pillar, index) => (
                                    <div
                                        key={pillar.title}
                                        className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/40 glass-card shadow-sm hover:shadow-md transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="w-10 h-10 rounded-xl bg-surface-2 border border-border group-hover:bg-accent/10 group-hover:border-accent/30 flex items-center justify-center transition-colors duration-200">
                                                <pillar.icon className="w-5 h-5 text-accent" />
                                            </div>
                                            <h3 className="font-display text-lg font-bold text-ink group-hover:text-accent transition-colors duration-200">
                                                {pillar.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-ink-soft leading-relaxed pl-14">
                                            {pillar.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* Academic Profile Snippet Card */}
                        <FadeIn delay={250}>
                            <div className="p-6 rounded-2xl bg-surface-2 border border-border text-ink">
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/80">
                                    <div className="flex items-center gap-2">
                                        <Layers className="w-4 h-4 text-accent" />
                                        <span className="font-display font-bold text-sm">Academic Background</span>
                                    </div>
                                    <span className="font-mono text-xs text-accent font-semibold">Undergraduate</span>
                                </div>
                                <div className="space-y-2 text-xs text-ink-soft">
                                    <div className="flex justify-between py-1">
                                        <span>Degree Program:</span>
                                        <span className="font-medium text-ink">BSc (Hons) in Software Engineering</span>
                                    </div>
                                    <div className="flex justify-between py-1">
                                        <span>Core Studies:</span>
                                        <span className="font-medium text-ink">Full Stack, Cloud, Algorithms, OOP</span>
                                    </div>
                                    <div className="flex justify-between py-1">
                                        <span>Location:</span>
                                        <span className="font-medium text-ink">Colombo, Sri Lanka</span>
                                    </div>
                                    <div className="flex justify-between py-1">
                                        <span>Current Status:</span>
                                        <span className="text-emerald-500 font-semibold">Seeking Opportunities</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;