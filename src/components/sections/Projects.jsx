import React, { useState, useRef } from 'react';
import { categories, projects } from '../../data/projects';
import {
  Briefcase,
  Target,
  Globe,
  Palette,
  Zap,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import ProjectCard from '../ui/ProjectCard';
import FadeIn from '../animations/FadeIn';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const scrollToIndex = (index) => {
    setCurrentIndex(index);

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth / 3;

      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
    }
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, filteredProjects.length - 3);
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(newIndex);
  };

  const categoryIcons = {
    All: Target,
    'Web Apps': Globe,
    'UI Components': Palette,
    'Full Stack': Zap,
  };

  return (
    <section id="projects" className="relative py-20 bg-black overflow-hidden">

      {/* background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <FadeIn delay={0}>
          <div className="text-center mb-12">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">My Work</span>
            </div>

            <h2 className="text-4xl lg:text-5xl text-white mb-4">
              Featured Projects
            </h2>

            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Showcasing my best work and achievements
            </p>

          </div>
        </FadeIn>

        {/* CATEGORY FILTER */}
        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">

            {categories.map((category) => {
              const Icon = categoryIcons[category] || Target;

              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-primary/10 opacity-100'
                        : 'bg-white/5 border border-white/10 group-hover:bg-white/10'
                    }`}
                  />

                  <div className="relative flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{category}</span>
                  </div>

                  {activeCategory === category && (
                    <div className="absolute inset-0 rounded-full bg-primary blur-xl opacity-40 -z-10" />
                  )}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* CAROUSEL */}
        <FadeIn delay={200}>
          <div className="relative">

            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
            >
              <div className="flex gap-6 pb-4">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            {/* ARROWS */}
            {filteredProjects.length > 3 && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center z-10 disabled:opacity-40"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= filteredProjects.length - 3}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center z-10 disabled:opacity-40"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* DOTS */}
            {filteredProjects.length > 3 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({
                  length: Math.max(0, filteredProjects.length - 2),
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary w-6 h-2'
                        : 'bg-white/30 w-2 h-2'
                    }`}
                  />
                ))}
              </div>
            )}

          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Projects;