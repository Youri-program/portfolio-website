import React from 'react';
import Link from 'next/link' 

const ontwerptSoftware = () => {
  return (
    <section className="">
      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Ontwerpt Software
      </h1>

      <p className="mb-4">
        {`Naast dat de Eisen en Wensen al vast waren gelegd was het project (helaas) ook al grotendeels ontworpen.`}
      </p>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="functioneel-ontwerp" className="text-2xl space-mono-bold mb-4">
          <a href="#functioneel-ontwerp" className="anchor">Documentatie voor Research</a>
        </h2>
        <p className="mb-4">
        Er moest echter wel nog research gedaan worden waar ik documentatie voor geschreven heb. De
        bijhorende code die geschreven is binnen deze research zul je zo in de volgende pagina vinden 
        onder het realiseren. Hierbij onderbouw ik waarom enkele keuzes beter zijn dan de ander.
        Dit is gedaan voor error catching binnen .NET en React.
        </p>
        <p className="mb-4">
          Bekijk de hier de React<Link href="https://github.com/Youri-program/stage-code-werk/blob/main/Monitor%20-%20Research%20-%20ReactJS/README.md" className="inline-button">Documentatie</Link> in de README.
        </p>
        <img src="\images\reactreadme.png" alt="Vercel" className="rounded mb-4" />
        <p className="mb-4">
        Bekijk de hier de .NET<Link href="https://github.com/Youri-program/stage-code-werk/blob/main/Monitor%20-%20Research%20-%20DotNetCore/KembitPreAssignmentConsoleApp/README.md" className="inline-button">Documentatie</Link> in de README.
        </p>
        <img src="\images\dotnetreadme.png" alt="Vercel" className="rounded mb-4" />
      </div>

      <hr className="my-8" />

      <div className="mb-8">
      <h2 id="technisch-ontwerp" className="text-2xl space-mono-bold mb-4">
          <a href="#technisch-ontwerp" className="anchor">Infrastructuur en ERD</a>
        </h2>
        <p className="mb-4">
          Naast het schrijven van documentatie heb ik ook aan het begin van het project de Infrastructuur
          visueel ontworpen om duidelijk te krijgen als team hoe dit project zal gaan werken en welke 
          componenten het straks nodig zal gaan hebben.
        </p>
        <img src="\images\MonitorProjectOntwerp.png" alt="Vercel" className="rounded mb-4" />
        <p className="mb-4">
          Ook heb ik in de fase van het feeden van de database een ERD moeten maken, deze is best uitgebreid
          geworden. Hierbij heb visueel uitgeschreven wat een gevangen error aan data moet meegeven en wat
          en ook hoe dit uiteindelijk bij de juist persoon komt op het juist media platform.
        </p>
        <img src="\images\AlertDefinitionERD.png" alt="Vercel" className="rounded mb-4" />
      </div>
    </section>
  );
};
export default ontwerptSoftware;