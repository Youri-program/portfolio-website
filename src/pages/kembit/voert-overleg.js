import React from 'react';
import Link from 'next/link' 

const voertOverleg = () => {
  return (
    <section className="">

      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Voert Overleg
      </h1>
      <p className="mb-4">
        {`Tijdens onze stage hebben we meermaals stand-ups en overleg momenten gehad. We hebben bijvoorbeeld 
        ook 'conceptueel' moeten nadenken over een gehele 'nieuwe' sectie van het project waar nog geen ontwerp
        voor lag.`}
      </p>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="projectgroep" className="text-2xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Conceptueel Denken</a>
        </h2>
        <p className="mb-4">
          Samen met mijn stagegenoten Bram en Rick hebben wij een geheel nieuw concept moeten bedenken voor de 
          Alerter-Module. Dit was het onderdeel dat een Alert zal moeten versturen naar de desbetreffende belanghebbende 
          personen en media platformen. Een gebruiker moet dit zelf kunnen configureren. Tijdens dit overleg
          zijn er veel mogelijke werkende concepten naar voren gekomen, hierbij hebben wij veel uitgetekend
          op het whiteboard.
        </p>
        <img src="\images\overlegkembit.jpg" alt="Vercel" className="rounded mb-4" />
        <img src="\images\overlegbordkembit.jpg" alt="Vercel" className="rounded mb-4" />
        <img src="\images\overlegbordkembit2.jpg" alt="Vercel" className="rounded mb-4" />
        <p className="mb-4">
          Tijdens het conceptueel denken hebben wij de voortgang elke dag, via een stand-up, afgestemd met elkaar
          en onze stagebegeleider. Om elkaar op te hoogte te houden waar wij inmiddels staan. Hier wordt eventuele
          voortgang maar ook knelpunten afgestemd. 
        </p>
        <p className="mb-4">
          Uiteindelijk zijn we op 2 concepten gekomen die we zouden kunnen uittesten en 
          wellicht dit probleem zou kunnen oplossen. We hebben afgesproken dat we vanuit hier 
          deze concepten zullen uitproberen. In mijn geval was dit de Regex methode uitproberen en een demo
          voor maken.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>De Levenshtein-afstands berekening uitproberen, kijk of deze het probleem op lost en handig in gebruik is.</li>
          <li>Onderzoek doen naar Regex, maak hier kleine testapplicaties van en ondervind of dit te gebruiken is.</li>
        </ul>

        <hr className="my-8" />

        <p className="mb-4">
          Bekijk hier een opname van ons <Link href="https://eduofficenl-my.sharepoint.com/:v:/g/personal/501077_vistacollege_nl/EdgU1hD0_d5Ptl5FkWmDEgMBJ-3fSDDulAT7jmnkx0uCFA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=tf8NCt" className="inline-button">overleg moment</Link>, hier zijn we druk aan het brainstormen om tot een conclusie te komen. Met welke onderdelen gaan we verder? En welke afspraken gaan we maken?
          Deze opname is een timelapse, zonder geluid.
        </p>
        <p className="mb-4">
          Natuurlijk heb ik mij ook aan de gemaakte afspraken gehouden. Hieronder vind je afbeeldingen van de Regex
          Demo code die ik geschreven heb. Hiervoor heb ik C# gebruikt. Deze demo hebben we later weer besproken
          met onze stagebegeleider, de uitkomst en feedback bleek positief te zijn.
        </p>
        <img src="\images\regexdemokembit.png" alt="Vercel" className="rounded mb-4" />
      </div>
    </section>
  );
};
export default voertOverleg;