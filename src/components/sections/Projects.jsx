import React, { useState } from 'react';
import { categories, projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';
import FadeIn from '../animations/FadeIn';
import { FolderGit2 } from 'lucide-react';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects =
        activeCategory === 'All'
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    return (
        <section id="projects" className="relative py-24 sm:py-32 bg-bg overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <FadeIn delay={0}>
                    <div className="mb-14 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-border text-xs font-mono text-ink-soft mb-4">
                            <FolderGit2 className="w-3.5 h-3.5 text-accent" />
                            <span>03 / SELECTED WORK</span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight mb-4">
                            Featured <span className="text-gradient">engineering projects</span>.
                        </h2>
                        <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
                            A curated showcase of full-stack platforms, cloud infrastructure pipelines,
                            and mobile applications built with real-world architectural considerations.
                        </p>
                    </div>
                </FadeIn>

                {/* Interactive Category Filter Pills */}
                <FadeIn delay={100}>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
                        {categories.map((category) => {
                            const isActive = activeCategory === category;
                            const count =
                                category === 'All'
                                    ? projects.length
                                    : projects.filter((p) => p.category === category).length;

                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                                        isActive
                                            ? 'bg-accent text-white shadow-md shadow-accent/25'
                                            : 'bg-surface text-ink-soft border border-border hover:border-accent/40 hover:text-ink'
                                    }`}
                                >
                                    <span>{category}</span>
                                    <span
                                        className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                                            isActive
                                                ? 'bg-white/20 text-white'
                                                : 'bg-surface-2 text-ink-soft'
                                        }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </FadeIn>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredProjects.map((project, index) => (
                        <FadeIn key={project.id} delay={100 + (index % 3) * 80}>
                            <ProjectCard
                                project={project}
                                onSelect={(p) => setSelectedProject(p)}
                            />
                        </FadeIn>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-16 text-ink-soft text-sm">
                        No projects found in this category.
                    </div>
                )}

                {/* Interactive Project Details Modal */}
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}

            </div>
        </section>
    );
};

export default Projects;
