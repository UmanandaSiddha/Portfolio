'use client';

import { memo } from 'react';
import { FiUser, FiAward, FiMapPin, FiStar } from 'react-icons/fi';
import { siteConfig } from '@/lib/siteConfig';

const AboutSection = memo(() => {
	return (
		<section id="about" className="relative z-10 bg-black min-h-screen flex items-center justify-center px-4 py-20 md:py-24 overflow-hidden">
			{/* Subtle background gradient */}
			<div className="absolute top-0 left-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl opacity-40"></div>
			<div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl opacity-40"></div>

			<div className="max-w-4xl w-full animate-on-scroll relative z-10">
				{/* Section Title */}
				<div className="flex items-center justify-center md:justify-start gap-3 mb-4">
					<FiUser className="w-8 h-8 text-violet-400" />
					<h2 className="text-4xl md:text-5xl font-bold text-white font-display">
						{siteConfig.sections.about.title}
					</h2>
				</div>
				<div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-violet-400 mb-8 md:mb-12 md:ml-0 mx-auto md:mx-0"></div>

				<div className="text-center md:text-left">
					{siteConfig.about.summary.map((paragraph) => (
						<p key={paragraph} className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
							{paragraph}
						</p>
					))}

					{/* Info Cards Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
						{/* Education Card */}
						<div className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-violet-500/30 rounded-lg p-6 transition-colors duration-300">
							<div className="flex items-center gap-3 mb-4">
								<FiAward className="w-6 h-6 text-violet-400 group-hover:scale-110 transition-transform duration-300" />
								<h3 className="text-lg md:text-xl font-semibold text-white">Education</h3>
							</div>
							<p className="text-gray-300 font-medium">{siteConfig.about.education.school}</p>
							<p className="text-gray-400 text-sm mt-1">{siteConfig.about.education.degree} ({siteConfig.about.education.period})</p>
							<p className="text-gray-400 text-sm">GPA: {siteConfig.about.education.gpa}</p>
						</div>

						{/* Location Card */}
						<div className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-violet-500/30 rounded-lg p-6 transition-colors duration-300">
							<div className="flex items-center gap-3 mb-4">
								<FiMapPin className="w-6 h-6 text-violet-400 group-hover:scale-110 transition-transform duration-300" />
								<h3 className="text-lg md:text-xl font-semibold text-white">Location</h3>
							</div>
							<p className="text-gray-300 font-medium">{siteConfig.personal.location.city}, {siteConfig.personal.location.region}</p>
							<p className="text-gray-400 text-sm mt-1">{siteConfig.personal.location.country}</p>
						</div>

						<div className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-violet-500/30 rounded-lg p-6 transition-colors duration-300 md:col-span-2">
							<div className="flex items-center gap-3 mb-4">
								<FiStar className="w-6 h-6 text-violet-400 group-hover:scale-110 transition-transform duration-300" />
								<h3 className="text-lg md:text-xl font-semibold text-white">Achievements</h3>
							</div>
							<ul className="space-y-2">
								{siteConfig.about.achievements.map((achievement) => (
									<li key={achievement} className="text-gray-300 text-sm">{achievement}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
