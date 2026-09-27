import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!project) return null;

    const {
        title,
        description,
        image,
        category,
        technologies,
        highlights,
        status,
        metrics,
        githubUrl,
        demoUrl
    } = project;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-md animate-fadeIn"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-surface border border-border shadow-2xl p-6 sm:p-8 space-y-6"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Actions */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-mono text-xs font-semibold">
                            {category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-surface-2 text-ink-soft font-mono text-xs font-medium">
                            {status || 'Shipped'}
                        </span>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl bg-surface-2 hover:bg-surface text-ink-soft hover:text-ink transition-colors cursor-pointer"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Project Image Banner */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-surface-2 border border-border/80">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Project Title & Short Metric */}
                <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-ink mb-2">
                        {title}
                    </h3>
                    {metrics && (
                        <p className="text-xs font-mono text-accent font-medium">
                            ★ {metrics}
                        </p>
                    )}
                </div>

                {/* Detailed Description */}
                <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-ink-soft mb-2">
                        Overview &amp; Architecture
                    </h4>
                    <p className="text-sm sm:text-base text-ink leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Key Highlights */}
                {highlights && highlights.length > 0 && (
                    <div className="p-5 rounded-2xl bg-surface-2/60 border border-border/70 space-y-3">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-ink font-semibold flex items-center gap-2">
                            <Layers className="w-4 h-4 text-accent" />
                            Core Features &amp; Implementations
                        </h4>
                        <div className="space-y-2">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="text-xs sm:text-sm text-ink-soft leading-normal">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tech Stack Badges */}
                <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-ink-soft mb-3 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-accent" />
                        Technologies &amp; Libraries
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1.5 rounded-xl bg-surface-2 border border-border text-xs font-medium text-ink font-mono"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ink text-bg font-display font-semibold text-xs hover:bg-accent transition-colors"
                            >
                                <Github className="w-4 h-4" />
                                <span>View GitHub Source</span>
                            </a>
                        )}
                        {demoUrl && (
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-display font-semibold text-xs hover:opacity-90 transition-opacity"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>

                    <button
                        onClick={onClose}
                        className="px-4 py-2.5 rounded-xl bg-surface-2 text-ink-soft hover:text-ink text-xs font-medium transition-colors cursor-pointer"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
