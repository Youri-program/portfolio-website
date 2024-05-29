import React from 'react';
import Link from 'next/link' 

const ontwerptSoftware = () => {
  return (
    <section className="">
      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Ontwerpt Software
      </h1>

      <p className="mb-4">
        {`Nu dat alle eisen en wensen duidelijk zijn vastgelegd zijn wij begonnen aan het ontwerpen van de 
          applicatie. Hier vind je bijvoorbeeld ook relevante schematechnieken in terug en waarom deze
          worden gemaakt, het design en wordt er rekening houden met belangrijke aspecten zoals privacy 
          en security.`}
      </p>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="behoefte-analyse" className="text-2xl space-mono-bold mb-4">
          <a href="#behoefte-analyse" className="anchor">Klantengesprek #2 over Ontwerp Eisen</a>
        </h2>
        <p className="mb-4">
          Om te zorgen dat alle design/ontwerp eisen van de klant duidelijk worden geimplementeerd
          hebben wij een tweede klantengesprek gehad hierover. Zo weten wij zeker dat we op dezelfde
          lijn zitten met de klant. Hiervoor heb ik gebruik gemaakt van LSD (Luisteren, Samenvatten, Doorvragen).
        </p>
        <img src="\images\gesprek2klantsmarthub.png" alt="Vercel" className="rounded mb-4" />       
        <p className="mb-4">
          Bekijk hier de <Link href="https://eduofficenl-my.sharepoint.com/:u:/g/personal/501077_vistacollege_nl/Eb-2dHxJoUJNtc3OohBRObABFsrW7SnKf00qFUSAQwrWkA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=vuxr0c" className="inline-button">opname</Link> van dit gesprek.
        </p>
      </div>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="behoefte-analyse" className="text-2xl space-mono-bold mb-4">
          <a href="#behoefte-analyse" className="anchor">Functioneel Ontwerp</a>
        </h2>
        <p className="mb-4">
          Het Functioneel Ontwerp is ontstaan uit ons tweede klantengesprek. Dit is een behoorlijk 
          groot document geworden. Ik heb als eerste de samenvatting gemaakt over het gehele ontwerp, 
          dit moet de doorslag kunnen geven om verder te gaan met het project voor de eventuele 
          projectmanager. Daarnaast heb ik alle Use-Case Diagrammen gemaakt voor elk bestaande rol, deze staan op chronologische 
          volgorde om te beginnen bij Administrator met de meeste rechten en als laatste een Lezer, met 
          de minste rechten. Hierbeneden in het ontwerp kun je mijn deel vinden!
        </p>
        <img src="\images\Admin Use Case Diagram Project Smarthub.png" alt="Vercel" className="rounded mb-4" />       
        <img src="\images\Hoofdredacteur Use Case Diagram Project Smarthub.png" alt="Vercel" className="rounded mb-4" />       
        <p className="mb-4">
          Bekijk het <Link href="https://eduofficenl-my.sharepoint.com/:b:/g/personal/501077_vistacollege_nl/EVZNDVsTH2RAoHAd7U3X-cYBu0vv5KYexGcVOCIiq7d8KQ?e=z6Bb7k" className="inline-button">Functioneel Ontwerp</Link> hier.
        </p>
      </div>

      <div className="mb-8">
      <h2 id="programma-van-eisen" className="text-2xl space-mono-bold mb-4">
          <a href="#programma-van-eisen" className="anchor">Feedback van de Klant</a>
        </h2>
        <p className="mb-4">
          Na versturen van het FO (samen met het Plan van Aanpak) ter bevestiging hebben wij feedback gekregen van de klant, de feedback die betrekking had op mijn gedeelte heb ik 
          meteen verwerkt in een nieuwe versie van het FO. Dit was alleen feedback met betrekking tot enkele rollen binnen de Use-Case Diagrammen.
        </p>
        <img src="\images\feedbackfosmarthub.png" alt="Vercel" className="rounded mb-4" />       
        <p className="mb-4">
          Bekijk de tweede versie van het <Link href=" " className="inline-button">Functioneel Ontwerp</Link> hier.
        </p>
      </div>

      <hr className="my-8" />

      <div className="mb-8">
      <h2 id="plan-van-aanpak" className="text-2xl space-mono-bold mb-4">
          <a href="#plan-van-aanpak" className="anchor">Technisch Ontwerp</a>
        </h2>
        <p className="mb-4">
        Na het Functioneel Ontwerp zijn wij overgegaan om deze functionaliteiten te vertalen naar Technisch
        haalbare aspecten. Binnen dit Technisch Ontwerp heb ik mij bezig gehouden naar het maken van interfaces
        voor elk social media platform, binnen de must-have eisen. Voordat ik deze Interfaces kon maken moest
        ik eerst uitgebreid research doen naar de API's van deze platformen, om vragen te beantwoorden, 
        Hoe roep ik de API aan? Hoe communiceer ik met de API? Ook heb ik mij samen met Bram, Milan en Daan  
        bezig gehouden met een draft voor het Database Design, een ERD en de bijhorende database dictionary.
        </p>
        <img src="\images\researchapismarthub.png" alt="Vercel" className="rounded mb-4" />       
        <p className="mb-4">
        Dit Technische Ontwerp is nog niet 'helemaal' af. Na feedback tijdens de eindpresentatie
        moeten wij als team een aantal kleine dingen rechtrekken. Hieronder vind je de eerste versie zoals
        hij nu staat. Wanneer alle feedback geimplementeerd is binnen het team, zal er een tweede versie
        gemaakt worden. Deze feedback vind je ook terug in het verslag van de Eindpresentatie!
        </p>
        <p className="mb-4">
          Bekijk het <Link href="https://eduofficenl-my.sharepoint.com/:b:/g/personal/501077_vistacollege_nl/EZPKyai695hEouBrTinnokQB-hztdaLhFtbBhQTCbb5h8Q?e=bDBy5K" className="inline-button">Technisch Ontwerp</Link> hier.
        </p>
      </div>
    </section>
  );
};
export default ontwerptSoftware;