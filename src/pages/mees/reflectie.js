import React from 'react';
import Link from 'next/link';

const reflectie = () => {
  return (
    <section className="">

      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Reflectie
      </h1>
      <p className="mb-4">
        {``}
      </p>
      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="projectgroep" className="text-2xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Reflecteren op het project</a>
        </h2>
        <p className="mb-4">
          Nu we aan het einde gekomen zijn van dit project is het noodzakelijk om te reflecteren op onszelf.
          Ik heb hiervoor de STARR-Methode gebruikt. Met deze methode kan ik een duidelijk inzicht 
          krijgen in wat de situatie was, wat mijn taak hierin was, wat ik hiervoor heb gedaan, wat daaruit
          het resultaat was en waarop ik wil reflecteren. Positief en Negatief.
        </p>
        <p className="mb-4">
          Bekijk hier mijn <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/EU9V73bjhpNDg9MVkoqjBikBKTPeiHKM-BYOVQHp8aeiMw?e=Efuz3d" className="inline-button">Reflectie.</Link>
        </p>
      </div>
    </section>
  );
};
export default reflectie;