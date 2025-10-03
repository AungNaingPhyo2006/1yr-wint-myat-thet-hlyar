import './globals.css'

export const metadata = {
  title: 'Wint Myat Thet Hlyar',
  description: 'Birthday Invitation',
  openGraph: {
    images: '../public/assets/images/home1.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}