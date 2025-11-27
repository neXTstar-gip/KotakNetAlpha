import './styles/globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'KotakNet',
  description: 'Streaming anime favoritmu'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}