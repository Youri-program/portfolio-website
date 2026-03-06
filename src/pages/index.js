import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Youri van der Meulen</title>
        <meta
          name="description"
          content="Data Science & AI student building systems that work in the real world — edge AI, computer vision, and data-driven decision support."
        />
      </Head>

      <article className="space-y-8">
        {/* Main statement */}
        <h1 className="font-serif text-heading text-3xl md:text-4xl leading-snug font-normal">
          I build AI systems for environments{' '}
          <span className="italic">where failure isn't an option.</span>
        </h1>

        {/* Intro */}
        <div className="space-y-5 text-[15px] leading-relaxed text-text/80">
          <p>
            I'm Youri, a Data Science & AI student at Zuyd University of Applied Sciences
            in Maastricht. My background is in software development — I graduated cum laude
            from Vista College before making the move into AI — and that engineering
            foundation shapes how I approach everything I build.
          </p>
          <p>
            I'm drawn to problems where AI meets the physical world: edge inference on
            embedded hardware, computer vision in operational environments, data pipelines
            that real systems depend on. I care about the full stack — from a model running
            on a Jetson to the cloud backend serving its results — because that's where
            things actually get hard, and interesting.
          </p>
          <p>
            My particular interest is in defense and security applications: environments
            where the engineering constraints are real, the stakes are high, and building
            something that actually works matters more than a benchmark score.
            I'm looking for an internship where I can contribute to that kind of work.
          </p>
        </div>

        <hr className="border-border" />

        {/* Navigation footer */}
        <div className="text-[14px] text-muted leading-relaxed">
          See what I've been building →{' '}
          <Link href="/projects" className="link">projects</Link>
          {' · '}
          <Link href="/about" className="link">about me</Link>
          {' · '}
          <Link href="/contact" className="link">get in touch</Link>
        </div>
      </article>
    </>
  )
}