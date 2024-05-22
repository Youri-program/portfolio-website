import Navbar from './navbar'
import Footer from './footer'
import Header from './header'
 
export default function Layout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Header />
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
    // <div className="content">
    //   <Navbar />
    //   { children }
    //   <Footer />
    // </div>
  )
}