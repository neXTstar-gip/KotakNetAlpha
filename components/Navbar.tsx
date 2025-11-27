import Link from 'next/link'

export default function Navbar(){
  return (
    <nav className="w-full border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">KotakNet</Link>
        <Link href="/search" className="text-slate-600 hover:text-slate-900">Browse</Link>
      </div>
    </nav>
  )
}