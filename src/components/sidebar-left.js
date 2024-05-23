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
    name: 'Portfolio Website',
    href: '/portfolio-website',
    subItems: [
      { name: '- Eisen en Wensen', href: '/portfolio-website/eisen-en-wensen' },
      { name: '- Ontwerpt Software', href: '/portfolio-website/ontwerpt-software' },
      { name: '- Realiseert Software', href: '/portfolio-website/realiseert-software' },
      { name: '- Test Software', href: '/portfolio-website/test-software' },
      { name: '- Doet Verbetervoorstellen', href: '/portfolio-website/doet-verbetervoorstellen' },
      { name: '- Reflectie', href: '/portfolio-website/reflectie' },
    ],
  },
  {
    name: 'Kembit Stage',
    href: '/kembit',
    subItems: [
      { name: '- Eisen en Wensen', href: '/kembit/eisen-en-wensen' },
      { name: '- Ontwerpt Software', href: '/kembit/ontwerpt-software' },
      { name: '- Realiseert Software', href: '/kembit/realiseert-software' },
      { name: '- Test Software', href: '/kembit/test-software' },
      { name: '- Doet Verbetervoorstellen', href: '/kembit/doet-verbetervoorstellen' },
      { name: '- Voert Overleg', href: '/kembit/voert-overleg' },
      { name: '- Presenteren', href: '/kembit/presenteren' },
      { name: '- Reflectie', href: '/kembit/reflectie' },
    ],
  },
  {
    name: 'SmartHub',
    href: '/smarthub',
    subItems: [
      { name: '- Eisen en Wensen', href: '/smarthub/eisen-en-wensen' },
      { name: '- Ontwerpt Software', href: '/smarthub/ontwerpt-software' },
      { name: '- Voert Overleg', href: '/smarthub/voert-overleg' },
      { name: '- Presenteren', href: '/smarthub/presenteren' },
      { name: '- Reflectie', href: '/smarthub/reflectie' },
    ],
  },
  {
    name: 'Mees',
    href: '/mees',
    subItems: [
      { name: '- Eisen en Wensen', href: '/mees/eisen-en-wensen' },
      { name: '- Ontwerpt Software', href: '/mees/ontwerpt-software' },
      { name: '- Voert Overleg', href: '/mees/voert-overleg' },
      { name: '- Presenteren', href: '/mees/presenteren' },
      { name: '- Reflectie', href: '/mees/reflectie' },
    ],
  },
  {
    name: 'Security Chief',
    href: '/security-chief',
    subItems: [
      { name: '- Eisen en Wensen', href: '/security-chief/eisen-en-wensen' },
      { name: '- Ontwerpt Software', href: '/security-chief/ontwerpt-software' },
      { name: '- Reflectie', href: '/security-chief/reflectie' },
    ],
  },
  {
    name: 'Extra Project',
    href: '/extra-project',
    subItems: [
      { name: 'Eisen en Wensen', href: '/extra-project/eisen-en-wensen' },
      { name: 'Ontwerpt Software', href: '/extra-project/ontwerpt-software' },
      { name: 'Realiseert Software', href: '/extra-project/realiseert-software' },
      { name: 'Test Software', href: '/extra-project/test-software' },
      { name: 'Doet Verbetervoorstellen', href: '/extra-project/doet-verbetervoorstellen' },
      { name: 'Reflectie', href: '/extra-project/reflectie' },
    ],
  },
  {
    name: 'Kerntaak 1',
    href: '/kerntaak1',
    subItems: [], // Voeg hier subpagina's toe als dat nodig is
  },
  {
    name: 'Kerntaak 2',
    href: '/kerntaak2',
    subItems: [], // Voeg hier subpagina's toe als dat nodig is
  },
  {
    name: 'About',
    href: '/about',
    subItems: [],
  },
];

export default function SideBarLeft() {
  const [openItems, setOpenItems] = useState({});
  const router = useRouter();

  const toggleItem = (item) => {
    const currentItem = menuItems.find((menuItem) => menuItem.name === item);
    const hasSubItems = currentItem.subItems.length > 0;

    setOpenItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));

    if (!hasSubItems) {
      router.push(currentItem.href);
    } else if (!openItems[item]) {
      router.push(currentItem.href);
    }
  };

  return (
    <nav className="mt-16 space-y-0.5 space-mono-bold h-screen flex flex-col text-white w-64 p-4">
      {menuItems.map((item) => (
        <div key={item.name}>
          <button
            onClick={() => toggleItem(item.name)}
            className="flex items-center transition-all hover:text-neutral-300"
          >
            {item.name}
            {item.subItems.length > 0 && (
              <span className="ml-1">
                {openItems[item.name] ? <ArrowDownIcon /> : <ArrowRightIcon />}
              </span>
            )}
          </button>
          {openItems[item.name] && item.subItems.length > 0 && (
            <div className="ml-4 mt-1 mb-1 space-y-0.5 space-mono-regular">
              {item.subItems.map((subItem, index) => (
                <div key={subItem.name}>
                  <Link href={subItem.href} className="text-md transition-all hover:text-gray-300">
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
