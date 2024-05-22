import SideBarLeft from './sidebar-left'
import Footer from './footer'
import Header from './header'
 
// export default function Layout({ children }) {
//   return (
//     <html
//       lang="en"
//     >
//       <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
//         <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
//           <Header />
//           <SideBarLeft />
//           {children}
//           <Footer />
//         </main>
//       </body>
//     </html>
//   )
// }


export default function Layout({ children }) {
  return (
    <div className="flex">
      <SideBarLeft />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex flex-col flex-1 p-4">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}