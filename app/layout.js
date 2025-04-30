import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Moon Valley Meadery - Artisanal Mead in Phoenix',
  description: 'Handcrafted mead by Mark and Kira in Phoenix, Arizona. Experience the ancient art of mead-making with modern techniques.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-[#5C2E2E] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold">Moon Valley Meadery</Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="hover:bg-[#4A2525] px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                  <Link href="/about" className="hover:bg-[#4A2525] px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
                  <Link href="/contact" className="hover:bg-[#4A2525] px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                </div>
              </div>
              <div className="md:hidden">
                <button className="mobile-menu-button p-2 rounded-md hover:bg-[#4A2525]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          <div className="hidden mobile-menu md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block hover:bg-[#4A2525] px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link href="/about" className="block hover:bg-[#4A2525] px-3 py-2 rounded-md text-base font-medium">About Us</Link>
              <Link href="/contact" className="block hover:bg-[#4A2525] px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="bg-[#F4F0E6]">{children}</main>
      </body>
    </html>
  )
}
