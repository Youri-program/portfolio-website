import React from 'react';
import Link from 'next/link' 

const testSoftware = () => {
  return (
    <section className="">

      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Test Software
      </h1>
      <p className="mb-4">
        {`Tijdens of na de ontwikkeling vinden tests plaats. Dit is hoe ik de testfase heb uitgevoerd
        op mijn portfolio website.`}
      </p>
      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="projectgroep" className="text-2xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Test Plan</a>
        </h2>
        <p className="mb-4">
          Om te beginnen met testen heb je een plan nodig, hierin vind je nogmaals alle user stories
          oftwel de functionaliteiten terug met dit keer ieder hun eigen daarbij horende test scenario. Deze
          moeten daar nauw op aansluiten. Deze scenario's worden later bij het testen uitgevoerd. Hoe de 
          test zal verlopen, welke stappen hiervoor nodig zijn, vind je ook terug in dit plan. Het lege
          Test Formulier vind je ook in dit document. 
        </p>
        <p className="mb-4">
          Bekijk hier het <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/EQ8_o-9uCztGuabEtpUuFkgBs8GSsQDjB_VvfwkT3T8iWg?e=hoQDrg" className="inline-button">Test Plan.</Link>
        </p>
      </div>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="werkwijze" className="text-2xl space-mono-bold mb-4">
          <a href="#werkwijze" className="anchor">Test Opnames en Test Formulier</a>
        </h2>
        <p className="mb-4">
          Hier vind je het ingevulde Test Formulier wat bij de daadwerkelijke test is gebruikt. 
        </p>
        <p className="mb-4">
          Bekijk hier het <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/EdRbSVFPkaZFrJfcV8n-LLwBwoa5z09HLln2sSpdMpm-2Q?e=GSc9dQ" className="inline-button">Test Formulier.</Link>
        </p>
        <p className="mb-4">
          De tests zijn opgenomen en zijn hier terug te vinden. Hier zie je mij de lijst van scenario's
          zorgvuldig afgaan, volgens het test plan, en tegelijkertijd invullen wanneer ik live aan het testen ben. 
        </p>
        <p className="mb-4">
        <Link href="https://eduofficenl-my.sharepoint.com/:v:/g/personal/501077_vistacollege_nl/EesBQXn1eoVKuSydwdG0zzMBHnfsAIRtupvk86o6fRinwQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=71WUbG" className="inline-button">Opname Test 1.</Link>
        <Link href="https://eduofficenl-my.sharepoint.com/:v:/g/personal/501077_vistacollege_nl/EYlHMnR6m8ZOvwv7Awu7Td4BZvnq6iO30ppTXZuyFf8fPA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=arP75n" className="inline-button">Opname Test 2.</Link>
        </p>
      </div>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="werkwijze" className="text-2xl space-mono-bold mb-4">
          <a href="#werkwijze" className="anchor">Test Rapport</a>
        </h2>
        <p className="mb-4">
          Alle test-resultaten op onze geteste functionaliteiten zijn verzameld en worden allemaal voorzien van een conslusie. Een enkeling
          heeft de test bijvoorbeeld niet doorstaan!
        </p>
        <p className="mb-4">
          Bekijk hier het <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/EYu1jz1n-0pNivhP-ppzWeMB2dxma-k5MCdGArN1iz4MSg?e=ctoF8i" className="inline-button">Test Rapport.</Link>
        </p>
      </div>
    </section>
  );
};
export default testSoftware;