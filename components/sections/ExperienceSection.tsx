'use client';

import { memo } from 'react';
import { FiBriefcase, FiCalendar, FiArrowRight } from 'react-icons/fi';

const ExperienceSection = memo(() => {
	const experiences = [
		{
			title: 'Software Engineer',
			company: 'Upesto',
			period: 'Nov 2024 - Oct 2025',
			description: [
				'Developed and maintained scalable web applications using React and Node.js',
				'Collaborated with cross-functional teams to deliver high-quality software solutions',
				'Implemented best practices for code quality and performance optimization'
			]
		},
		{
			title: 'Backend Developer Intern',
			company: 'Vrixaa Labs',
			period: 'Aug 2024 – Jan 2025',
			description: [
				'Built robust backend APIs and services with Node.js and Express',
				'Worked on database design and optimization using MongoDB and PostgreSQL',
				'Gained hands-on experience with modern backend technologies and best practices'
			]
		}
	];

	return (
		<section id="experience" className="relative z-10 bg-black min-h-screen flex items-center justify-center px-4 py-20 md:py-24 overflow-hidden">
			{/* Subtle background gradient */}
			<div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl opacity-40"></div>
			<div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl opacity-40"></div>

			<div className="max-w-4xl w-full animate-on-scroll relative z-10">
				{/* Section Title */}
				<div className="flex items-center justify-center md:justify-start gap-3 mb-4">
					<FiBriefcase className="w-8 h-8 text-violet-400" />
					<h2 className="text-4xl md:text-5xl font-bold text-white font-display">
						Experience
					</h2>
				</div>
				<div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-violet-400 mb-8 md:mb-12 md:ml-0 mx-auto md:mx-0"></div>

				{/* Experience Cards */}
				<div className="space-y-6">
					{experiences.map((exp, idx) => (
						<div key={idx} className="group">
							<div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-violet-500/30 rounded-lg p-6 md:p-8 transition-colors duration-300">
								{/* Header */}
								<div className="mb-6">
									<div className="flex items-start justify-between mb-3">
										<div>
											<h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
												<FiArrowRight className="w-5 h-5 text-violet-400 shrink-0" />
												{exp.title}
											</h3>
											<p className="text-base md:text-lg text-violet-400 font-semibold mb-2">{exp.company}</p>
										</div>
									</div>
									<div className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
										<FiCalendar className="w-4 h-4 shrink-0" />
										<span>{exp.period}</span>
									</div>
								</div>

								{/* Description */}
								<ul className="space-y-3 ml-7">
									{exp.description.map((point, i) => (
										<li key={i} className="flex gap-3 text-gray-300 text-sm md:text-base">
											<span className="text-violet-400 font-bold">•</span>
											<span>{point}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
});

ExperienceSection.displayName = 'ExperienceSection';

export default ExperienceSection;
