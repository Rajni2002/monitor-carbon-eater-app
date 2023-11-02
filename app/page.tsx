import Main from "@/components/main"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start py-5 dark:bg-black">
      <Navbar />
      <Main />
    </main>
  )
}
