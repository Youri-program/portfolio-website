// import Link from 'next/link';

// export default function SideBarLeft() {
//   return (
//     <nav>
//       <Link href="/">Home</Link>
//       <Link href="/project01">Project 1</Link>
//       <Link href="/project02/">Project 2</Link>
//       <Link href="/kerntaak01">Kerntaak 1</Link>
//       <Link href="/kerntaak02/">Kerntaak 2</Link>
//       <Link href="/about/">About Me</Link>
//     </nav>
//   );
// }

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowRightIcon, ArrowDownIcon } from './icons/arrowicons';

const menuItems = [
  {
    name: 'Home',
    href: '/',
    subItems: [],
  },
  {
    name: 'Project 1',
    href: '/project01',
    subItems: [
      { name: 'Eisen en Wensen', href: '/project01/eisen-en-wensen' },
      { name: 'Ontwerpt Software', href: '/project01/ontwerpt-software' },
    ],
  },
  {
    name: 'Project 2',
    href: '/project02',
    subItems: [
      { name: 'Eisen en Wensen', href: '/project02/eisen-en-wensen' },
      { name: 'Ontwerpt Software', href: '/project02/ontwerpt-software' },
    ],
  },
  {
    name: 'Kerntaak 1',
    href: '/kerntaak01',
    subItems: [], // Voeg hier subpagina's toe als dat nodig is
  },
  {
    name: 'Kerntaak 2',
    href: '/kerntaak02',
    subItems: [], // Voeg hier subpagina's toe als dat nodig is
  },
  {
    name: 'About Me',
    href: '/about',
    subItems: [],
  },
];

export default function SideBarLeft() {
  const [openItems, setOpenItems] = useState({});
  const router = useRouter();

  const toggleItem = (item) => {
    if (!openItems[item]) {
      router.push(menuItems.find((menuItem) => menuItem.name === item).href);
    }
    setOpenItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <nav className="h-screen flex flex-col bg-gray-800 text-white w-64 p-4">
      {menuItems.map((item) => (
        <div key={item.name}>
          <button
            onClick={() => toggleItem(item.name)}
            className="text-lg flex justify-between w-full hover:text-gray-300"
          >
            {item.name}
            {item.subItems.length > 0 && (
              <span className="ml-2 mt-1.5">
                {openItems[item.name] ? <ArrowDownIcon /> : <ArrowRightIcon />}
              </span>
            )}
          </button>
          {openItems[item.name] && item.subItems.length > 0 && (
            <div className="ml-4 mt-2 space-y-2">
              {item.subItems.map((subItem, index) => (
                <div key={subItem.name}>
                  <Link href={subItem.href} className="text-md hover:text-gray-300">
                    {subItem.name}
                  </Link>
                  {index < item.subItems.length - 1 && <br />}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
