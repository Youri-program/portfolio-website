import React from 'react';
import Link from 'next/link' 

const doetVerbetervoorstellen = () => {
  return (
    <section className="">

      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Doet Verbetervoorstellen
      </h1>
      <p className="mb-4">
        {``}
      </p>
      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="projectgroep" className="text-2xl space-mono-bold mb-4">
          <a href="#projectgroep" className="anchor">Verbetervoorstellen</a>
        </h2>
        <p className="mb-4">
          Nadat de resulaten binnenzijn is het handig om mislukte tests te verbeteren in hun werking. 
          Daarom is er een document gemaakt waar deze scenario's een realiseerbaar voorstel krijgt. 
          Hierbij wordt geanalyseerd naar mogelijke aanpassingen en een bijhorende planning gemaakt 
          waarbij rekening wordt gehouden met haalbaarheid.
        </p>
        <p className="mb-4">
          Bekijk hier de <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/EVArWmypuvBFrn28ZudxMNkB5j42fyl_1QipjQwBzi-5Gg?e=WaDYyc" className="inline-button">Verbetervoorstellen.</Link>
        </p>
      </div>
    </section>
  );
};
export default doetVerbetervoorstellen;