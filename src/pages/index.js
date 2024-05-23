import Layout from '../components/layout.js'
import Link from 'next/link' 

export default function Home() {
  return (
    <section className="">
      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        hey<span role="img" aria-label="waving hand">👋</span>, welkom op youri's portfolio!
      </h1>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="my-work" className="text-2xl space-mono-bold mb-4">
          <a href="#my-work" className="anchor">My Work</a>
        </h2>
        <p className="mb-4">
          On a mission to build products developers love, and along the way, teach the next generation of developers. Here's a summary of my work so far.
        </p>
      </div>

      <div className="mb-8">
        <h2 id="vercel" className="text-2xl space-mono-bold mb-4">
          <a href="#vercel" className="anchor">Vercel</a>
        </h2>
        <p className="text-lg space-mono-bold mb-2">Feedback</p>
        <img src="\images\schets-navigatiestructuur.jpeg" alt="Vercel" className="rounded mb-4" />
        <p className="mb-4">
          I joined <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/EbyiEIBRVzhHhl2XHYWSdf4BnEkuxyqFPIE1m9w-WQUr9Q?e=vLWvtX" className="inline-button">Vercel</Link> early to grow Next.js and our developer community. I built our Developer Relations team to teach our community about our products.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>In 2021, I was promoted to Director of DevRel. We <span className="font-bold">translated customer pain</span> back into the product roadmap. We spoke at <span className="font-bold">conferences</span>, wrote blog posts, and created videos. We built open-source examples and contributed back to the product.</li>
          <li>In 2022, I was promoted to VP of Developer Experience, now also leading our product documentation team. My team created a <Link href="https://nextjs.org/learn/foundations/about-nextjs" className="inline-button">new free course</Link> to teach Next.js, which had 17 million page views that year. <span className="font-bold">I shipped</span>. I partnered with our open-source community, collaborating with frameworks like <span className="font-bold">Nuxt</span> and <span className="font-bold">Astro</span> and sponsoring individuals and projects.</li>
          <li>In 2023, I was promoted to VP of Product, now also leading Product Management.</li>
        </ul>
        <p className="mb-4">
          Since I joined Vercel in 2020, Next.js active developers have grown 1000%, now at ~900k. Next.js is now a top 10 software project on GitHub with 121k stars. It's used by Walmart, ChatGPT, Starbucks, Okta, Datastax, Notion, and <Link href="https://nextjs.org/showcase" className="inline-button">more</Link>.
        </p>
      </div>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="hy-vee" className="text-2xl space-mono-bold mb-4">
          <a href="#hy-vee" className="anchor">Hy-Vee</a>
        </h2>
        <p className="mb-4">
          Hy-Vee content goes here...
        </p>
      </div>
    </section>
  )
}
 
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
    </Layout>
  )
}