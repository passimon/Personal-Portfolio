'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="relative p-12 rounded-3xl overflow-hidden backdrop-blur-xl border border-gray-800 bg-gradient-to-br from-gray-900/90 to-gray-900/50"
				>
					<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
					<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
					<div className="relative z-10">
						<motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
							<h2 className="text-4xl font-bold mb-3 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
								Let&apos;s Connect
							</h2>
							<p className="text-gray-400 text-center mb-4">Ready to collaborate or have a project in mind? <br/>Let&apos;s make something amazing together!</p>
							<div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								<span>Düsseldorf, Germany</span>
							</div>
						</motion.div>
						<div className="flex flex-col items-center gap-6 mb-8">
							<motion.a
								href="mailto:pas.simon567[at]gmail.com"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium text-white"
							>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								Get in Touch
							</motion.a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
