'use client';

import { memo } from 'react';

const BlogsSection = memo(() => {
	const blogs = [
		{ 
			title: "Building Scalable Web Applications", 
			excerpt: "Learn how to architect and build web applications that can handle millions of users...",
			date: "Dec 15, 2024",
			image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
		},
		{ 
			title: "Modern React Patterns", 
			excerpt: "Exploring advanced React patterns and best practices for 2024...",
			date: "Dec 10, 2024",
			image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
		},
		{ 
			title: "Database Optimization Techniques", 
			excerpt: "A deep dive into optimizing database queries and improving performance...",
			date: "Dec 5, 2024",
			image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
		}
	];

	return (
		<section id="blogs" className="relative z-10 bg-black min-h-screen flex items-center justify-center px-4 py-12 md:py-20">
			<div className="max-w-6xl w-full animate-on-scroll">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12 gap-4">
					<h2 className="text-3xl md:text-5xl font-bold text-white">
						Featured Blogs
					</h2>
					<a 
						href="/blogs" 
						className="text-cyan-400 hover:text-cyan-300 text-sm md:text-base font-medium transition-colors"
					>
						View All →
					</a>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{blogs.map((blog, index) => (
						<a 
							key={index}
							href={`/blogs/${blog.title.toLowerCase().replace(/\s+/g, '-')}`}
							className="bg-white/10 border border-white/20 rounded-lg overflow-hidden hover:bg-white/15 transition-all duration-200 hover:scale-[1.01] shadow-lg group"
						>
							<div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
								<div 
									className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-300"
									style={{ backgroundImage: `url(${blog.image})` }}
								></div>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
							</div>
							<div className="p-6">
								<span className="text-gray-400 text-xs md:text-sm">{blog.date}</span>
								<h3 className="text-lg md:text-xl font-bold text-white mb-2 mt-2">{blog.title}</h3>
								<p className="text-gray-300 text-sm md:text-base line-clamp-2">{blog.excerpt}</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
});

BlogsSection.displayName = 'BlogsSection';

export default BlogsSection;
