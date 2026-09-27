import React from 'react';
import { Github, Linkedin, Mail, MapPin, Heart, ArrowUp, FileDown } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-charcoal text-mist overflow-hidden border-t border-white/10">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-4 lg:col-span-2">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-accent to-accent-2 text-white font-display font-bold text-base shadow-sm">
                                HI
                            </div>
                            <div>
                                <h3 className="font-display text-lg font-bold text-white">
                                    {PERSONAL_INFO.name}
                                </h3>
                                <p className="text-xs text-mist/60 font-mono">
                                    Full Stack Developer &amp; Software Engineer
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-mist/70 leading-relaxed max-w-md">
                            {PERSONAL_INFO.tagline}
                        </p>

                        <div className="pt-2 flex items-center gap-4 text-xs text-mist/60 font-mono">
                            <span className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-accent-2" />
                                {PERSONAL_INFO.location}
                            </span>
                            <span>•</span>
                            <span className="text-emerald-400">
                                Open for Opportunities
                            </span>
                        </div>
                    </div>

                    {/* Navigation Links Column */}
                    <div>
                        <h4 className="text-xs font-mono uppercase tracking-widest text-mist/50 mb-5 font-semibold">
                            Quick Navigation
                        </h4>
                        <ul className="space-y-2.5">
                            {NAV_LINKS.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-sm text-mist/70 hover:text-white transition-colors duration-200 cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & Resume Column */}
                    <div>
                        <h4 className="text-xs font-mono uppercase tracking-widest text-mist/50 mb-5 font-semibold">
                            Connect &amp; Documents
                        </h4>

                        <div className="flex gap-2.5 mb-5">
                            <a
                                href={SOCIAL_LINKS.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-mist hover:text-accent transition-colors"
                                aria-label="GitHub Profile"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-mist hover:text-accent transition-colors"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a
                                href={`mailto:${PERSONAL_INFO.email}`}
                                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-mist hover:text-accent transition-colors"
                                aria-label="Send Email"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>

                        <a
                            href={PERSONAL_INFO.resume}
                            download="Hiruni_Iresha_CV.pdf"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-accent text-white text-xs font-semibold transition-all duration-200"
                        >
                            <FileDown className="w-3.5 h-3.5" />
                            <span>Download Full Resume</span>
                        </a>
                    </div>

                </div>

                {/* Bottom Bar with Back to Top */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mist/50">
                    <p>
                        © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <p className="flex items-center gap-1.5">
                            Engineered with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> using React, Vite &amp; Tailwind CSS
                        </p>

                        <button
                            onClick={scrollToTop}
                            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-mist transition-colors cursor-pointer"
                            aria-label="Back to top"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
