import "./globals.css";
import SearchBar from "../components/SearchBar";

export const metadata = {
  title: "KotakNet",
  description: "KotakNet — anime streaming (UI prototype)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen antialiased bg-gradient-to-b from-[#0D0F1B] to-[#1B1E2F] text-white">
        <header className="w-full border-b border-white/5 bg-transparent/40 backdrop-blur-md sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-6">
            <h1 className="text-2xl font-extrabold tracking-tight">KotakNet</h1>
            <div className="flex-1">
              {/* SearchBar is client component */}
              <SearchBar />
            </div>
            <nav className="ml-4 flex items-center gap-4 text-sm opacity-80">
              <a href="/" className="hover:text-blue-400">Home</a>
              <a href="/anime" className="hover:text-blue-400">Anime</a>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>

        <footer className="mt-12 text-center opacity-60 text-sm pb-8">
          © {new Date().getFullYear()} KotakNet — UI Prototype
        </footer>
      </body>
    </html>
  );
}