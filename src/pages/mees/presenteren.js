import React from 'react';
import Link from 'next/link';

const presenteren = () => {
  return (
    <section className="">

      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Presenteren
      </h1>
      <p className="mb-4">
        {`Toen het product volledig gerealiseerd was en de opdracht ten einde kwam heb ik het eindproduct
         opgeleverd aan de klant, in dit geval mevrouw Erika Vallinga doormiddel van een presentatie. `}
      </p>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="projectgroep" className="text-2xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Presenteren van het opgevelerde werk</a>
        </h2>
        <p className="mb-4">
          Deze presentatie is volledig opgenomen! Door technische redenen is de klant zelf helaas niet te horen,
          dus ontvangen reactie, vragen en feedback ook niet... Mijn eigen reactie hierop gelukkig wel. 
          Daarnaast heb ik omdat dit probleem zich onder andere voordeed een uitgebreid verslag/samenvatting geschreven
          die je hieronder kunt teurgvinden.
        </p>
        <p className="mb-4">
          Bekijk hier mijn <Link href="https://eduofficenl-my.sharepoint.com/:v:/g/personal/501077_vistacollege_nl/ETvRfoOSISpAv0a6Eerdi5IBr9dW1OhwBj6Qz0TbHIW1gA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=NZOYFN" className="inline-button">Eindpresentatie</Link> opname.
        </p>
        <hr className="my-8" />
        <p className="mb-4">
          Om duidelijk te maken wat ik nu heb vertelt in deze presentatie, heb 
          ik een uitgebreid verslag/samenvatting gemaakt over de presentatie inhoud, mijn gebruikte presentatie-technieken
          en enige vragen en feedback waarop ik heb gereageerd. 
        </p>
        <p className="mb-4">
          Bekijk hier mijn <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/ESmt4wKvXJ5IoIrevNWc1FsB0QrmFBIGFKZFpuaWVyt_Sw?e=WMS39M" className="inline-button">verslag/samenvatting.</Link>
        </p>

        <hr className="my-8" />

        <h2 id="projectgroep" className="text-2xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Feedback op verslag</a>
        </h2>
        <p className="mb-4">
          Na het maken van dit verslag heb ik deze doorgestuurd naar de bijzittende klant,
          om te bewijzen dat dit ook daadwerkelijk zo is gegaan. Hierbij de feedback van mevrouw Vallinga!
        </p>
        <img src="\images\feedbackpresentatiemees.png" alt="Vercel" className="rounded mb-4" />
        <h2 id="projectgroep" className="text-2xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Afsluitingsmail naar Klant</a>
        </h2>
        <p className="mb-4">
          Na de gegeven presentatie aan de klant was het project afgesloten, maar het was pas echt afgesloten
          doormiddel van een 'laatste' bedankmail, waarbij daarnaast de een bevestiging wordt gegeven 
          aan de klant dat hen nog een overdrachtsdocument zullen krijgen.
        </p>
        <img src="\images\reactieklantafsluitingmees.png" alt="Vercel" className="rounded mb-4" />
      </div>
    </section>
  );
};
export default presenteren;