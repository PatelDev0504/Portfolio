import Link from 'next/link'

export default function ProjectCard({ project }: { project: any }){
  return (
    <article className="card">
      <h3 className="font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm">{project.desc}</p>
      <div className="mt-3 flex gap-2 text-xs">
        {project.tags.map((t: string)=> <span key={t} className="tag">{t}</span>)}
      </div>
      <div className="mt-4">
        <Link href={project.link} className="btn-sm">View</Link>
      </div>
    </article>
  )
}
