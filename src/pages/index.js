import Layout from '../components/layout.js'
import Link from 'next/link' 

export default function Home() {
  return (
    <div>
        <a>Homepage</a>
    </div>
  )
}
 
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
    </Layout>
  )
}