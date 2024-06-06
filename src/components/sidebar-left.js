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
      //{ name: '- Test Software', href: '/kembit/test-software' },
      //{ name: '- Doet Verbetervoorstellen', href: '/kembit/doet-verbetervoorstellen' },
      { name: '- Voert Overleg', href: '/kembit/voert-overleg' },
      { name: '- Presenteren', href: '/kembit/presenteren' },
      //{ name: '- Reflectie', href: '/kembit/reflectie' },
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
      //{ name: '- Reflectie', href: '/smarthub/reflectie' },
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
  // {
  //   name: 'Security Chief',
  //   href: '/security-chief',
  //   subItems: [
  //     { name: '- Eisen en Wensen', href: '/security-chief/eisen-en-wensen' },
  //     { name: '- Ontwerpt Software', href: '/security-chief/ontwerpt-software' },
  //     { name: '- Reflectie', href: '/security-chief/reflectie' },
  //   ],
  // },
  {
    name: 'Habit Tracker App',
    href: '/habit-tracker-app',
    subItems: [
      //{ name: '- Eisen en Wensen', href: '/extra-project/eisen-en-wensen' },
      //{ name: '- Ontwerpt Software', href: '/extra-project/ontwerpt-software' },
      //{ name: '- Realiseert Software', href: '/habit-tracker-appp/realiseert-software' },
      { name: '- Test Software', href: '/habit-tracker-app/test-software' },
      { name: '- Doet Verbetervoorstellen', href: '/habit-tracker-app/doet-verbetervoorstellen' },
      //{ name: '- Reflectie', href: '/extra-project/reflectie' },
    ],
  },
  // {
  //   name: 'Kerntaak 1',
  //   href: '/kerntaak1',
  //   subItems: [], // Voeg hier subpagina's toe als dat nodig is
  // },
  // {
  //   name: 'Kerntaak 2',
  //   href: '/kerntaak2',
  //   subItems: [], // Voeg hier subpagina's toe als dat nodig is
  // },
  {
    name: 'About',
    href: '/about',
    subItems: [],
  },
];

export default function SideBarLeft() {
  const [openItems, setOpenItems] = useState({}); // State om bij te houden welke menu-items geopend zijn
  const router = useRouter(); // Router hook voor navigatie

  // Functie om een menu-item te openen of te sluiten
  const toggleItem = (item) => {
    // Zoek het huidige menu-item op basis van de naam
    const currentItem = menuItems.find((menuItem) => menuItem.name === item);
    // Controleer of het huidige item subitems heeft
    const hasSubItems = currentItem.subItems.length > 0;

    // Toggle de open/gesloten status van het huidige item in de state
    setOpenItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));

    // Als het item geen subitems heeft, navigeer er direct naar toe
    if (!hasSubItems) {
      router.push(currentItem.href);
    // Als het item subitems heeft en het item nog niet geopend is, navigeer er naar toe
    } else if (!openItems[item]) {
      router.push(currentItem.href);
    }
  };

  return (
    <nav className="mt-16 space-y-0.5 space-mono-bold h-screen flex flex-col text-white w-64 p-4">
      {/* Itereer over de menu-items en render elk item */}
      {menuItems.map((item) => (
        <div key={item.name}>
          {/* Hoofdmenu item */}
          <button
            onClick={() => toggleItem(item.name)}
            className="flex items-center transition-all hover:text-neutral-300"
          >
            {/* Weergave van de naam van het menu-item */}
            {item.name}
            {/* Toon een pijl als het item subitems heeft */}
            {item.subItems.length > 0 && (
              <span className="ml-1">
                {/* Toon de juiste pijl afhankelijk van of het item open of gesloten is */}
                {openItems[item.name] ? <ArrowDownIcon /> : <ArrowRightIcon />}
              </span>
            )}
          </button>
          {/* Render de subitems als het hoofdmenu-item geopend is en subitems heeft */}
          {openItems[item.name] && item.subItems.length > 0 && (
            <div className="ml-4 mt-1 mb-1 space-y-0.5 space-mono-regular">
              {/* Itereer over de subitems en render elk subitem */}
              {item.subItems.map((subItem, index) => (
                <div key={subItem.name}>
                  {/* Link naar de subitem pagina */}
                  <Link href={subItem.href} className="text-md transition-all hover:text-gray-300">
                    {subItem.name}
                  </Link>
                  {/* Voeg een regelbreuk toe tussen de subitems, behalve na de laatste */}
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
