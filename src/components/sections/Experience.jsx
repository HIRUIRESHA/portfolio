import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, GraduationCap, GitBranch } from 'lucide-react';
import { TIMELINE } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';

const Experience = () => {
    return (
        <section id="experience" className="relative py-24 sm:py-32 bg-surface-2/40 overflow-hidden border-y border-border/40">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <FadeIn delay={0}>
                    <div className="mb-16 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-mono text-ink-soft mb-4">
                            <GraduationCap className="w-3.5 h-3.5 text-accent" />
                            <span>02 / JOURNEY &amp; MILESTONES</span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight mb-4">
                            Education &amp; <span className="text-gradient">practical milestones</span>.
                        </h2>
                        <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
                            A track record of academic rigor and hands-on software development projects.
                        </p>
                    </div>
                </FadeIn>

                {/* Timeline Stream */}
                <div className="relative pl-6 sm:pl-10 border-l-2 border-border/80 space-y-12">
                    {TIMELINE.map((item, index) => (
                        <FadeIn key={index} delay={index * 120}>
                            <div className="relative group">
                                {/* Timeline Node Bullet */}
                                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-surface border-4 border-accent flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200">
                                    <div className="w-2 h-2 rounded-full bg-accent" />
                                </div>

                                {/* Content Card */}
                                <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border glass-card shadow-sm hover:border-accent/40 hover:shadow-md transition-all duration-300">
                                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-mono text-xs font-semibold">
                                                {item.period}
                                            </span>
                                            <span className="px-2.5 py-0.5 rounded-full bg-surface-2 text-ink-soft font-mono text-[11px]">
                                                {item.type}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-ink-soft font-mono">
                                            <MapPin className="w-3.5 h-3.5 text-accent-2" />
                                            <span>{item.location}</span>
                                        </div>
                                    </div>

                                    <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mb-1 group-hover:text-accent transition-colors duration-200">
                                        {item.role}
                                    </h3>
                                    <div className="text-sm font-medium text-accent mb-4">
                                        {item.organization}
                                    </div>

                                    <p className="text-sm sm:text-base text-ink-soft leading-relaxed mb-6">
                                        {item.description}
                                    </p>

                                    {/* Key Highlights */}
                                    <div className="pt-4 border-t border-border/60">
                                        <div className="text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-3">
                                            Key Focus &amp; Achievements
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                            {item.highlights.map((highlight, hIdx) => (
                                                <div key={hIdx} className="flex items-start gap-2.5">
                                                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                                    <span className="text-xs sm:text-sm text-ink-soft leading-normal">
                                                        {highlight}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;
