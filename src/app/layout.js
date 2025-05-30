import './global.css'
import Navbar from './(nav)/navbar';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>
          <div className='common-background'>
            {children}
          </div>
        </main>

      </body>
    </html>
  )
}
