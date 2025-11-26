import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="mt-4">I enjoy designing efficient systems, debugging hardware/software interactions, and producing clean, maintainable code. I'm currently focused on embedded systems, performance-critical software, and distributed systems.</p>
      </main>
      <Footer />
    </>
  )
}
