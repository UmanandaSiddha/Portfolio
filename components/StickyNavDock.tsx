'use client';

import { memo, useState, useEffect } from 'react';
import { FiHome, FiUser, FiBriefcase, FiCode, FiMail } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';

interface NavItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    color: string;
}

const navItems: NavItem[] = [
    { id: 'hero', label: 'Home', icon: <FiHome size={20} />, color: 'hover:text-violet-400' },
    { id: 'about', label: 'About', icon: <FiUser size={20} />, color: 'hover:text-blue-400' },
    { id: 'experience', label: 'Experience', icon: <FiBriefcase size={20} />, color: 'hover:text-amber-400' },
    { id: 'projects', label: 'Projects', icon: <FiCode size={20} />, color: 'hover:text-cyan-400' },
    { id: 'skills', label: 'Skills', icon: <SiGithub size={20} />, color: 'hover:text-green-400' },
    { id: 'contact', label: 'Contact', icon: <FiMail size={20} />, color: 'hover:text-rose-400' },
];

const StickyNavDock = memo(() => {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        let updateTimeoutId: NodeJS.Timeout | null = null;

        const observer = new IntersectionObserver(
            (entries) => {
                // Debounce state updates to prevent excessive re-renders
                if (updateTimeoutId) clearTimeout(updateTimeoutId);

                updateTimeoutId = setTimeout(() => {
                    // Find which section is closest to the top of the viewport
                    let closestEntry = entries.reduce((closest, entry) => {
                        if (!closest || Math.abs(entry.boundingClientRect.top) < Math.abs(closest.boundingClientRect.top)) {
                            return entry;
                        }
                        return closest;
                    });

                    if (closestEntry && closestEntry.isIntersecting) {
                        setActiveSection(closestEntry.target.id);
                    }
                }, 50);
            },
            { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-50% 0px -50% 0px' }
        );

        navItems.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            if (updateTimeoutId) clearTimeout(updateTimeoutId);
            observer.disconnect();
        };
    }, []);

    const handleNavClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    return (
        <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex">
            <div className="flex flex-col items-center gap-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-full py-4 px-3 shadow-xl">
                {navItems.map(({ id, label, icon, color }) => (
                    <button
                        key={id}
                        onClick={() => handleNavClick(id)}
                        title={label}
                        className={`relative p-3 rounded-full transition-all duration-300 ${activeSection === id
                            ? 'bg-violet-500/20 text-white'
                            : 'text-white/60 hover:text-white'
                            } ${color} group`}
                        aria-label={label}
                    >
                        {icon}
                        {/* Tooltip - only show on hover */}
                        <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 whitespace-nowrap text-xs font-semibold text-white bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                            {label}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
});

StickyNavDock.displayName = 'StickyNavDock';

export default StickyNavDock;
