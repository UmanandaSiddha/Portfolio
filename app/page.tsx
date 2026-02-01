'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
	useScrollAnimation();

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
