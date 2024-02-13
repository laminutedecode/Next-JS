import './index.css'
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
        </body>
    </html>
  )
}
