import React from 'react';
import Link from 'next/link';

const voertOverleg = () => {
  return (
    <section className="">

      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Voert Overleg
      </h1>
      <p className="mb-4">
        {`Tijdens de opzet en documentatie van het Mees Project hebben we meermaals stand-ups en overleg momenten gehad.
        Op deze pagina vind je op chronologische volgorde de opgenomen gesprekken. Hierbij heb ik gelet op meerdere 
        aspecten:`}
      </p>
      <ul className="list-disc list-inside mb-4">
          <li>Een actieve deelname hebben aan het gesprek, doormiddel van bijvoorbeeld het inbrengen van 
            relevante oplossingen voor het project en daarbij de juiste vragen stellen aan teamgenoten.
            Hiervoor probeer ik altijd LSD te gebruiken net zoals bij de klantengesprekken, het luisteren
            naar wat een ander in te brengen heeft, dit proberen samen te vatten zodat ik laat zien en 
            probeer te bevestigen aan de ander of ik zijn punt juist begrepen heb en als laatste mogelijk
            door te vragen om zo tot de beste oplossing te komen.
          </li>
          <li>Doormiddel van het houden van Stand ups probeer je regelmatig af te stemmen met teamgenoten
            over de voortgang en eventuele knelpunten die hierbij komen kijken. Hierbij bespreek ik altijd
            de 3 kernvragen; Wat heb je gedaan sinds ons laatste gesprek? Wat ga je nu doen? Heb je 
            eventuele knelpunten of zit je ergens mee vast? (Kun je verder?) 
          </li>
          <li>Duidelijke afspraken maken met mijn teamgenoten, na aanleiding van de vorige gestelde vragen.</li>
          <li>Mijzelf houden aan deze gemaakte afspraken. Deze worden in een vervolg overleg (standup)
            weer besproken natuurlijk.
          </li>
        </ul>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="projectgroep" className="text-2xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Stand Up #1</a>
        </h2>
        <p className="mb-4">
          Na ons eerste klantengesprek opgenomen te hebben, hebben wij dit als eerste samen terug 
          beluisterd om alle eisen en wensen duidelijk te beschrijven, binnen dit gesprek waren ik, Declan,
          Jordy en Jaabir aanwezig. Dit gesprek ging dus voornamelijk
          over het liggende probleem van de klant, het was hierbij voornamelijk de taak van mij en Declan 
          om ons team hiervan op de hoogte te stellen daarnaast ook over het bespreken van de eisen en wensen van de klant, 
          hoe wij de realisatie van dit project gaan aanpakken, en het bespreken van welke documenten 
          er nu gemaakt zullen worden, het doel was om iedereen binnen het team met de neuzen naar 
          dezelfde richting te krijgen.
        </p>
        <p className="mb-4">
          Bekijk hier de opname van onze <Link href="https://eduofficenl-my.sharepoint.com/:u:/g/personal/501077_vistacollege_nl/EeQJzMCY4CVPjMDuCt3KEEYB0q5C-6HgjJQaOMJISYvkrA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=C3Zh8W" className="inline-button"> Stand Up #1.</Link>
        </p>
        <h3 id="projectgroep" className="text-xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Gemaakte afspraken:</a>
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>Documenten en Ontwerpen die gemaakt en verdeeld moeten worden zijn; PvE, 
            FO en TO.
          </li>
          <li>Wij zullen eerst in de documentatie fase duiken en vervolgens de realisatie user stories
            toewijzen.</li>
          <li>Trello wordt gemaakt en deze zal worden ingericht door mij, zodat in het vervolg iedereen User Stories kan aanmaken en taken verdeeld kunnen worden.
          </li>
          <li>Tweede klantengesprek zal worden ingepland door Jordy voor enige feedback van de documentatie.</li>
          <li>Roy (ziek) zal het functioneel ontwerp maken waarbij...
          </li>
          <li>Ik vervolgens het Technisch Ontwerp kan gaan maken.
          </li>
          <li>In de planning zal worden meegenomen dat de volgende woensdag alle documentatie is 
            afgerond, hierbij hebben we dan een nieuwe stand-up en kunnen we beginnen aan een nieuwe sprint 
            waarbij wij kunnen gaan realiseren. Dit heb ik samen met Jaabir opgepakt.
          </li>
        </ul>
        <p className="mb-4">
          Houden aan mijn gemaakte afspraken:
        </p>
        <p className="mb-4">
          Bekijk hier het <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/EV9CagNonZBNhyxbBeOrVJgBo2JOmj5ljYx3ppnAgHxiGQ?e=hvTNcd" className="inline-button">Technisch Ontwerp</Link> wat als vervolg op het FO is gemaakt van Roy.
        </p>
        <img src="\images\trellomeesproject.png" alt="Vercel" className="rounded mb-4" />
        <img src="\images\planningmees.png" alt="Vercel" className="rounded mb-4" />

        <hr className="my-8" />

        <h2 id="projectgroep" className="text-2xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Stand Up #2 na het tweede klantengesprek</a>
        </h2>
        <p className="mb-4">
            Doormiddel van het houden van Stand ups probeer ik regelmatig af te stemmen met teamgenoten
            over de voortgang en eventuele knelpunten die hierbij komen kijken. Hierbij bespreek ik altijd
            de 3 kernvragen; Wat heb je gedaan sinds ons laatste gesprek? Wat ga je nu doen? Heb je 
            eventuele knelpunten of zit je ergens mee vast? (Kun je verder?) Bij deze stand up 
            waren wij bezig met het maken van het functioneel ontwerp.
        </p>
        <p className="mb-4">
            Er was een tweede klantengesprek gehouden voor tussentijdse feedback vanuit de website.
            De feedback van dit gesprek wordt hier gezamenlijk besproken. 
            Dit klantengesprek is gehouden door Jaabir, Jordy en Roy. Tijdens deze standup was Roy 
            echter ziek. Wij lagen mooi ruim op schema waardoor wij een paar extra taken kregen van 
            de klant.
        </p>
        <p className="mb-4">
          Bekijk hier de opname van onze <Link href="https://eduofficenl-my.sharepoint.com/:u:/g/personal/501077_vistacollege_nl/Ed6faobpsx9FrVPp7nn3n84B96DtZx9E2TeWeAym3DMmKw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=hgh1Vs" className="inline-button"> Stand Up #2.</Link>
        </p>
        <h3 id="projectgroep" className="text-xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Gemaakte afspraken na ontvangen feedback:</a>
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>Ik zal voedingswaardes toegevoegen aan de dranken (dummydata), vanuit feedback van de klant.
          </li>
          <li>Ik zal de openingstijden moeten verplaatsen naar bovenaan de pagina in plaats van onderaan.
          </li>
          <li>Pop-up voor de acties moet op elke pagina komen, niet alleen de home pagina.
          </li>
          <li>Het kleurenschema moest iets feller worden, verdere design en ontwerp was volledig goedgekeurd.
          </li>
          <li>Jaabir maakt een verslagje over de verzamelde feedback.
          </li>
          <li>Trek aan de bel als je ergens vast komt te zitten.
          </li>
        </ul>
        <p className="mb-4">
          Houden aan mijn gemaakte afspraken, hierbij foto's van de toegevoegde voedingswaardes en 
          openingstijden verplaatsing, mijn afgesproken taken na aanleiding van deze stand up:
        </p>
        <img src="\images\voedingswaardefeedbackmees.png" alt="Vercel" className="rounded mb-4" />
        <img src="\images\tijdenfeedbackmees.png" alt="Vercel" className="rounded mb-4" />
      </div>
    </section>
  );
};
export default voertOverleg;