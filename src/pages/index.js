import Layout from '../components/layout.js'
import Link from 'next/link' 

export default function Home() {
  return (
    <section>
    <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      My Portfolio
    </h1>
    <p className="mb-4">
      {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
      Vim's keystroke commands and tabs' flexibility for personal viewing
      preferences. This extends to my support for static typing, where its
      early error detection ensures cleaner code, and my preference for dark
      mode, which eases long coding sessions by reducing eye strain.`}
    </p>
  </section>
  )
}
 
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
    </Layout>
  )
}