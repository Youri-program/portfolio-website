import React from 'react';
import Link from 'next/link';

const ontwerptSoftware = () => {
  return (
    <section className="">
      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Ontwerpt Software
      </h1>

      <p className="mb-4">
        {`Nu dat alle eisen en wensen duidelijk zijn vastgelegd zijn wij begonnen aan het ontwerpen van de 
          applicatie. Hier vind je bijvoorbeeld alle relevante functionaliteiten in beschreven. 
          Deze functionaliteiten worden vervolgens op technische gebied uitgewerkt om realisatie zo soepel
          mogelijk te maken. Ook vind je hierin terug waarom bepaalde keuzes worden gemaakt, ook in het design.
          En als laatste wordt er rekening houden met belangrijke aspecten zoals privacy en security.`}
      </p>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="behoefte-analyse" className="text-2xl space-mono-bold mb-4">
          <a href="#behoefte-analyse" className="anchor">Tussentijds Klantengesprek #2</a>
        </h2>
        <p className="mb-4">
          Om te zorgen dat alle design/ontwerp eisen van de klant duidelijk worden geimplementeerd
          hebben Jaabir, Roy en Jordy een tweede klantengesprek gehad hierover. Zo weten wij zeker dat we, nog steeds, op dezelfde
          lijn zitten met de klant. Ik was niet aanwezig bij dit gesprek, maar is wel handig om dit 
          bij deze 'tijdlijn' van het project te vermelden.
        </p>
      </div>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="behoefte-analyse" className="text-2xl space-mono-bold mb-4">
          <a href="#behoefte-analyse" className="anchor">Functioneel Ontwerp</a>
        </h2>
        <p className="mb-4">
          Dit Functioneel Ontwerp is gemaakt door Roy. Binnen dit ontwerp kun je de beschreven opdracht 
          vinden, de eisen/functionaliteiten, de opdrachtgever en aannemers, een globale planning, 
          kostenraming en een wirefram inclusief mock-ups.
        </p>
        <p className="mb-4">
          Bekijk het <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/EQsqkYPRLZxDku3ULf7l62kBLv8cGHeXIX5vTM8947eCLw?e=onJr2n" className="inline-button">Functioneel Ontwerp</Link> hier.
        </p>
      </div>

      <hr className="my-8" />

      <div className="mb-8">
      <h2 id="plan-van-aanpak" className="text-2xl space-mono-bold mb-4">
          <a href="#plan-van-aanpak" className="anchor">Technisch Ontwerp</a>
        </h2>
        <p className="mb-4">
        Ik creëerde een technisch ontwerp dat de ontwikkelomgeving, gebruikte technologieën, 
        database design, beveiligingsmaatregelen, de oplossing in kaart, hosting en de Wordpress 
        configuratie beschreef. Dit is op basis van de functionaliteiten en eisen beschreven in 
        vorige documenten. Dit document dient als een leidraad voor de ontwikkeling en het beheer van de website.
        Het product zal gerealiseerd worden met behulp van WordPress en Elementor. Voornamelijk omdat wij
        als eis van de klant kregen dat overname en beheer zo simpel mogelijk gemaakt moet worden.
        </p>
        <img src="\images\tomeesproject.png" alt="Vercel" className="rounded mb-4" />       
        <p className="mb-4">
          Bekijk het <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/EV9CagNonZBNhyxbBeOrVJgBo2JOmj5ljYx3ppnAgHxiGQ?e=hvTNcd" className="inline-button">Technisch Ontwerp</Link> hier.
        </p>
        <p className="mb-4">
        Echter ben ik op dit moment van mening dat ik het TO simpelweg beter had kunnen maken, hierop
        reflecteer ik in mijn STARR-Reflectie te vinden binnen het kopje 'Reflectie' van dit project.
        Deze verbetering is heel mooi te zien in mijn toekomstige ontwerpen, bijvoorbeeld bij die van 
        het Portfolio Website Project. Tegenover dat ontwerp is deze nog erg miniscul, omdat dit als 
        een duidelijkere en uitgebreidere leidraad dient dan het Technisch Ontwerp van Mees.
        Voor een kleinschaliger project zoals Mees is het echter duidelijk en uitgebreid genoeg toen-der-
        tijd.
        </p>
      </div>
    </section>
  );
};
export default ontwerptSoftware;