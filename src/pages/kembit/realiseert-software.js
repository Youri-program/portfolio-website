import React from 'react';
import Link from 'next/link' 

const realiseertSoftware = () => {
  return (
    <section className="">
      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Realiseert Software
      </h1>

      <p className="mb-4">
        {`Tijdens mijn stage zijn we vrij snel begonnen aan het realiseren van het project.
        Wij kregen ieder onze user storie aangewezen en zijn zo begonnen.`}
      </p>

      <p className="mb-4">
        Alle User Stories en functionaliteiten die ik heb gerealiseerd in code kun je vinden in de link hieronder. 
        Bekijk de code op <Link href="https://github.com/Youri-program/stage-code-werk" className="inline-button">GitHub</Link> hier.
        Even op een rijtje aan welke onderdelen ik heb gewerkt en gerealiseerd: 
      </p>
      <ul className="list-disc list-inside mb-4">
          <li>Error Handling .NET, het opvangen van errors die optreden binnen .NET.</li>
          <li>Error Handling React, het opvangen van errors die optreden binnen React.</li>
          <li>Monitor Client, het opvangen van de errors, collecteren en versturen naar de Collector API.</li>
          <li>Events Feeder, het feeden van de events tabel met dummy data.</li>
          <li>Unit Tests voor de Monitor Client.</li>
        </ul>

      <hr className="my-8" /> {/* Horizontale lijn */}

      <div className="mb-8">
        <h2 id="functioneel-ontwerp" className="text-2xl space-mono-bold mb-4">
          <a href="#functioneel-ontwerp" className="anchor">User Stories en Versiebeheer</a>
        </h2>
        <p className="mb-4">
          Hier nog eens de user stories/functionaliteiten voor de duidelijkheid. Wij werkten samen in sprints
          van 2 werkweken. Elke sprint kregen wij weer onze eigen nieuwe user story toegewezen. Een user
          story bestond meestal weer uit een aantal taken, om zo de user story te realiseren. Wanneer wij 
          klaar waren met een user story verschoven wij deze op het kanban bord naar pending, om te wachten 
          op review van mijn stagebegeleider.
        </p>
        <img src="\images\AzureDevOpsBoard.png" alt="Vercel" className="rounded mb-4" />
        <img src="\images\AzureUserStoriesBoard.png" alt="Vercel" className="rounded mb-4" />
        <p className="mb-4">
          Om deze voortgang niet te verliezen heb ik gebruik gemaakt van GitKraken om mijn code te pushen en te committen,
          GitKraken is een ander alternatief voor GitHub, het idee is hetzelfde, je werkt tenslotte met Git.
        </p>
        <img src="\images\kembitcommits.png" alt="Vercel" className="rounded mb-4" />
      </div>

      <hr className="my-8" /> {/* Horizontale lijn */}

      {/* Sectie: Github en Code */}
      <div className="mb-8">
        <h2 id="technisch-ontwerp" className="text-2xl space-mono-bold mb-4">
          <a href="#technisch-ontwerp" className="anchor">Github en Code</a>
        </h2>

        {/* Link naar de code op Github */}
        <p className="mb-4">
          In de link hieronder vind je nogmaals de code van alle gerealiseerde functionaliteiten. Daarnaast heb ik aantal foto's toegevoegd van stukjes code.
        </p>
        <p className="mb-4">
          Bekijk de <Link href="https://github.com/Youri-program/stage-code-werk" className="inline-button">code op Github</Link> hier.
        </p>
        <img src="\images\dotnetcodekembit.png" alt="Vercel" className="rounded mb-4" />
        <img src="\images\dotnedcodekembit2.png" alt="Vercel" className="rounded mb-4" />
        <img src="\images\dotnetfeeder.png" alt="Vercel" className="rounded mb-4" />
        <img src="\images\dotnetfeeder2.png" alt="Vercel" className="rounded mb-4" />
        <img src="\images\dotnetfeeder3.png" alt="Vercel" className="rounded mb-4" />
        <img src="\images\monitorclientkembit.png" alt="Vercel" className="rounded mb-4" />
        <img src="\images\monitorclientkembit2.png" alt="Vercel" className="rounded mb-4" />
        <img src="\images\reacterrorhandler.png" alt="Vercel" className="rounded mb-4" />
      </div>
    </section>
  );
};
export default realiseertSoftware;