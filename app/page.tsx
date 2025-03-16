import { Suspense } from "react"
import Hero from "@/modules/hero"
import About from "@/modules/about"
import Skills from "@/modules/skills"
import Projects from "@/modules/projects"
import BlogSection from "@/modules/blog"
import Loading from "@/components/ui/loading"
import { PersonStructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Structured Data for SEO */}
      <PersonStructuredData />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Blog Section */}
      <Suspense
        fallback={
          <section className="py-24 bg-black">
            <div className="container px-4 mx-auto flex justify-center items-center py-32">
              <Loading />
            </div>
          </section>
        }
      >
        <BlogSection />
      </Suspense>
    </main>
  )
}

