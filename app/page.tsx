"use client"
import Main from "@/components/main"
import Navbar from "@/components/navbar/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { useMediaQuery } from "@/hooks/use-media-query"
import { NovuProvider } from "@novu/notification-center"

export default function Home() {
  const matches = useMediaQuery('(max-width: 500px)')
  return (
    <NovuProvider subscriberId="6537c9e35d52f64aae0e1d8f" applicationIdentifier={'vs4fK7LaheE-'} styles={{
      layout: {
        root: {
          width: !matches ? "30vw" : "100vw",
          background: "blur(10px)"
        }
      }
    }}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <main className="flex min-h-screen flex-col justify-start py-5 dark:bg-black">
          <Navbar />
          <Main />
        </main>
      </ThemeProvider>
    </NovuProvider>
  )
}
