'use client';

import Link from 'next/link';
import { FiArrowLeft, FiEdit3 } from 'react-icons/fi';

const BlogComingSoonPage = () => {
	return (
		<main className="relative min-h-screen bg-black text-white overflow-hidden">
			<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"></div>
			<div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"></div>

			<section className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 py-24 text-center">
				<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
					<FiEdit3 className="h-4 w-4 text-violet-400" />
					Blog
				</div>

				<h1 className="mt-6 text-4xl font-bold font-display text-white md:text-6xl">
					Writing is loading...
				</h1>
				<p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
					A new space for deep dives on engineering, system design, and the craft of building products is on the way.
				</p>

				<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Link
						href="/"
						className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-violet-400/60 hover:text-violet-200"
					>
						<FiArrowLeft className="h-4 w-4" />
						Back to Home
					</Link>
					<Link
						href="/#contact"
						className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-violet-600 to-violet-500 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:from-violet-500 hover:to-violet-400"
					>
						Notify Me
					</Link>
				</div>

				<div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
					<div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
						<p className="text-xs uppercase tracking-[0.2em] text-white/50">Focus</p>
						<p className="mt-2 text-sm text-white/80">Product engineering stories and lessons learned.</p>
					</div>
					<div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
						<p className="text-xs uppercase tracking-[0.2em] text-white/50">Topics</p>
						<p className="mt-2 text-sm text-white/80">Backend architecture, performance, and tooling.</p>
					</div>
					<div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
						<p className="text-xs uppercase tracking-[0.2em] text-white/50">Timeline</p>
						<p className="mt-2 text-sm text-white/80">Launching soon. Stay tuned.</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default BlogComingSoonPage;
