import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev Patel — Software Engineer</title>
        <meta name="description" content="Dev Patel — Embedded & Systems Software Engineer. Portfolio and projects." />
      </Head>

      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 className="text-4xl md:text-5xl font-bold" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
              Hi — I'm Dev Patel.
            </motion.h1>
            <motion.p className="mt-4 text-lg" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              I build high-performance embedded systems and scalable software. I love low-level optimization and clean abstractions.
            </motion.p>

            <div className="mt-6 flex gap-4">
              <Link href="/projects" className="btn">See Projects</Link>
              <a className="btn-outline" href="/Dev-Patel-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-56 h-56 rounded-2xl overflow-hidden relative shadow-xl">
              <Image src="/profile.jpg" alt="Dev Patel" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-bold">High-performance Doubly Linked List</h3>
              <p className="mt-2 text-sm">C implementation with unit tests in C++/Google Test. Optimized memory layout and pointer usage.</p>
              <div className="mt-3 flex gap-2 text-xs">
                <span className="tag">C</span>
                <span className="tag">GTest</span>
                <span className="tag">Algorithms</span>
              </div>
            </div>

            <div className="card">
              <h3 className="font-bold">ESP32 SoftAP Tooling</h3>
              <p className="mt-2 text-sm">Full WebServer UI, camera integration, and OTA for rapid prototyping.</p>
              <div className="mt-3 flex gap-2 text-xs">
                <span className="tag">ESP32</span>
                <span className="tag">Arduino</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
