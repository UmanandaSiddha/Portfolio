'use client';

import { memo } from 'react';

const ContactSection = memo(() => {
	return (
		<section id="contact" className="relative z-10 bg-black min-h-screen flex items-center justify-center px-4 py-20 md:py-24 overflow-hidden">
			{/* Subtle background gradient */}
			<div className="absolute top-0 left-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl opacity-40"></div>
			<div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl opacity-40"></div>

			<div className="max-w-2xl w-full text-center animate-on-scroll relative z-10">
				<h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-white font-display">
					Get In Touch
				</h2>
				<p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
					I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
				</p>
				<div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8 md:mb-12">
					<a
						href="mailto:umanandasiddha243@gmail.com"
						className="px-6 md:px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm md:text-base"
					>
						Email Me
					</a>
					<a
						href="https://github.com/UmanandaSiddha"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 md:px-8 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:border-white/50 transition-colors text-sm md:text-base"
					>
						GitHub
					</a>
					<a
						href="https://linkedin.com/in/umananda-siddha-399b95217"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 md:px-8 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:border-white/50 transition-colors text-sm md:text-base"
					>
						LinkedIn
					</a>
				</div>
				<div className="text-gray-400 text-sm md:text-base space-y-2">
					<p>Phone: +91 708 640 03 95</p>
					<p>Bongaigaon, Assam, India</p>
				</div>
			</div>
		</section>
	);
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
