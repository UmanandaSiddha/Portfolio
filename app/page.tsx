'use client';

import { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
	useScrollAnimation();

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const hash = window.location.hash;
		if (!hash) return;

		const targetId = hash.replace('#', '');
		const element = document.getElementById(targetId);
		if (!element) return;

		const timer = window.setTimeout(() => {
			element.scrollIntoView({ behavior: 'smooth' });
		}, 50);

		return () => window.clearTimeout(timer);
	}, []);

	return (
		<main className="relative w-full min-h-screen bg-black">
			<HeroSection />

			<AboutSection />

			<ExperienceSection />

			<ProjectsSection />

			<SkillsSection />

			<ContactSection />
		</main>
	);
}
