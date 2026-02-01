'use client';

import { memo, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiMongodb, SiDocker } from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';

// Lazy load LogoLoop
const LogoLoop = dynamic(() => import('@/components/ui/LogoLoop').then(mod => ({ default: mod.default })), {
	ssr: false
});

const techLogos = [
	{ node: <SiReact />, title: "React", href: "https://react.dev" },
	{ node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
	{ node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
	{ node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
	{ node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
	{ node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
	{ node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
	{ node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
];

const skillCategories = [
	{
		title: 'Languages',
		skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL'],
	},
	{
		title: 'Frontend',
		skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'Redux', 'Framer Motion'],
	},
	{
		title: 'Backend',
		skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Microservices', 'System Design'],
	},
	{
		title: 'Databases & Tools',
		skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'AWS'],
	},
];

const SkillsSection = memo(() => {
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		let scrollTimer: NodeJS.Timeout;
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					setIsScrolling(true);
					clearTimeout(scrollTimer);
					scrollTimer = setTimeout(() => {
						setIsScrolling(false);
					}, 150);
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
			clearTimeout(scrollTimer);
		};
	}, []);

	return (
		<>
			{/* Tech Stack Loop */}
			<div
				className="relative z-10 bg-black/50 border-b border-white/10 py-12 md:py-16 backdrop-blur-sm"
				style={{
					contain: 'layout style paint',
					transform: 'translateZ(0)',
					backfaceVisibility: 'hidden',
					isolation: 'isolate'
				}}
			>
				<div className="max-w-6xl mx-auto px-4">
					<p className="text-center text-white/60 text-sm md:text-base font-medium mb-8">
						Tech Stack & Tools
					</p>
					<LogoLoop
						logos={techLogos}
						speed={isScrolling ? 0 : 40}
						direction="left"
						logoHeight={70}
						gap={100}
						hoverSpeed={0}
						scaleOnHover={false}
						fadeOut={true}
						fadeOutColor="#000000"
						ariaLabel="Technology stack"
					/>
				</div>
			</div>

			{/* Skills Section */}
			<section id="skills" className="relative z-10 bg-black min-h-screen flex items-center justify-center px-4 py-20 md:py-24 overflow-hidden">
				{/* Subtle background gradient */}
				<div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl opacity-40"></div>
				<div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl opacity-40"></div>

				<div className="max-w-6xl w-full animate-on-scroll visible relative z-10">
					<div className="flex items-center justify-center gap-3 mb-8">
						<div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-violet-400"></div>
						<h2 className="text-4xl md:text-5xl font-bold text-white font-display">Skills</h2>
						<div className="w-12 h-1 bg-gradient-to-l from-violet-600 to-violet-400"></div>
					</div>
					<p className="text-center text-white/60 mb-12 md:mb-16 max-w-2xl mx-auto text-base md:text-lg">
						My technical expertise spans across modern web development, from frontend frameworks to backend architectures and cloud infrastructure.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
						{skillCategories.map((category) => (
							<div
								key={category.title}
								className="group relative"
							>
								{/* Animated border */}
								<div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600/20 to-violet-600/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

								<div className="relative bg-white/5 border border-white/10 group-hover:border-violet-500/30 rounded-lg p-6 transition-all duration-300 h-full">
									<div className="flex items-center gap-2 mb-4">
										<FiArrowRight className="text-violet-400 group-hover:translate-x-1 transition-transform duration-300" size={18} />
										<h3 className="text-lg font-bold text-white">{category.title}</h3>
									</div>
									<ul className="space-y-2">
										{category.skills.map((skill) => (
											<li key={skill} className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">
												{skill}
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;
