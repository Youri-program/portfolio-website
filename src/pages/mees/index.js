import React from 'react';
import Link from 'next/link' 

const mees = () => {
  return (
    <section className="">

    <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
      Mees Project
    </h1>
    <p className="mb-4">
      {`Aan het begin van mijn eindexamenjaar tijdens mijn opleiding Software Development ben ik het
       Mees project begonnen samen in een team met Declan, Roy, Jordy, Jaabir en mijzelf natuurlijk.
       Onze klant hierbij was mevrouw Eva Wagemans. 
       De opdracht was om een informatieve website te realiseren, je kunt het zien als een soort online 
       menu kaart voor de Mees Catering op het Vista College. De Mees Catering zat namelijk met het 
       probleem dat er steeds lange drukke rijen ontstonden in de kantine tijdens pauzes, dit kwam 
       echter omdat mensen ter plekke een keuze moesten maken wat voor veel oponthoud zorgden. Als 
       aanpak en dus oplossing voor dit probleem hebben wij als team een online menukaart op een 
       informatieve website gerealiseerd. Hiernaast hebben wij een QR-functie toegevoegd die fysiek 
       te vinden zijn bij de Mees Catering, scan de code en je wordt gelinked naar de mees website. 
       Hier kunnen klanten een overzicht krijgen van alle producten, en dus van te voren uitkiezen 
       wat men wilt bestellen bij de fysieke winkel. 
       Hierbij heb ik gewerkt in WordPress in combinatie met de Elementor Plugin om content
       toe te voegen.`}
    </p>
    <p className="mb-4">
        Bezoek de <Link href="http://mees.jordymerens.nl/" className="inline-button">MEES Website</Link> hier!
    </p>
    
    <hr className="my-8" />

    <div className="mb-8">
      <h2 id="projectgroep" className="text-2xl space-mono-bold mb-4">
        <a href="#projectgroep" className="anchor">Projectgroep</a>
      </h2>
      <p className="mb-4">
        Wie en Wat deed ik?
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Youri: Klantencontact/gesprek, maken van een Planning, Voortgang bewaken, Ontwikkelomgeving opzetten,
        Technisch Ontwerp, Ontwikkeling van de Dranken page en het Product opleveren en Presenteren.
        </li>
        <li>Declan: Voeren van het eerste klantengesprek samen met mij, Wireframes, Behoefteanalyse,
          Ontwikkeling van de Home-pagina.</li>
        <li>Roy: Mock-ups, Het maken van de QR-codes, Ontwikkeling van de Overig- en Fruit-pagina.</li>
        <li>Jordy: Voeren van het tweede klantengesprek, Hosting omgeving, Ontwikkeling van Snacks-,
          broodjes-pages, navbar buttons.
        </li>
        <li>Jaabir: Programma van Eisen, Planning, Ontwikkeling van Soep-, salades-, gebak-pages, Voedingswaarde
          animatie, Voeren van het tweede klantengesprek.
        </li>
      </ul>
    </div>

    <hr className="my-8" />

    <div className="mb-8">
      <h2 id="werkwijze" className="text-2xl space-mono-bold mb-4">
        <a href="#werkwijze" className="anchor">Werkwijze</a>
      </h2>
      <p className="mb-4">
        Om dit project te realiseren is er gewerkt in de Scrum-Methode in combinatie met een Trello
        omgeving, deze omgeving is opgezet in een volledig Kanban bord waar alle User Stories in terug te 
        vinden zijn. Dit om een zo vlot en overzichtelijk mogelijke
        realisatie neer te zetten, en om de voortgang hierbij te bewaken. Hierbij is gewerkt met User Stories. 
      </p>
      <img src="\images\trellomeesproject.png" alt="Vercel" className="rounded mb-4" />
    </div>
  </section>
  );
};

export default mees;