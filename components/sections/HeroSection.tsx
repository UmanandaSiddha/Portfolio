'use client';

import { memo, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import SplitText from "@/components/ui/SplitText";
import DecayCard from "@/components/ui/DecayCard";
import RotatingText from '@/components/ui/RotatingText';
import { DefaultDP } from "@/assets";
import { SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si';

// Lazy load Beams only when needed
const Beams = dynamic(() => import('@/components/ui/Beams'), {
	ssr: false,
	loading: () => <div className="absolute inset-0 bg-black" />
});

const HeroSection = memo(() => {
	const [isHeroVisible, setIsHeroVisible] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Check if mobile on mount
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		const heroElement = document.getElementById('hero');
		if (!heroElement) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				// Only animate on desktop
				setIsHeroVisible(entry.isIntersecting && !isMobile);
			},
			{ threshold: 0.1 }
		);

		observer.observe(heroElement);
		return () => {
			observer.disconnect();
			window.removeEventListener('resize', checkMobile);
		};
	}, [isMobile]);
	return (
		<section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
			{/* Background Beams - Animated on Desktop, Static on Mobile */}
			<div className="absolute inset-0 w-full h-full z-0">
				<Beams
					beamWidth={3}
					beamHeight={30}
					beamNumber={15}
					lightColor="#ffffff"
					speed={1.5}
					noiseIntensity={1.5}
					scale={0.15}
					rotation={30}
					shouldAnimate={isHeroVisible}
				/>
			</div>

			<div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-6xl w-full">
				{/* Profile Card - Hidden on mobile */}
				<div className="relative z-10 order-2 md:order-1 hidden md:block">
					<DecayCard width={280} height={400} image={DefaultDP.src} />
				</div>

				{/* Hero Text */}
				<div className="relative z-10 order-1 md:order-2 text-center md:text-left flex-1">
					<div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-4">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white">I'm a</h2>
						<RotatingText
							texts={['Developer', 'Engineer', 'Creator', 'Innovator']}
							mainClassName="px-5 md:px-6 lg:px-8 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white overflow-hidden py-2 md:py-3 justify-center rounded-xl font-display font-bold text-2xl md:text-3xl lg:text-4xl shadow-lg shadow-violet-500/20"
							staggerFrom={"last"}
							initial={{ y: "100%", opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: "-120%", opacity: 0 }}
							staggerDuration={0.025}
							splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1.5"
							transition={{ type: "tween", duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
							rotationInterval={2500}
						/>
					</div>
					<div className="text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 mb-6">
						<SplitText
							text="Umananda Siddha"
							className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
							delay={50}
							duration={1.25}
							ease="power3.out"
							splitType="chars"
							from={{ opacity: 0, y: 40 }}
							to={{ opacity: 1, y: 0 }}
							threshold={0.1}
							rootMargin="-100px"
							textAlign="center"
						/>
					</div>
					<div className="space-y-4 mt-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
						<p className="text-lg md:text-xl text-white max-w-xl mx-auto md:mx-0 font-medium">
							Software Engineer & Full Stack Developer
						</p>
						{/* <p className="text-base md:text-lg text-gray-100 max-w-xl mx-auto md:mx-0">
							B.Tech in Electronics and Communication Engineering
						</p> */}
						<p className="text-sm md:text-base text-gray-200 max-w-xl mx-auto md:mx-0">
							Bongaigaon, Assam, India
						</p>
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-8">
						<a
							href="#about"
							className="px-8 py-3 bg-linear-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 text-center"
						>
							View My Work
						</a>
						<a
							href="/resume.pdf"
							className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white/60 hover:text-white transition-all duration-300 text-center"
						>
							Download Resume
						</a>
					</div>

					{/* Social Icons */}
					<div className='flex items-center justify-center md:justify-start gap-4 md:gap-6 mt-6'>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
							aria-label="Instagram"
						>
							<SiInstagram className="w-6 h-6 md:w-7 md:h-7" />
						</a>
						<a
							href="https://linkedin.com/in/umananda-siddha-399b95217"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
							aria-label="LinkedIn"
						>
							<SiLinkedin className="w-6 h-6 md:w-7 md:h-7" />
						</a>
						<a
							href="https://github.com/UmanandaSiddha"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
							aria-label="GitHub"
						>
							<SiGithub className="w-6 h-6 md:w-7 md:h-7" />
						</a>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
				<div className="flex flex-col items-center gap-2">
					<span className="text-sm text-white font-medium">Scroll</span>
					<div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
						<div className="w-1 h-3 bg-white/80 rounded-full animate-scroll"></div>
					</div>
				</div>
			</div>
		</section>
	);
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
