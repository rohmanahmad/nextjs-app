import "@/styles/tailwind.css";

export default function RootLayout ({children}: {children: React.ReactNode}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}