import React from 'react';
import { services } from '../../data/services';
import FadeIn from '../animations/FadeIn';
import { Layout, Server, Cloud, Smartphone, Briefcase, CheckCircle2 } from 'lucide-react';

const iconMap = {
    Layout,
    Server,
    Cloud,
    Smartphone
};

const Services = () => {
    return (
        <section id="services" className="relative py-24 sm:py-32 bg-bg overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <FadeIn delay={0}>
                    <div className="mb-16 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-border text-xs font-mono text-ink-soft mb-4">
                            <Briefcase className="w-3.5 h-3.5 text-accent" />
                            <span>05 / WHAT I DELIVER</span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight mb-4">
                            Services &amp; <span className="text-gradient">engineering capabilities</span>.
                        </h2>
                        <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
                            How I can contribute to projects and engineering teams — from architecting
                            new applications from scratch to cloud deployments and system integration.
                        </p>
                    </div>
                </FadeIn>

                {/* Services 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || Layout;
                        return (
                            <FadeIn key={service.id} delay={100 + index * 80}>
                                <div className="p-8 rounded-3xl bg-surface border border-border hover:border-accent/40 glass-card shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 flex flex-col justify-between h-full group">
                                    <div>
                                        <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-accent/15 transition-all duration-200">
                                            <IconComponent className="w-6 h-6 text-accent" />
                                        </div>

                                        <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mb-3 group-hover:text-accent transition-colors duration-200">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-ink-soft leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* Deliverables Checklist */}
                                        <div className="space-y-2 mb-6">
                                            {service.features.map((feat, fIdx) => (
                                                <div key={fIdx} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                                    <span className="text-xs sm:text-sm text-ink-soft">
                                                        {feat}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tech Tags */}
                                    <div className="pt-4 border-t border-border/80 flex flex-wrap gap-1.5">
                                        {service.tags.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-2.5 py-1 rounded-lg bg-surface-2 text-ink-soft text-[11px] font-mono"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Services;
