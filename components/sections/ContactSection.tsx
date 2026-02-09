'use client';

import { memo } from 'react';
import { siteConfig } from '@/lib/siteConfig';

const ContactSection = memo(() => {
	return (
		<section id="contact" className="relative z-10 bg-black min-h-screen flex items-center justify-center px-4 py-20 md:py-24 overflow-hidden">
			{/* Subtle background gradient */}
			<div className="absolute top-0 left-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl opacity-40"></div>
			<div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl opacity-40"></div>

			<div className="max-w-2xl w-full text-center animate-on-scroll relative z-10">
				<h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-white font-display">
					{siteConfig.sections.contact.title}
				</h2>
				<p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
					{siteConfig.contact.description}
				</p>
				<div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8 md:mb-12">
					{siteConfig.contact.ctas.map((cta) => (
						<a
							key={cta.label}
							href={cta.href}
							target={cta.href.startsWith('http') ? '_blank' : undefined}
							rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
							className={cta.variant === 'primary'
								? 'px-6 md:px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm md:text-base'
								: 'px-6 md:px-8 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:border-white/50 transition-colors text-sm md:text-base'
							}
						>
							{cta.label}
						</a>
					))}
				</div>
				<div className="text-gray-400 text-sm md:text-base space-y-2">
					<p>Phone: {siteConfig.personal.phone}</p>
					<p>{siteConfig.personal.location.city}, {siteConfig.personal.location.region}, {siteConfig.personal.location.country}</p>
				</div>
			</div>
		</section>
	);
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
