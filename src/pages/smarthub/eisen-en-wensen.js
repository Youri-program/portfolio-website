import React from 'react';
import Link from 'next/link' 

const eisenEnWensen = () => {
  return (
    <section className="">
      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Eisen en Wensen
      </h1>

      <p className="mb-4">
        {``}
      </p>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="behoefte-analyse" className="text-2xl space-mono-bold mb-4">
          <a href="#behoefte-analyse" className="anchor">Klantengesprek #1</a>
        </h2>
        <p className="mb-4">
          Wij hebben dit project een kickstart doormiddel van een gesprek aan te gaan met onze klant. Om 
          ten eerste het probleem en wensen duidelijk te krijgen. Vanuit hier kunnen wij aan de slag met
          onze documentatie en uiteindelijk ontwerpen maken.
        </p>
        <p className="mb-4">
          Bekijk hier de <Link href="https://eduofficenl-my.sharepoint.com/:u:/g/personal/501077_vistacollege_nl/EYoJP6KOf7lPnMONEkzQaXYBNn0WCwC5nEH6tqO0Z0quFw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=RId3Ei" className="inline-button">opname</Link> van dit gesprek.
        </p>
      </div>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="behoefte-analyse" className="text-2xl space-mono-bold mb-4">
          <a href="#behoefte-analyse" className="anchor">Behoefte Analyse</a>
        </h2>
        <p className="mb-4">
          Om het project op te starten is er een behoefte analyse geschreven, hierin kun je vinden over wat het probleem
          is, wat de oplossing hiervoor zal zijn 'het product' en als laatste is er eventuele contactinformatie te vinden over de 
          klant. Deze is opgebouwd om er zeker van te zijn dat wij de opdracht juist hebben begrepen en ontvangen, daarom wordt
          deze hierna ook doorgestuurd naar de klant ter bevestiging. Om gezamenlijk als team de opdracht 
          duidelijk te begrijpen hebben wij daarom ook dit document samen gemaakt, wij hebben hiervoor 
          onze opname teruggeluisterd om geen wensen over het hoofd te zien.
        </p>
        <p className="mb-4">
          Bekijk de <Link href="https://eduofficenl-my.sharepoint.com/:b:/g/personal/501077_vistacollege_nl/EdVnIf0KMxtCsQWHN-24A-ABraHcyJuAfRSFtbZ8eg1A7A?e=WpWbBb" className="inline-button">Behoefte Analyse</Link> hier.
        </p>
      </div>

      <div className="mb-8">
      <h2 id="programma-van-eisen" className="text-2xl space-mono-bold mb-4">
          <a href="#programma-van-eisen" className="anchor">Programma van Eisen</a>
        </h2>
        <p className="mb-4">
          Samen met de behoefte analyse hebben wij ook alle wensen verwerkt in een Programma van Eisen. 
          Om de functionele maar ook niet-functionele (design/ontwerp) eisen en wensen te bepalen en neer te zetten is er gebruik gemaakt van een uitgebreide 
          MoSCoW-Methode, hierin kun je alle eisen vinden die cruciaal zijn (must-haves), en minder cruciale
          eisen. Deze worden zo dus direct gerangschikt. Wij hebben het Programma van Eisen ook gezamenlijk
          als team opgezet, zodat ieder duidelijk weet wat de bedoeling is binnen dit project. Wij hebben 1
          analyse gemaakt voor de algemene eisen, en daarnaast 1 aparte analyse voor alle social media 
          platformen.
        </p>
        <p className="mb-4">
          Bekijk de eerste versie van het <Link href="https://eduofficenl-my.sharepoint.com/:b:/g/personal/501077_vistacollege_nl/EW1h7DfmHihMgByiyNOy0nsBCoDzSLlbFYdA9_rRSiNROw?e=hsJlBH" className="inline-button">Programma van Eisen</Link> hier.
        </p>
        <p className="mb-4">
          Na versturen ter bevestiging hebben wij feedback gekregen van de klant, deze hebben wij meteen verwerkt in een nieuwe versie van het Programma van Eisen.
          Dit was dat Youtube onder must-have moest staan ipv should have, in de social media analyse. Nu weten wij zeker dat wij de opdracht juist hebben begrepen!
        </p>
        <img src="\images\feedbackpve.png" alt="Vercel" className="rounded mb-4" />       
        <p className="mb-4">
          Bekijk de tweede versie van het <Link href="https://eduofficenl-my.sharepoint.com/:b:/g/personal/501077_vistacollege_nl/ETZdlnLR_n9Kh9oi0MalVicBHWCjlSKTNeZZJp3wCDg5sg?e=SVJbLT" className="inline-button">Programma van Eisen</Link> hier.
        </p>
        <img src="\images\feedbackpve2.png" alt="Vercel" className="rounded mb-4" />       
      </div>

      <hr className="my-8" />

      <div className="mb-8">
      <h2 id="plan-van-aanpak" className="text-2xl space-mono-bold mb-4">
          <a href="#plan-van-aanpak" className="anchor">Plan van Aanpak</a>
        </h2>
        <p className="mb-4">
          Het Plan van Aanpak is een belangrijk document. Het Plan van Aanpak biedt een duidelijk overzicht van de projectdoelen, taken, en de stappen die 
          nodig zijn om deze te bereiken. Maar daarnaast bevat het ook een stukje risicomanagement en zijn randvoorwaarden om deze risico's te mitigeren.
          Als laatste is een duidelijk planning noodzakelijk bij het plan van aanpak om deze applicatie te ontwikkelen, waarbij rekening wordt gehouden met realistische haalbaarheid.
        </p>
        <p className="mb-4">
          In dit Plan van Aanpak heb ik mij bezig gehouden met schrijven van de Aanleiding, de Doelen identificeren en het maken van een duidelijke planning
          waarbij rekening is gehouden met de haalbaarheid. Echter door enige privesituaties van leden binnen het team is deze planning
          wat uitgelopen. Deze is weer bijgewerkt in de volgende documenten; Functioneel Ontwerp en Technisch Ontwerp.
        </p>
        <p className="mb-4">
          Bekijk het <Link href="https://eduofficenl-my.sharepoint.com/:b:/g/personal/501077_vistacollege_nl/EVbPW2MbapZNkq8sH3thFuMBVsVW_eaJAFf15lZczi6elA?e=rJfOFN" className="inline-button">Plan van Aanpak</Link> hier.
        </p>
      </div>

      <hr className="my-8" />

      <div className="mb-8">
      <h2 id="voortgang-bewaken" className="text-2xl space-mono-bold mb-4">
          <a href="#voortgang-bewaken" className="anchor">Voortgang bewaken</a>
        </h2>
        <p className="mb-4">
          Om de voortgang te bewaken binnen de gemaakte documentatie, individueel en als team heb ik
          de volgende manier zoveel mogelijk gebruikt.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Het maken van een duidelijke planning binnen de documenten. Hier zul je ook zien de planning in de loop van de tijd wordt bijgewerkt. Dit zie je in het Plan van Aanpak, TO en FO.</li>
          <li>Ik heb voornamelijk het contact gehouden met de klant, om de klant op de hoogte te houden wat de stand van zaken is. Doormiddel van het versturen van relevante documenten.</li>
          <li>Gebruik maken van Stand-Ups. Om onderling te bewaken waar ieder op dit moment staat, ergens mee vast zit, afspraken te maken en wat hij nu gaat doen.</li>
        </ul>
      </div>
    </section>
  );
};

export default eisenEnWensen;