import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import { Suspense } from "react"

import { SmoothCursor } from "@/components/ui/smooth-cursor";
// import LandingAnimation from "@/components/LandingAnimation";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Pointer } from "@/components/ui/pointer"
import { Analytics } from "@vercel/analytics/next"
import ClientLayout from "@/components/ClientLayout"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Devaansh Dubey - Software Developer",
  description: "Portfolio website of Devaansh Dubey, a Software Developer",
  icons: {
    icon: [
      { url: "/file.svg", sizes: "any", type: "image/x-icon" },
      { url: "/file.svg", sizes: "16x16", type: "image/png" },
      { url: "/file.svg", sizes: "32x32", type: "image/png" },
    ],
    apple: "/file.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Analytics />
       
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout>
            <Suspense fallback={null}>
              <Header />
        <Pointer />
              <main className="max-w-4x1 mx-auto px-4 sm:px-6 lg:px-8">
                {children}
              </main>
              <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Devaansh. All rights reserved.
              </footer>
            </Suspense>
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}