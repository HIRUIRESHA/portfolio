import React from 'react';
import { ExternalLink, Github, ArrowUpRight, Info } from 'lucide-react';

const ProjectCard = ({ project, onSelect }) => {
    const { title, shortDescription, description, image, technologies, metrics, status, githubUrl, demoUrl, category } = project;

    return (
        <div
            className="group relative rounded-3xl bg-surface border border-border/80 hover:border-accent/50 glass-card shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 flex flex-col overflow-hidden"
        >
            {/* Project Image Preview */}
            <div
                className="relative h-56 overflow-hidden bg-surface-2 cursor-pointer"
                onClick={() => onSelect(project)}
            >
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Category & Status Chips */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] font-mono font-medium border border-white/20">
                        {category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-mono font-semibold">
                        {status || 'Shipped'}
                    </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs font-medium flex items-center gap-1.5 drop-shadow-md">
                        <Info className="w-3.5 h-3.5" />
                        Click to view details
                    </span>
                    <div className="flex items-center gap-2">
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-2 rounded-xl bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-md transition-colors"
                                title="View GitHub Source"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                        )}
                        {demoUrl && (
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-2 rounded-xl bg-accent hover:bg-accent/80 text-white backdrop-blur-md transition-colors"
                                title="View Demo"
                            >
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                <div>
                    <h3
                        onClick={() => onSelect(project)}
                        className="font-display text-lg sm:text-xl font-bold text-ink mb-2 group-hover:text-accent transition-colors duration-200 cursor-pointer"
                    >
                        {title}
                    </h3>
                    <p className="text-sm text-ink-soft leading-relaxed line-clamp-2">
                        {shortDescription || description}
                    </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                    {technologies.slice(0, 4).map((tech, i) => (
                        <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg bg-surface-2 text-ink-soft text-[11px] font-mono font-medium border border-border/60"
                        >
                            {tech}
                        </span>
                    ))}
                    {technologies.length > 4 && (
                        <span className="px-2 py-1 rounded-lg bg-surface-2 text-ink-soft text-[11px] font-mono">
                            +{technologies.length - 4}
                        </span>
                    )}
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-border/80 flex items-center justify-between">
                    <button
                        onClick={() => onSelect(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-ink transition-colors cursor-pointer"
                    >
                        <span>Details &amp; Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    {metrics && (
                        <span className="text-[11px] font-mono text-ink-soft truncate max-w-[150px]">
                            {metrics}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
