import Link from 'next/link'

export default function Header(){
  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold">Dev Patel</Link>
        <nav className="flex gap-4">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <a href="/Dev-Patel-Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </nav>
      </div>
    </header>
  )
}
