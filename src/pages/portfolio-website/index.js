import React from 'react';
import Link from 'next/link' 

const projectPortfolioWebsite = () => {
  return (
    <section className="">

      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Project Portfolio Website
      </h1>
      <p className="mb-4">
        {`Een project dat ik mijzelf als opdracht heb gegeven, om als verzamelplaats te gebruiken voor al mijn
        benodigde werk wat ik moet laten zien bij mijn eindexamen. Ik stond er op om een eigen website te
        programmeren en niet gebruik te maken van Gitbook. Programmeertalen en technieken die zijn 
        gebruikt voor dit project zijn React, NextJS, JavaScript en Tailwind CSS voor de styling. Lees
        mijn ontwerpen waarom hiervoor en meer is gekozen.`}
      </p>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="projectgroep" className="text-2xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Projectgroep</a>
        </h2>
        <p className="mb-4">
          Projectgroep? Dit was een solo project! 
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Wie? Youri.</li>
          <li>Wat? Alle taken binnen dit project. Van het ontwerpen en documenteren tot de ontwikkeling en het testen van deze website.</li>
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