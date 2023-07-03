"use client";

import Shell from "@/components/organisms/Shell";
import { Inter } from "next/font/google";
import ProgressBar from "next-nprogress-bar";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: "Autobar Dashboard",
//   description: "Dashboard is a tool used for managing and controlling all things Autobar.",
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Shell>
          {children}
        </Shell>
        <ProgressBar
          height="3px"
          color="#3b82f6"
          options={{ showSpinner: false, }}
          shallowRouting
          appDirectory
        />
      </body>
    </html>
  )
}
