import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Doubly Linked List Library',
      desc: 'C data structure library with extensive tests and benchmarks.',
      tags: ['C', 'GTest', 'Performance'],
      link: '#'
    },
    {
      title: 'ESP32 Camera Server',
      desc: 'Camera capture, rotate, and WebUI running on ESP32 with OTA updates.',
      tags: ['Embedded', 'ESP32'],
      link: '#'
    }
  ]

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (<ProjectCard key={p.title} project={p} />))}
        </div>
      </main>
      <Footer />
    </>
  )
}
