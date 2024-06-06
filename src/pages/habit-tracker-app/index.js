import React from 'react';
import Link from 'next/link' 

const projectPortfolioWebsite = () => {
  return (
    <section className="">

      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Habit Tracker App
      </h1>
      <p className="mb-4">
        {`Dit project betreft de ontwikkeling van een Habit Tracker app met Flutter, gericht op het
         bijhouden van dagelijkse gewoonten. De app biedt functionaliteiten zoals het aanmaken, 
         bijwerken, afvinken en verwijderen van gewoonten, evenals een visuele heatmap die de voortgang
          toont. Data wordt veilig opgeslagen en blijft behouden bij het sluiten en heropenen van de app.
           Programmeertalen en technieken die zijn gebruikt voor dit project zijn Flutter, Dart en 
           de Hive Database. Dit project wordt op dit moment vooral gebruikt voor het testen 
           van een applicatie als doeleinden, bij de realisatie heb ik een tiental User Stories 
           gemaakt die hier terug te vinden zullen zijn.`}
      </p>
      <p className="mb-4">
          Bekijk hier de <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/Ealgg5_KeCxLv5I77NK8yFoB-3xRoHKha5VTzz4ov1Bzeg?e=yZKjnh" className="inline-button">User Stories</Link> die gebruikt zijn bij realisatie van dit project.
      </p>
      <img src="\images\userstorieshabitapp.png" alt="Vercel" className="rounded mb-4" />

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="projectgroep" className="text-2xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Projectgroep</a>
        </h2>
        <p className="mb-4">
          Dit was een solo project! 
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Wie? Youri.</li>
          <li>Wat? Alle taken binnen dit project. Van het opzetten van User Stories tot de ontwikkeling en het testen van deze website.</li>
        </ul>
      </div>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="werkwijze" className="text-2xl space-mono-bold mb-4">
          <a href="#werkwijze" className="anchor">Werkwijze</a>
        </h2>
        <p className="mb-4">
          Om dit project te realiseren is er gewerkt in de Scrum-Methode in combinatie met een Kanban
          Bord binnen de Github Projects applicatie. Dit om een zo vlot en overzichtelijk mogelijke 
          realisatie neer te zetten, en om de voortgang hierbij te bewaken. Hierbij is gewerkt met User Stories. 
        </p>
        <img src="\images\userstoriesportfolioproject.png" alt="Vercel" className="rounded mb-4" />
      </div>
    </section>
  );
};

export default projectPortfolioWebsite;