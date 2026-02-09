'use client';

import { memo } from 'react';
import { FiCode, FiExternalLink } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import { siteConfig } from '@/lib/siteConfig';

const ProjectsSection = memo(() => {
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
						{siteConfig.sections.projects.title}
					</h2>
				</div>
				<div className="w-12 h-1 bg-linear-to-r from-violet-600 to-violet-400 mb-8 md:mb-12 md:ml-0 mx-auto md:mx-0"></div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
					{siteConfig.projects.map((project, idx) => (
						<div
							key={idx}
							className="group bg-linear-to-br from-white/10 to-white/5 border border-white/10 hover:border-violet-500/30 rounded-lg overflow-hidden transition-colors duration-300 h-full"
						>
							<div className="p-6 md:p-8 h-full flex flex-col">
								<h3 className="text-xl md:text-2xl font-bold text-white font-display mb-3">
									{project.title}
								</h3>
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
								<div className="flex gap-3 mt-auto">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className={`px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn ${project.demo ? 'flex-1' : 'w-full'}`}
									>
										<SiGithub className="w-4 h-4" />
										Code
									</a>
									{project.demo ? (
										<a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
											className="flex-1 px-4 py-2.5 bg-violet-500/20 hover:bg-violet-500/30 border border-violet-500/30 hover:border-violet-500/50 text-violet-300 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn"
										>
											Demo
											<FiExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
										</a>
									) : null}
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
