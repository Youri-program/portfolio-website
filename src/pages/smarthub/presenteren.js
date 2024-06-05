import React from 'react';
import Link from 'next/link' 

const presenteren = () => {
  return (
    <section className="">

      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Presenteren
      </h1>
      <p className="mb-4">
        {`Om ons opgeleverde werk op te leveren heb ik/wij een (eind/tussentijdse)presentatie gehouden. Dit was
        in het bijzijn van onze klant S.Fritschy en onze 'bemiddelaar' R.Limpens. Hierbij heb ik aan het
        publiek uitgelegd over mijn opgezette documentatie stukken, en verteld waarom bepaalde keuzes 
        zijn gemaakt. Ook heb ik hier enkele specifieke presenatatietechnieken voor gebruikt om de 
        boodschap zo helder en duidelijk mogelijk over te brengen.
        Daarnaast was dit ook een handig moment om nog enige vragen en feedback te krijgen, om mee te nemen in de toekomst.`}
      </p>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="projectgroep" className="text-2xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Presenteren van het opgevelerde werk</a>
        </h2>
        <p className="mb-4">
          Deze presentatie is gelukkig volledig opgenomen.
        </p>
        <p className="mb-4">
          Bekijk hier de <Link href="https://eduofficenl-my.sharepoint.com/:v:/g/personal/501077_vistacollege_nl/ETbTBPBQWgxBgTjFIgRvLPcBnk9Sr7xAkAJUkHN6WWOffg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=RaCvDe" className="inline-button">opname</Link> van de gehele presentatie.
        </p>
        <hr className="my-8" />
        <p className="mb-4">
          Om duidelijk te maken wat ik nu heb vertelt in deze presentatie, heb 
          ik een uitgebreid verslag gemaakt over de presentatie inhoud, mijn gebruikte presentatie-technieken
          en enige vragen en feedback waarop ik heb gereageerd. 
        </p>
        <p className="mb-4">
          Bekijk hier mijn <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/EX2sXZLAzD1JnzhCuSGIlMgBKzQQ0dIyQlm7imFDZQCOqw?e=d5qhIk" className="inline-button">verslag.</Link>
        </p>

        <hr className="my-8" />

        <h2 id="projectgroep" className="text-2xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Feedback op verslag</a>
        </h2>
        <p className="mb-4">
          Omdat ik ter plekke feedback had ontvangen en hier een verslag over had gemaakt, was het niet
          meer nodig om hierover nog eens feedback te vragen. Uiteindelijk was de boodschap uit deze 
          feedback duidelijk voor iedereen en mij.
        </p>
      </div>
    </section>
  );
};
export default presenteren;