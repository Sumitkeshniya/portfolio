import Nav from "@/components/Nav";
import Spotlight from "@/components/Spotlight";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Systems from "@/components/Systems";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { profile } from "@/data/portfolio";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    sameAs: [profile.github, profile.linkedin],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div aria-hidden className="dot-grid pointer-events-none fixed inset-0 z-0 opacity-60" />
      <Spotlight />
      <Nav />
      <main>
        <Hero />
        <About />
        <Systems />
        <Stack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
