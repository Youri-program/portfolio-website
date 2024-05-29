import React from 'react';
import Link from 'next/link' 

const smartHub = () => {
  return (
    <section className="">

      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Smarthub
      </h1>
      <p className="mb-4">
        {`Begin 2024 was ik onderdeel van het projectteam ‘Smarthub’ en hebben wij samen de opdracht 
        aangenomen om een Multi Media CMS te maken. Dit voor de heer S.Fritschy als onze klant met 
        daarbij meneer Limpens als onze bemiddelaar. Het team bestaat uit 5 man in totaal. Binnen de 
        werkingsperiode van dit project hebben wij ons vooral bezig gehouden met het ontwerpen van het 
        product, het doen van onderzoek en daarbij het schrijven van documentatie. Dit heeft veel tijd 
        in beslag genomen. Omdat het einde van onze opleiding in zicht is en de examens om de hoek liggen 
        hebben wij dus deze realisatie van de documentatiefase op het einde gepresenteerd. Later verloop 
        en realisatie van het uiteindelijke product zal overgenomen worden door een andere groep software 
        developers, waarbij 1 iemand op het einde ons heeft geholpen, voornamelijk om het product, de 
        gemaakte ontwerpen en de omvang hiervan mee te nemen en te vervolgen. `}
      </p>
      
      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="projectgroep" className="text-2xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Projectgroep</a>
        </h2>
        <p className="mb-4">
          Wie en Wat deed ik?
        </p>
        <p className="mb-4">
          Documentatie deden wij voornamelijk als team samen, zo kreeg ieder zijn eigen sectie per document. 
          Echter waren deze documenten veel werk, dus hadden wij geluk dat we met een team van 5 personen waren.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Youri: Front-end en Back-end</li>
          <li>Bram: Back-end en Integratie</li>
          <li>Milan: Back-end</li>
          <li>Tomi: Front-end</li>
          <li>Daan: Later is voor toekomstige overname van het project Daan erbij gekomen. Hij hielt zich vooral bezig met Front-end en Integratie.</li>
        </ul>
      </div>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="werkwijze" className="text-2xl space-mono-bold mb-4">
          <a href="#werkwijze" className="anchor">Werkwijze</a>
        </h2>
        <p className="mb-4">
          Om dit project en documentatie te realiseren is er gewerkt in de Scrum-Methode. Hierbij hebben wij Stand-up meetings
          gehouden om onze voortgang niet uit het oog te verliezen. Omdat wij voornamelijk in de documentatiefase
          hebben gewerkt hebben wij nog geen omgeving opgezet met onze daadwerkelijk user stories.
          Duik verder in dit project om hier meer over te weten!
        </p>
      </div>
    </section>
  );
};

export default smartHub;