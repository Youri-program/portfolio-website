import React from 'react';
import Link from 'next/link'; // Importeer de Link component van Next.js

const realiseertSoftware = () => {
  return (
    <section className="">
      {/* Hoofdtitel */}
      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Realiseert Software
      </h1>

      {/* Inleiding paragraaf */}
      <p className="mb-4">
        {`Na al het ontwerpen zijn we aangekomen bij het realiseren van de website.`}
      </p>

      {/* Paragraaf met link naar het Technisch Ontwerp */}
      <p className="mb-4">
        Benieuwd welke tools, frameworks, programmeertalen en ontwikkelomgeving hiervoor zijn gebruikt? 
        Bekijk het <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/EVqaNTP1hq1Nkne9ZnSLVVoB1EyfkoOk9mlydaqdi4qHmQ?e=XAGD43" className="inline-button">Technisch Ontwerp</Link> nog eens voor een uitgebreide uitleg!
      </p>

      <hr className="my-8" /> {/* Horizontale lijn */}

      {/* Sectie: KanBan-bord */}
      <div className="mb-8">
        <h2 id="functioneel-ontwerp" className="text-2xl space-mono-bold mb-4">
          <a href="#functioneel-ontwerp" className="anchor">KanBan-bord</a>
        </h2>

        {/* Beschrijving van het KanBan-bord */}
        <p className="mb-4">
          Om te verifiëren dat er voldoende functionaliteiten werden gerealiseerd/opgeleverd en daarnaast voldoen aan de eisen en wensen heb ik gebruik gemaakt van een KanBan-bord.
          Hier staan alle functionaliteiten vertaald naar een user story en kan ik precies zien wat de stand van zaken is, welke is af?
          Waar ben ik op dit moment mee bezig? En welke moeten nog?
        </p>
        <p className="mb-4">
          Hierbij nog eens een afbeelding en link van de roadmap planning en kanban bord, hierin kun je zien dat er in de eerste week van 5-4 documentatie is afgerond,
          zoals ook was aangegeven in de eerste planning in het Plan van Aanpak. Dit geld ook voor de andere fases en dus gerealiseerde functionaliteiten.
        </p>
        
        {/* Links naar Github Projects en roadmap planning */}
        <p className="mb-4">
          Bekijk de <Link href="https://github.com/users/Youri-program/projects/5" className="inline-button">Github Projects</Link> omgeving hier, met daarbij als eerst het uitgewerkte KanBan-bord.
          En daarnaast de <Link href="https://github.com/users/Youri-program/projects/5/views/4" className="inline-button">roadmap planning.</Link>
        </p>

        {/* Afbeeldingen van user stories en roadmap */}
        <img src="/images/userstories1portfolio.png" alt="Vercel" className="rounded mb-4" />
        <img src="/images/userstoriesportfolioproject.png" alt="Vercel" className="rounded mb-4" />
        <img src="/images/userstories3portfolio.png" alt="Vercel" className="rounded mb-4" />
        <img src="/images/roadmap-portfolio-website.png" alt="Vercel" className="rounded mb-4" />
      </div>

      <hr className="my-8" /> {/* Horizontale lijn */}

      {/* Sectie: Github en Code */}
      <div className="mb-8">
        <h2 id="technisch-ontwerp" className="text-2xl space-mono-bold mb-4">
          <a href="#technisch-ontwerp" className="anchor">Github en Code</a>
        </h2>

        {/* Beschrijving van codekwaliteit en best practices */}
        <p className="mb-4">
          Om de kwaliteit van de code te waarborgen heb ik gebruik gemaakt van een aantal belangrijke coding concepten:
        </p>

        {/* Lijst van coding concepten */}
        <ul className="list-disc list-inside mb-4">
          <li>Leesbaarheid, onderhoudbaarheid en een duidelijke structuur. Ik heb gebruik gemaakt van goed georganiseerde code met logische benamingen en duidelijke indeling bijv. 
            het plaatsen van alle pages in 1 pages-map, binnen NextJS wordt dit ook wel de 'Pages Router' genoemd, zo heeft elke 'index/homepage'-page weer zijn eigen apparte pages, denk aan een voor Reflectie, Eisen en Wensen etc.
            Daarnaast heb ik veel gebruikte 'statische' componenten bij elkaar geplaatst; denk aan de header, footer, sidebar. Deze kan ik zo namelijk op elke pagina weer hergebruiken.</li>
          <li>Naleving van Best Practices. De modulaire opbouw maakt de code schaalbaar en eenvoudig aanpasbaar.
            En daarnaast het consistent volgen van de 'industrienormen' en dezelfde schrijfstijl gebruiken bij de naamgevingen van variabelen en functions.
            Dit maakt het gemakkelijker voor andere ontwikkelaars om te lezen en te begrijpen wat er is geschreven.  
          </li>
        </ul>

        {/* Link naar de code op Github */}
        <p className="mb-4">
          In de link hieronder vind je de code van de gehele website. Daarnaast heb ik aantal foto's toegevoegd van stukjes code en de mappenstructuur die ik wil highlighten.
        </p>
        <p className="mb-4">
          Bekijk de <Link href="https://github.com/Youri-program/portfolio-website" className="inline-button">code op Github</Link> hier.
        </p>

        {/* Afbeeldingen van user stories en roadmap */}
        <img src="\images\codemetcommentsportfolio.png" alt="Vercel" className="rounded mb-4" />
        <img src="\images\mappenstructuurportfolio.png" alt="Vercel" className="rounded mb-4" />
        <img src="\images\cssportfolio.png" alt="Vercel" className="rounded mb-4" />
        <img src="\images\sidebarcodeportfolio.png" alt="Vercel" className="rounded mb-4" />
      </div>

      <hr className="my-8" /> {/* Horizontale lijn */}

      {/* Sectie: Versiebeheer */}
      <div className="mb-8">
        <h2 id="technisch-ontwerp" className="text-2xl space-mono-bold mb-4">
          <a href="#technisch-ontwerp" className="anchor">Versiebeheer</a>
        </h2>
        
        {/* Beschrijving van versiebeheer */}
        <p className="mb-4">
          Er is gebruik gemaakt van Github om versiebeheer te waarborgen. Hieronder zie je een afbeelding
          van een deel van de commits en pushes om versies te creëren. Om commits en pushes uit te voeren
          gebruik ik de GitHub Desktop applicatie.
        </p>
        <img src="\images\versiebeheerportfolio.png" alt="Vercel" className="rounded mb-4" />
      </div>
    </section>
  );
};

export default realiseertSoftware; // Exporteer de component als de default export
