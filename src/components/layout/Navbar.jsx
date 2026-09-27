import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';
import { useScrollSpy, scrollToSection } from '../../hooks/useScrollSpy';
import { useTheme } from '../../hooks/useTheme';
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 25);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavLinkClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 h-[64px] transition-all duration-300 ${
                    isScrolled
                        ? 'bg-surface/80 glass-nav border border-border/80 shadow-lg shadow-black/5 dark:shadow-black/25'
                        : 'bg-surface/50 glass-nav border border-border/40'
                }`}>

                    {/* Logo & Identity */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-3 group text-left cursor-pointer"
                        aria-label="Hiruni Iresha - Home"
                    >
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-accent to-accent-2 text-white font-display font-extrabold text-base shadow-sm group-hover:scale-105 group-hover:shadow-accent/30 transition-all duration-200">
                            HI
                        </div>
                        <div className="hidden sm:flex flex-col leading-tight">
                            <span className="font-display font-bold text-ink text-sm sm:text-[15px] group-hover:text-accent transition-colors duration-200">
                                {PERSONAL_INFO.name}
                            </span>
                            <span className="text-[11px] font-mono text-ink-soft">
                                Full Stack Engineer
                            </span>
                        </div>
                    </button>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-1 bg-surface-2/70 p-1.5 rounded-full border border-border/60">
                        {NAV_LINKS.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <button
                                    key={link.id}
                                    onClick={() => handleNavLinkClick(link.id)}
                                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                                        isActive
                                            ? 'bg-accent text-white shadow-sm'
                                            : 'text-ink-soft hover:text-ink hover:bg-surface/60'
                                    }`}
                                >
                                    {link.label}
                                </button>
                            );
                        })}
                    </nav>

                    {/* Right Action Tools */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle theme={theme} onToggle={toggleTheme} />

                        {/* Resume Direct Link */}
                        <a
                            href={PERSONAL_INFO.resume}
                            download="Hiruni_Iresha_CV.pdf"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-ink bg-surface-2 hover:bg-surface border border-border hover:border-accent/40 transition-all duration-200"
                            title="Download CV"
                        >
                            <FileDown className="w-3.5 h-3.5 text-accent" />
                            <span>Resume</span>
                        </a>

                        {/* Contact CTA */}
                        <button
                            onClick={() => handleNavLinkClick('contact')}
                            className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-ink text-bg font-display font-semibold text-xs hover:bg-accent transition-all duration-200 cursor-pointer shadow-sm"
                        >
                            <span>Let's Talk</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        </button>
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle theme={theme} onToggle={toggleTheme} />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2.5 rounded-xl bg-surface-2 border border-border text-ink hover:text-accent transition-colors duration-200 cursor-pointer"
                            aria-label="Toggle navigation menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${
                    isMenuOpen ? 'max-h-[420px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}>
                    <div className="rounded-2xl bg-surface/95 glass-nav border border-border p-4 shadow-xl space-y-1.5">
                        {NAV_LINKS.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <button
                                    key={link.id}
                                    onClick={() => handleNavLinkClick(link.id)}
                                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 flex items-center justify-between cursor-pointer ${
                                        isActive
                                            ? 'bg-accent text-white font-semibold'
                                            : 'text-ink-soft hover:text-ink hover:bg-surface-2'
                                    }`}
                                >
                                    <span>{link.label}</span>
                                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                                </button>
                            );
                        })}

                        <div className="pt-2 mt-2 border-t border-border grid grid-cols-2 gap-2">
                            <a
                                href={PERSONAL_INFO.resume}
                                download="Hiruni_Iresha_CV.pdf"
                                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-surface-2 text-ink border border-border"
                            >
                                <FileDown className="w-3.5 h-3.5 text-accent" />
                                <span>CV / Resume</span>
                            </a>
                            <button
                                onClick={() => handleNavLinkClick('contact')}
                                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-ink text-bg"
                            >
                                <span>Get in touch</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
