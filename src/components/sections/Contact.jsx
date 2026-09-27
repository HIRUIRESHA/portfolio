import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, MessageSquare, CheckCircle2, AlertCircle, Loader2, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', company: '' });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSending, setIsSending] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const validate = (data) => {
        const errs = {};
        if (!data.name.trim()) errs.name = 'Please provide your name';
        else if (data.name.trim().length < 2) errs.name = 'Name must be at least 2 characters';

        if (!data.email.trim()) errs.email = 'Please provide your email address';
        else if (!EMAIL_REGEX.test(data.email.trim())) errs.email = 'Please enter a valid email address';

        if (!data.message.trim()) errs.message = 'Please include a message';
        else if (data.message.trim().length < 10) errs.message = 'Message should be at least 10 characters';

        return errs;
    };

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(PERSONAL_INFO.email);
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2500);
        } catch {
            // fallback
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const nextData = { ...formData, [name]: value };
        setFormData(nextData);

        if (touched[name]) {
            const nextErrors = validate(nextData);
            setErrors(nextErrors);
            if (!nextErrors[name] && status.type === 'error') {
                setStatus({ type: '', message: '' });
            }
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        setErrors(validate(formData));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Bot trap
        if (formData.company) return;

        const validation = validate(formData);
        setErrors(validation);
        setTouched({ name: true, email: true, message: true });

        if (Object.keys(validation).length > 0) {
            setStatus({ type: 'error', message: 'Please resolve the highlighted issues before sending.' });
            return;
        }

        if (!EMAILJS_CONFIGURED) {
            // Graceful 100% frontend fallback: open default mail client
            const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                formData.subject || `Portfolio inquiry from ${formData.name}`
            )}&body=${encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
            window.location.href = mailtoUrl;
            setStatus({ type: 'success', message: 'Opening your mail client to send...' });
            return;
        }

        setIsSending(true);
        setStatus({ type: '', message: '' });

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject || 'Portfolio Inquiry',
                    message: formData.message,
                    reply_to: formData.email,
                },
                PUBLIC_KEY
            );

            setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
            setFormData({ name: '', email: '', subject: '', message: '', company: '' });
            setTouched({});
            setErrors({});
        } catch (err) {
            console.error('Email send failed:', err);
            setStatus({
                type: 'error',
                message: `Could not send automatically. Please reach out directly to ${PERSONAL_INFO.email}.`
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="relative py-24 sm:py-32 bg-surface-2/30 overflow-hidden border-t border-border/40">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <FadeIn delay={0}>
                    <div className="mb-16 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-mono text-ink-soft mb-4">
                            <MessageSquare className="w-3.5 h-3.5 text-accent" />
                            <span>06 / GET IN TOUCH</span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight mb-4">
                            Let's build <span className="text-gradient">something great</span> together.
                        </h2>
                        <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
                            I am open to full-time roles, software engineering internships, and collaborative projects.
                            Drop me a message below or connect directly.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 sm:gap-12 items-start">

                    {/* Left Column — Contact Cards & Direct Info */}
                    <div className="space-y-6">
                        <FadeIn delay={100}>
                            <div className="p-8 rounded-3xl bg-surface border border-border shadow-sm space-y-6">
                                <h3 className="font-display text-xl font-bold text-ink">
                                    Contact Channels
                                </h3>

                                {/* Direct Email with Copy Action */}
                                <div className="p-4 rounded-2xl bg-surface-2/60 border border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                                            <Mail className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-mono text-ink-soft">Direct Email</div>
                                            <a
                                                href={`mailto:${PERSONAL_INFO.email}`}
                                                className="text-sm font-semibold text-ink hover:text-accent transition-colors break-all"
                                            >
                                                {PERSONAL_INFO.email}
                                            </a>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleCopyEmail}
                                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface border border-border hover:border-accent text-xs font-medium text-ink transition-colors cursor-pointer self-start sm:self-auto"
                                        title="Copy email to clipboard"
                                    >
                                        {copiedEmail ? (
                                            <>
                                                <Check className="w-3.5 h-3.5 text-emerald-500" />
                                                <span className="text-emerald-500 font-semibold">Copied!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-3.5 h-3.5 text-ink-soft" />
                                                <span>Copy</span>
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Location */}
                                <div className="p-4 rounded-2xl bg-surface-2/60 border border-border/70 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-accent-2/10 border border-accent-2/20 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-accent-2" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono text-ink-soft">Location</div>
                                        <div className="text-sm font-semibold text-ink">
                                            {PERSONAL_INFO.location}
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div>
                                    <div className="text-xs font-mono text-ink-soft uppercase tracking-wider mb-3">
                                        Professional Profiles
                                    </div>
                                    <div className="flex gap-3">
                                        <a
                                            href={SOCIAL_LINKS.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 p-3 rounded-2xl bg-surface-2 border border-border hover:border-accent/40 flex items-center justify-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors"
                                        >
                                            <Github className="w-4 h-4" />
                                            <span>GitHub</span>
                                        </a>
                                        <a
                                            href={SOCIAL_LINKS.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 p-3 rounded-2xl bg-surface-2 border border-border hover:border-accent/40 flex items-center justify-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                            <span>LinkedIn</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column — 100% Client-Side Contact Form */}
                    <FadeIn delay={150}>
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="p-8 sm:p-10 rounded-3xl bg-surface border border-border glass-card shadow-sm space-y-5"
                        >
                            {/* Honeypot field (hidden from users) */}
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                tabIndex={-1}
                                autoComplete="off"
                                className="hidden"
                                aria-hidden="true"
                            />

                            <div className="flex items-center justify-between pb-4 border-b border-border/80">
                                <h3 className="font-display text-xl font-bold text-ink">
                                    Send a Direct Message
                                </h3>
                                <span className="text-xs font-mono text-emerald-500 font-semibold flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    Client-Side Ready
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {/* Name Input */}
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="e.g. Jane Doe"
                                        className={`w-full px-4 py-3 rounded-xl bg-surface-2 border text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none transition-colors ${
                                            errors.name && touched.name
                                                ? 'border-danger focus:border-danger'
                                                : 'border-border focus:border-accent'
                                        }`}
                                    />
                                    {errors.name && touched.name && (
                                        <p className="mt-1 text-xs text-danger flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" /> {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="e.g. jane@example.com"
                                        className={`w-full px-4 py-3 rounded-xl bg-surface-2 border text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none transition-colors ${
                                            errors.email && touched.email
                                                ? 'border-danger focus:border-danger'
                                                : 'border-border focus:border-accent'
                                        }`}
                                    />
                                    {errors.email && touched.email && (
                                        <p className="mt-1 text-xs text-danger flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" /> {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Subject Input */}
                            <div>
                                <label htmlFor="subject" className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-2">
                                    Subject (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="e.g. Full Stack Developer Opportunity / Collaboration"
                                    className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-border focus:border-accent text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none transition-colors"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label htmlFor="message" className="text-xs font-bold text-ink-soft uppercase tracking-wider">
                                        Message *
                                    </label>
                                    <span className="text-[11px] font-mono text-ink-soft">
                                        {formData.message.length} / 500
                                    </span>
                                </div>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    maxLength={500}
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Write your message here..."
                                    className={`w-full px-4 py-3 rounded-xl bg-surface-2 border text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none transition-colors resize-none ${
                                        errors.message && touched.message
                                            ? 'border-danger focus:border-danger'
                                            : 'border-border focus:border-accent'
                                    }`}
                                />
                                {errors.message && touched.message && (
                                    <p className="mt-1 text-xs text-danger flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" /> {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Status Feedback Banner */}
                            {status.message && (
                                <div className={`p-4 rounded-xl flex items-center gap-3 text-xs sm:text-sm ${
                                    status.type === 'success'
                                        ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                                        : 'bg-danger/10 text-danger border border-danger/20'
                                }`}>
                                    {status.type === 'success' ? (
                                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-4 h-4 shrink-0" />
                                    )}
                                    <span>{status.message}</span>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSending}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-white font-display font-semibold text-sm hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                            >
                                {isSending ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Sending Message...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </FadeIn>

                </div>

            </div>
        </section>
    );
};

export default Contact;