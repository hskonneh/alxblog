"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const blogPosts = [
	{
		title: "The Future of Artificial Intelligence",
		date: "September 18, 2025",
		author: "Hassan Sidique Konneh",
		excerpt: "AI is rapidly changing the world as we know it. In this post, we'll explore the future of AI and its potential impact on society.",
		image: "/blog-1.jpg",
		slug: "the-future-of-artificial-intelligence",
	},
	{
		title: "Getting Started with Next.js 15",
		date: "September 17, 2025",
		author: "Jane Smith",
		excerpt: "Next.js 15 is here, and it's packed with new features. This tutorial will guide you through the process of building your first Next.js 15 application.",
		image: "/blog-2.jpg",
		slug: "getting-started-with-nextjs-15",
	},
	{
		title: "The Rise of Quantum Computing",
		date: "September 16, 2025",
		author: "Peter Jones",
		excerpt: "Quantum computing is a revolutionary technology that has the potential to solve some of the world's most complex problems. In this article, we'll explore the basics of quantum computing and its potential applications.",
		image: "/blog-3.jpg",
		slug: "the-rise-of-quantum-computing",
	},
];

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="min-h-screen bg-background text-foreground">
			<header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-10">
				<div className="container mx-auto flex justify-between items-center p-4">
					<Link href="/" className="text-2xl font-bold font-mono text-primary">
						TechBlog
					</Link>
					<nav className="hidden md:flex gap-8">
						<Link href="/" className="nav-link">
							Home
						</Link>
						<Link href="/blog" className="nav-link">
							Blog
						</Link>
						<Link href="/about" className="nav-link">
							About
						</Link>
						<Link href="/contact" className="nav-link">
							Contact
						</Link>
					</nav>
					<button
						className="md:hidden"
						aria-label="Toggle navigation"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
							/>
						</svg>
					</button>
				</div>
				{isMenuOpen && (
					<nav className="md:hidden bg-secondary p-4">
						<Link href="/" className="block nav-link text-center py-2">
							Home
						</Link>
						<Link href="/blog" className="block nav-link text-center py-2">
							Blog
						</Link>
						<Link href="/about" className="block nav-link text-center py-2">
							About
						</Link>
						<Link href="/contact" className="block nav-link text-center py-2">
							Contact
						</Link>
					</nav>
				)}
			</header>

			<main className="pt-16">
				<section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center text-white hero-section">
					<div className="absolute inset-0 bg-black/50" />
					<div className="relative z-10">
						<h1 className="text-5xl font-bold mb-4">
							Welcome to TechBlog
						</h1>
						<p className="text-xl max-w-2xl mx-auto">
							Your daily dose of the latest and greatest in the world of technology.
						</p>
					</div>
				</section>

				<section className="container mx-auto py-16">
					<h2 className="text-3xl font-bold mb-8 text-center">
						Latest Blog Posts
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPosts.map((post) => (
							<div key={post.slug} className="bg-secondary rounded-lg overflow-hidden">
								<Image
									src={post.image}
									alt={post.title}
									width={400}
									height={250}
									className="w-full h-48 object-cover"
								/>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2">{post.title}</h3>
									<p className="text-sm text-gray-400 mb-2">
										{post.date} by {post.author}
									</p>
									<p className="text-gray-300">{post.excerpt}</p>
									<Link
										href={`/blog/${post.slug}`}
										className="text-primary mt-4 inline-block"
									>
										Read more
									</Link>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>

			<footer className="bg-secondary py-8 text-center">
				<div className="container mx-auto">
					<p>&copy; 2025 TechBlog. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}