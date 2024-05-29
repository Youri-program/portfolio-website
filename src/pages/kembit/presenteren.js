import React from 'react';
import Link from 'next/link' 

const presenteren = () => {
  return (
    <section className="">

      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Presenteren
      </h1>
      <p className="mb-4">
        {`Aan het einde van mijn stageperiode heb ik een eindpresentatie moeten houden. Hierbij 
        heb ik aan mijn stagebegeleider Mike Wijnen en stagedocent (mentor) Erika Vallinga
        moet vertellen hoe ik mijn stage heb ondervonden, wat ik geleerd heb, welke producten en
        functionaliteiten ik geleverd heb etc. Maar het was ook een handig moment om voor het laatst
        nog enige vragen en feedback te krijgen, om mee te nemen in de toekomst.`}
      </p>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="projectgroep" className="text-2xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Presenteren van het opgevelerde werk</a>
        </h2>
        <p className="mb-4">
          Deze presentatie is helaas niet opgenomen. Wel voeg ik hierbij de gehele Powerpoint van de Eindpresentatie.
        </p>
        <p className="mb-4">
          Bekijk hier mijn <Link href="https://eduofficenl-my.sharepoint.com/:p:/g/personal/501077_vistacollege_nl/EXWVDUe3D3lCudeF2yAZoAMBdVAe042W139vaDOy8Ue2Bg?e=khmwDL" className="inline-button">Eindpresentatie</Link> in PowerPoint, als u de presentatie kunt presenteren kunt u ook de bijhorende animaties zien.
          Anders kunt u ook de <Link href="https://eduofficenl-my.sharepoint.com/:b:/g/personal/501077_vistacollege_nl/EUzHPvuCBkhAlwdJDt3D5_wBgLooQ2pMerpCg2sG9_tWXg?e=QH4YKI" className="inline-button">Eindpresentatie in PDF</Link> bekijken.
        </p>
        <hr className="my-8" />
        <p className="mb-4">
          Om duidelijk te maken wat ik nu heb vertelt in deze presentatie (omdat hier geen opname van ligt), heb 
          ik een uitgebreid verslag gemaakt over de presentatie inhoud, mijn gebruikte presentatie-technieken
          en enige vragen en feedback waarop ik heb gereageerd. 
        </p>
        <p className="mb-4">
          Bekijk hier mijn <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/EWEJiW0O5JlGnV2koLaI7SIB6WBLHJQ0WM8jeUJTVuRBcQ?e=earpd9" className="inline-button">verslag.</Link>
        </p>

        <hr className="my-8" />

        <h2 id="projectgroep" className="text-2xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Feedback op verslag</a>
        </h2>
        <p className="mb-4">
          Na het maken van dit verslag heb ik deze doorgestuurd naar een bijzittende van de fysieke presentatie,
          om te bewijzen dat dit ook daadwerkelijk zo is gegaan. Hierbij de feedback van mevrouw Vallinga!
        </p>
        <img src="\images\feedbackpresentatiekembit.png" alt="Vercel" className="rounded mb-4" />
      </div>
    </section>
  );
};
export default presenteren;