import React from 'react';
import Link from 'next/link' 

const eisenEnWensen = () => {
  return (
    <section className="">
      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Eisen en Wensen
      </h1>

      <p className="mb-4">
        {`Omdat dit een solo project was heb ik in dit onderdeel alle documentatie geschreven, er 
        was geen fysieke klant om deze opdracht van aan te nemen, dat neemt niet weg dat de behoeftes, 
        alle eisen en bijvoorbeeld een planning gemaakt moeten worden. Op deze pagina zal ik het dus vooral 
        hebben over deze behoeftes, eisen, de aanpak en bewaken van de voortgang.`}
      </p>
      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="behoefte-analyse" className="text-2xl space-mono-bold mb-4">
          <a href="#behoefte-analyse" className="anchor">Behoefte Analyse</a>
        </h2>
        <p className="mb-4">
          Om het project op te starten is er een behoefte analyse geschreven, hierin kun je vinden over wat het probleem
          is, wat de oplossing hiervoor zal zijn 'het product' en als laatste is er eventuele contactinformatie te vinden over de 
          desbetreffende klant.
        </p>
        <p className="mb-4">
          Bekijk de <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/EW3crbOYGJhDoPQgtD8P1q4BNVh5Qh_ua54k9kMttjshxA?e=bpCN9y" className="inline-button">Behoefte Analyse</Link> hier.
        </p>
      </div>

      <hr className="my-8" />

      <div className="mb-8">
      <h2 id="programma-van-eisen" className="text-2xl space-mono-bold mb-4">
          <a href="#programma-van-eisen" className="anchor">Programma van Eisen</a>
        </h2>
        <p className="mb-4">
          Om de functionele maar ook niet-functionele (design/ontwerp) eisen en wensen te bepalen en neer te zetten is er gebruik gemaakt van een uitgebreide 
          MoSCoW-Methode, hierin kun je alle eisen vinden die cruciaal zijn (must-haves), en minder cruciale
          eisen. Deze worden zo dus direct gerangschikt.
        </p>
        <p className="mb-4">
          Bekijk het <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/EQgMe3H5UV1FpbM8vZJzWgEBnprA1X5CIbFGfSpTkD0k1Q?e=nnSqC1" className="inline-button">Programma van Eisen</Link> hier.
        </p>
      </div>

      <hr className="my-8" />

      <div className="mb-8">
      <h2 id="plan-van-aanpak" className="text-2xl space-mono-bold mb-4">
          <a href="#plan-van-aanpak" className="anchor">Plan van Aanpak</a>
        </h2>
        <p className="mb-4">
          Het Plan van Aanpak is een belangrijk document. Het Plan van Aanpak biedt een duidelijk overzicht van de projectdoelen, taken, en de stappen die 
          nodig zijn om deze te bereiken. Maar daarnaast bevat het ook een stukje risicomanagement en zijn randvoorwaarden om deze risico's te mitigeren.
          Als laatste is een duidelijk planning noodzakelijk bij het plan van aanpak om deze website te ontwikkelen, waarbij rekening wordt gehouden met realistische haalbaarheid.
        </p>
        <p className="mb-4">
          Bekijk het <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/EbyiEIBRVzhHhl2XHYWSdf4BnEkuxyqFPIE1m9w-WQUr9Q?e=Rnsi25" className="inline-button">Plan van Aanpak</Link> hier.
        </p>
      </div>

      <hr className="my-8" />

      <div className="mb-8">
      <h2 id="voortgang-bewaken" className="text-2xl space-mono-bold mb-4">
          <a href="#voortgang-bewaken" className="anchor">Voortgang bewaken</a>
        </h2>
        <p className="mb-4">
          Om deze gestelde doelen die zijn ontstaan uit de vorige documenten in te plannen en hierbij de 
          voortgang te bewaken is er gebruik gemaakt van een uitgebreid KanBan-bord. Hier zijn User Stories
          gemaakt voor elke functionaliteit en zo uitgedeeld op fase, prioriteit en meer.
          Zo weet ik precies wat de stand van zaken is, wat al af is en wat nog moet gebeuren. Hieronder kun je
          deze omgeving zien, hiervoor is Github Projects gebruikt omdat dit makkelijk in gebruik is, handige
          tools leveren en je zo in combinatie met de ontwikkeling alles op 1 plek kunt vinden. 
        </p>
        <p className="mb-4">
          Om deze voortgang niet te verliezen heb ik gebruik gemaakt van Github om mijn code te pushen en te committen.
        </p>
        <p className="mb-4">
          Bekijk de <Link href="https://github.com/users/Youri-program/projects/5" className="inline-button">Github Projects</Link> omgeving hier, met daarbij als eerst het uitgewerkte KanBan-bord.
        </p>
        <img src="\images\userstoriesportfolioproject.png" alt="Vercel" className="rounded mb-4" />
        <p className="mb-4">
          Daarnaast is er ook een <Link href="https://github.com/users/Youri-program/projects/5/views/4" className="inline-button">uitgebreidere planning</Link> te vinden in dezelfde omgeving.
          In de vorm van een roadmap die Github Projects je aanbied, wordt het plannen van de User Stories duidelijker, bovendien is het KanBan-bord en de planning met elkaar gelinkt!
          Ik heb hierbij gewerkt in sprints van een periode van 1 week lang. Deze zie je ook in de roadmap aangeduid als lijnen door de planning.
        </p>
        <img src="\images\roadmap-portfolio-website.png" alt="Vercel" className="rounded mb-4" />
      </div>
    </section>
  );
};

export default eisenEnWensen;