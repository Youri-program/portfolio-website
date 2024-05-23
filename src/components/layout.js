import SideBarLeft from './sidebar-left'
import Footer from './footer'
import Header from './header'
 
// export default function Layout({ children }) {
//   return (
//     <div className="flex">
//       <SideBarLeft />
//       <div className="flex flex-col flex-1">
//         <Header />
//         <div className="antialiased max-w-2xl lg:mx-16 flex flex-col flex-1">
//           <main className="flex flex-col flex-1 p-4 mt-16">
//             {children}
//           </main>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }


export default function Layout({ children }) {
  return (
    <div className="flex">
      <SideBarLeft />
      <div className="antialiased max-w-2xl lg:mx-auto  flex flex-col flex-1">
        <Header />
        <main className="flex flex-col flex-1 p-4">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}