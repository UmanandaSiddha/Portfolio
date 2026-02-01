'use client';

import { memo } from 'react';
import { FiCode, FiExternalLink } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';

const ProjectsSection = memo(() => {
	const projects = [
		{
			title: 'Savoraeats',
			description: 'A full-stack food delivery platform with real-time order tracking, payment integration, and seamless user experience for both customers and restaurants.',
			technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
			github: 'https://github.com',
			demo: 'https://savoraeats.com',
			image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80&auto=format&fit=crop'
		},
		{
			title: 'Voolata',
			description: 'An innovative web application designed to streamline workflows and enhance productivity with advanced task management and collaboration features.',
			technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
			github: 'https://github.com',
			demo: 'https://voolata.com',
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop'
		}
	];

	return (
		<section id="projects" className="relative z-10 bg-black min-h-screen flex items-center justify-center px-4 py-20 md:py-24 overflow-hidden">
			{/* Subtle background gradient */}
			<div className="absolute top-0 left-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl opacity-40"></div>
			<div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl opacity-40"></div>

			<div className="max-w-5xl w-full animate-on-scroll relative z-10">
				{/* Section Title */}
				<div className="flex items-center justify-center md:justify-start gap-3 mb-4">
					<FiCode className="w-8 h-8 text-violet-400" />
					<h2 className="text-4xl md:text-5xl font-bold text-white font-display">
						Projects
					</h2>
				</div>
				<div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-violet-400 mb-8 md:mb-12 md:ml-0 mx-auto md:mx-0"></div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-violet-500/30 rounded-lg overflow-hidden transition-colors duration-300"
						>
							{/* Image Header */}
							<div className="relative h-40 md:h-48 bg-gradient-to-br from-violet-600/30 to-purple-500/20 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300"
									loading="lazy"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
								<div className="absolute bottom-4 left-6">
									<h3 className="text-xl md:text-2xl font-bold text-white font-display">{project.title}</h3>
								</div>
							</div>

							{/* Content */}
							<div className="p-6 md:p-8">
								<p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
									{project.description}
								</p>

								{/* Technologies */}
								<div className="flex flex-wrap gap-2 mb-6">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full text-xs md:text-sm transition-colors duration-300"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Action Buttons */}
								<div className="flex gap-3">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn"
									>
										<SiGithub className="w-4 h-4" />
										Code
									</a>
									<a
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 px-4 py-2.5 bg-violet-500/20 hover:bg-violet-500/30 border border-violet-500/30 hover:border-violet-500/50 text-violet-300 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn"
									>
										Demo
										<FiExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
