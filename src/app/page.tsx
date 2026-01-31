import { Navbar } from '@/components/ui/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Philosophy } from '@/components/sections/Philosophy'
import { AnalysisCycle } from '@/components/sections/AnalysisCycle'
import { ToolsHorizontal } from '@/components/sections/ToolsHorizontal'
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline'
import { Mindset } from '@/components/sections/Mindset'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/ui/Footer'
import { LoadingScreen } from '@/components/ui/LoadingScreen'
import { FloatingNav } from '@/components/ui/FloatingNav'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <AnalysisCycle />
        <ToolsHorizontal />
        <ExperienceTimeline />
        <Mindset />
        <Contact />
      </main>
      <Footer />
      <FloatingNav />
    </>
  )
}
