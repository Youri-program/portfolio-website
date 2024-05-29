import React from 'react';
import Link from 'next/link' 

const kembit = () => {
  return (
    <section className="">

      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Kembit Stage
      </h1>
      <p className="mb-4">
        {`Tijdens mijn stageperiode in 2022-2023 ben ik al bezig geweest met het vullen van mijn examen. 
        In dit jaar heb ik stage gelopen bij Kembit. In deze stage heb ik samen met mijn medestaigers
        Bram Hendriks en Rick Veltrop aan een grote opdracht gewerkt. Dit was een Monitoring Applicatie, 
        waarmee je errors in een applicatie kunt opvangen en uiteindelijk kunt versturen via 
        verschillende media platformen; denk aan Slack en Teams. Ik heb research gedaan naar wat de beste 
        manieren zijn om errors op te vangen binnen React en .NET Framework omgeving. Daarnaast heb ik ook
        een applicatie geschreven die deze errors daadwerkelijk opvangt en verstuurd naar de Collector API.
        Hierbij heb ik voornamelijk gewerkt in C# (.NET) en JavaScript (React).`}
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
          <li>Youri: Research Error Catching .NET, Research Error Catching React, Conceptueel Denken, Monitor Client (versturen van errors naar de API), Seeding Scripts; het vullen van database tabellen met dummy data.</li>
          <li>Bram</li>
          <li>Rick</li>
        </ul>
      </div>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="werkwijze" className="text-2xl space-mono-bold mb-4">
          <a href="#werkwijze" className="anchor">Werkwijze</a>
        </h2>
        <p className="mb-4">
          Om dit project te realiseren is er gewerkt in de Scrum-Methode in combinatie met de Azure DevOps
          omgeving, deze omgeving is zo opgezet om de gehele SDLC uit te voeren. Dit om een zo vlot en overzichtelijk mogelijke 
          realisatie neer te zetten, en om de voortgang hierbij te bewaken. Hierbij is gewerkt met User Stories. 
        </p>
        <img src="\images\AzureUserStoriesBoard.png" alt="Vercel" className="rounded mb-4" />
      </div>
    </section>
  );
};

export default kembit;