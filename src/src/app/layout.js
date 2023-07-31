import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'devscafé',
  description: 'Somos uma comunidade de desenvolvedores apaixonados, criada para promover a troca de conhecimentos, colaboração e inspiração. Aqui, você encontrará projetos incríveis, códigos abertos e discussões animadas sobre programação.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
