import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Pascal Simon - Frontend Developer',
	description:
		'Welcome to my portfolio! I am a passionate frontend developer specializing in creating beautiful, responsive, and user-centric web applications. With expertise in modern JavaScript frameworks and UI/UX principles, I transform designs into seamless interactive experiences.',
	keywords: [
		'Frontend Developer',
		'Full-Stack Developer',
		'React.js Architect',
		'Next.js Expert',
		'Node.js Engineer',
		'TypeScript Specialist',
		'JavaScript Programmer',
		'RESTful API Development',
		'GraphQL Integration',
		'UI/UX Design',
		'Responsive Web Design',
		'Server-Side Rendering',
		'Database Integration',
		'Performance Optimization',
		'Web Accessibility',
	],
	authors: [{ name: 'Pascal Simon' }],
	creator: 'Pascal Simon',
	openGraph: {
		title: 'Pascal Simon - Frontend Developer Portfolio',
		description: 'Versatile frontend developer with full-stack expertise, building scalable, high-performance web applications. Explore my projects and frontend development expertise.',
		url: 'https://pascalsimon.net',
		siteName: 'Pascal Simon - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Pascal Simon - Frontend Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
