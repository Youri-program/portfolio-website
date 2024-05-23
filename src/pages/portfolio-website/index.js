import React from 'react';
import Link from 'next/link' 

const projectPortfolioWebsite = () => {
  return (
    <section className="">

      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Project Portfolio Website
      </h1>
      <p className="mb-4">
        {`Dit project heb ik mijzelf de opdracht gegeven. Om als verzamelplaats te gebruiken voor al mijn
        benodigde werk wat ik moet laten zien bij mijn eindexamen. Ik stond er op om een eigen website te
        programmeren en niet gebruik te maken van Gitbook.`}
      </p>
      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="my-work" className="text-2xl space-mono-bold mb-4">
          <a href="#my-work" className="anchor">Projectgroep</a>
        </h2>
        <p className="mb-4">
          Projectgroep? Dit was een solo project! 
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Wie? Youri.</li>
          <li>Wat? Alle taken binnen dit project.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 id="vercel" className="text-2xl space-mono-bold mb-4">
          <a href="#vercel" className="anchor">Werkwijze</a>
        </h2>
        <p className="mb-4">
          Om dit project te realiseren is er gewerkt in de Scrum-Methode in combinatie met een Kanban
          Bord binnen de Github Projects applicatie. Dit om een zo vlot en overzichtelijk mogelijke 
          realisatie neer te zetten. Hierbij is gewerkt met User Stories. 
        </p>
        <img src="\images\schets-navigatiestructuur.jpeg" alt="Vercel" className="rounded mb-4" />
      </div>
    </section>
  );
};

export default projectPortfolioWebsite;