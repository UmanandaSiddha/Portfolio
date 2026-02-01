'use client';

import { memo } from 'react';
import Link from 'next/link';
import { FiCode } from 'react-icons/fi';

const Navbar = memo(() => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
                {/* Brand Name */}
                <Link href="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold text-white font-display hover:text-violet-400 transition-colors duration-300">
                    <FiCode className="w-6 h-6 md:w-7 md:h-7" />
                    Umananda Siddha
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-6 md:gap-8">
                    <Link
                        href="/blogs"
                        className="text-sm md:text-base text-white/80 hover:text-violet-400 transition-colors duration-300 font-medium"
                    >
                        Blogs
                    </Link>
                </div>
            </div>
        </nav>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;
