export function PersonStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ishan Singla",
          url: "https://ishansingla.io",
          jobTitle: "Backend Developer & AI Developer",
          worksFor: {
            "@type": "Organization",
            name: "Freelance",
          },
          sameAs: ["https://github.com/IshanSingla", "https://www.linkedin.com/in/itzishansingla/"],
          description:
            "Backend Developer & AI Developer with 2 years of experience in Node.js, NestJS, Flutter, and AI technologies",
          knowsAbout: [
            "Backend Development",
            "AI Development",
            "Mobile App Development",
            "Cloud Infrastructure",
            "Node.js",
            "NestJS",
            "Flutter",
            "React Native",
          ],
        }),
      }}
    />
  )
}

export function ProjectStructuredData({ project }: { project: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          name: project.title,
          description: project.description,
          author: {
            "@type": "Person",
            name: "Ishan Singla",
            url: "https://ishansingla.io",
          },
          programmingLanguage: project.techStack,
          codeRepository: project.githubLink || null,
          url: `https://ishansingla.io/projects/${project.id}`,
        }),
      }}
    />
  )
}

export function BlogPostStructuredData({ blog }: { blog: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blog.title,
          description: blog.excerpt,
          image: blog.coverImage || "/og-image.jpg",
          datePublished: blog.date,
          author: {
            "@type": "Person",
            name: blog.author || "Ishan Singla",
            url: "https://ishansingla.io",
          },
          publisher: {
            "@type": "Person",
            name: "Ishan Singla",
            url: "https://ishansingla.io",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://ishansingla.io/blog/${blog.slug}`,
          },
          keywords: blog.tags.join(", "),
        }),
      }}
    />
  )
}

