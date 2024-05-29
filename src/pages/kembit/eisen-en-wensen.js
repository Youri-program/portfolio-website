import React from 'react';
import Link from 'next/link' 

const eisenEnWensen = () => {
  return (
    <section className="">
      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Eisen en Wensen
      </h1>

      <p className="mb-4">
        {`Alle Eisen en Wensen waren aan de voorhand al vastgelegd, echter omdat deze dus klaar lagen
        moesten ze wel nog verdeeld, gepland en uiteindelijk bewaakt worden.`}
      </p>

      <hr className="my-8" />

      <div className="mb-8">
      <h2 id="voortgang-bewaken" className="text-2xl space-mono-bold mb-4">
          <a href="#voortgang-bewaken" className="anchor">Voortgang bewaken</a>
        </h2>
        <p className="mb-4">
          Om deze gestelde doelen die zijn ontstaan uit de vorige documenten in te plannen en hierbij de 
          voortgang te bewaken is er gebruik gemaakt van een uitgebreid KanBan-bord. Hier zijn User Stories
          gemaakt voor elke functionaliteit en zo uitgedeeld voor ieder teamlid.
          Zo weet ik precies wat de stand van zaken is, wat al af is en wat nog moet gebeuren. Hieronder kun je
          deze omgeving zien, hiervoor is Azure DevOps gebruikt.
        </p>
        <p className="mb-4">
          Om deze voortgang niet te verliezen heb ik gebruik gemaakt van GitKraken om mijn code te pushen en te committen,
          GitKraken is een ander alternatief voor GitHub, het idee is hetzelfde, je werkt tenslotte met Git.
        </p>
        <img src="\images\AzureDevOpsBoard.png" alt="Vercel" className="rounded mb-4" />
        <img src="\images\AzureUserStoriesBoard.png" alt="Vercel" className="rounded mb-4" />
      </div>
    </section>
  );
};

export default eisenEnWensen;