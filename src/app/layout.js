import './globals.css'


export const metadata = {
  title: 'SyncSpot',
  description: 'Veja suas músicas',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet"/>
      </head>
      <body >
        {children}
      </body>
    </html>
  )
}
