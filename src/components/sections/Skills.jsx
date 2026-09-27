import React from 'react';
import { skillCategories, competencies } from '../../data/skills';
import FadeIn from '../animations/FadeIn';
import { Cpu, Globe, KeyRound, CheckCircle2 } from 'lucide-react';
import {
    SiReact,
    SiJavascript,
    SiTailwindcss,
    SiNextdotjs,
    SiHtml5,
    SiRedux,
    SiNodedotjs,
    SiExpress,
    SiSpringboot,
    SiDocker,
    SiJenkins,
    SiTerraform,
    SiMongodb,
    SiMysql,
    SiFlutter,
    SiFirebase,
    SiGithub,
    SiPostman,
    SiVite,
    SiFigma
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const iconMap = {
    SiReact,
    SiJavascript,
    SiTailwindcss,
    SiNextdotjs,
    SiHtml5,
    SiRedux,
    SiNodedotjs,
    SiExpress,
    SiSpringboot,
    SiDocker,
    SiJenkins,
    SiTerraform,
    FaAws,
    SiMongodb,
    SiMysql,
    SiFlutter,
    SiFirebase,
    SiGithub,
    SiPostman,
    SiVite,
    SiFigma,
    Globe,
    KeyRound
};

const Skills = () => {
    return (
        <section id="skills" className="relative py-24 sm:py-32 bg-surface-2/30 overflow-hidden border-y border-border/40">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <FadeIn delay={0}>
                    <div className="mb-16 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-mono text-ink-soft mb-4">
                            <Cpu className="w-3.5 h-3.5 text-accent" />
                            <span>04 / TECHNICAL TOOLKIT</span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight mb-4">
                            Technologies, languages &amp; <span className="text-gradient">frameworks</span>.
                        </h2>
                        <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
                            A comprehensive overview of my current tech stack — verified through hands-on project
                            deliveries across frontend, backend, cloud deployment, and databases.
                        </p>
                    </div>
                </FadeIn>

                {/* Skills Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
                    {skillCategories.map((cat, idx) => (
                        <FadeIn key={cat.name} delay={idx * 100}>
                            <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border glass-card shadow-sm hover:border-accent/40 transition-all duration-300 h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-display text-xl font-bold text-ink">
                                            {cat.name}
                                        </h3>
                                        <span className="text-xs font-mono text-accent font-semibold">
                                            {String(cat.skills.length).padStart(2, '0')} Tools
                                        </span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-ink-soft mb-6">
                                        {cat.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {cat.skills.map((skill) => {
                                            const IconComp = iconMap[skill.icon] || Cpu;
                                            const isAdv = skill.level === 'Advanced';
                                            return (
                                                <div
                                                    key={skill.name}
                                                    className="p-3 rounded-2xl bg-surface-2/60 border border-border/70 hover:border-accent/30 hover:bg-surface-2 transition-colors flex items-center gap-3"
                                                >
                                                    <div className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center shrink-0">
                                                        <IconComp className="w-4 h-4 text-accent" />
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <div className="flex items-center justify-between gap-1">
                                                            <span className="text-xs font-bold text-ink truncate">
                                                                {skill.name}
                                                            </span>
                                                            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                                                                isAdv ? 'bg-accent/10 text-accent' : 'bg-surface-2 text-ink-soft'
                                                            }`}>
                                                                {skill.level}
                                                            </span>
                                                        </div>
                                                        <span className="text-[11px] text-ink-soft truncate block">
                                                            {skill.highlight}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Core Competencies Row */}
                <FadeIn delay={200}>
                    <div className="p-8 rounded-3xl bg-surface border border-border shadow-sm">
                        <h3 className="font-display text-lg font-bold text-ink mb-6 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                            Core Engineering Practices &amp; Standards
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {competencies.map((comp, i) => (
                                <div key={i} className="space-y-1.5">
                                    <div className="font-display font-bold text-sm text-ink">
                                        {comp.title}
                                    </div>
                                    <div className="text-xs text-ink-soft leading-relaxed">
                                        {comp.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};

export default Skills;
