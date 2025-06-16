'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
	{
		title: 'Map Route Planner',
		description: 'Vanilla Javascript application for visualizing the travelling salesman problem (TSP)',
		image: '/maproute.gif',
	},
	{
		title: 'Network Utility Tool',
		description: 'Browser extension to test and plot the user’s latency on an Internet Protocol network',
		image: '/ping.gif',

	},
		{
		title: 'Nutrition Calculator App',
		description: 'Mobile application to track nutrition and fitness behaviour',
		image: '/nutrition.gif',
	},
		{
		title: 'Educational Encryption Calculator',
		description: 'Calculator extension that utilizes encryption via advanced encryption standard',
		image: '/calculator.gif',
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Featured Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
						>
							<div className="aspect-video relative overflow-hidden">
								<Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
