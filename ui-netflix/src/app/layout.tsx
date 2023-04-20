import './globals.css'

export const metadata = {
  title: 'UI-Netflix - Gollinha',
  description: 'Creator by @gollinhaoficial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
