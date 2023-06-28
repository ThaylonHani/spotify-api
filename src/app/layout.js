import { Header } from '@/components/header'
import './globals.css'


export const metadata = {
  title: 'SyncSpot',
  description: 'Veja suas músicas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body >
        {children}
      </body>
    </html>
  )
}
