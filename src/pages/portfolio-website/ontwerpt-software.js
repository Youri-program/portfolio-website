import React from 'react';
import Link from 'next/link' 

const ontwerptSoftware = () => {
  return (
    <section className="">
      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Ontwerpt Software
      </h1>

      <p className="mb-4">
        {`Nu dat alle eisen en wensen duidelijk zijn vastgelegd kon ik beginnen aan het ontwerpen van de website/software.
        Hier vind je bijvoorbeeld ook relevante schematechnieken in terug en waarom deze worden gemaakt, hetzelfde
        geld voor het rekening houden met belangrijke aspecten zoals privacy en security. In het Functioneel Ontwerp
        zul je een sectie tegenkomen over privacy, het gemaakte privacy beleid kun je terugvinden op elke
        willekeurige pagina in de footer onderaan!`}
      </p>
      <hr className="my-8" />

      <div className="mb-8">
        <h2 id="functioneel-ontwerp" className="text-2xl space-mono-bold mb-4">
          <a href="#functioneel-ontwerp" className="anchor">Functioneel Ontwerp</a>
        </h2>
        <p className="mb-4">
        Het Functioneel Ontwerp beschrijft de functionele vereisten en de voor oog hebbende werking van de Portfolio Website. Dit document is ontwikkeld na uitgebreide analyse van de behoeften en biedt een blauwdruk voor de ontwikkeling van de applicatie.
        Dit ontwerp beschrijft de details voor de ontwikkeling van het Portfolio Website project. Dit document dient als een leidraad voor de ontwikkeling en implementatie van de website, met aandacht voor ontwerp/design, functionaliteiten, privacy en de planning.
        Het FO vormt de basis voor verdere ontwikkeling en implementatie van het project. 
        </p>
        <p className="mb-4">
          Bekijk het <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/EaIV5nPrkXBEn5THZpnW2DYBOtROvTcPWMz-9ndtdtr7JA?e=AghXEl" className="inline-button">Functioneel Ontwerp</Link> hier.
        </p>
      </div>

      <hr className="my-8" />

      <div className="mb-8">
      <h2 id="technisch-ontwerp" className="text-2xl space-mono-bold mb-4">
          <a href="#technisch-ontwerp" className="anchor">Technisch Ontwerp</a>
        </h2>
        <p className="mb-4">
          Na het maken van het FO kan ik alle bijhorende functionaliteiten technisch uitwerken. 
          Dit Technisch Ontwerp document beschrijft de technische aspecten van het Portfolio Website project. Het bevat gedetailleerde informatie over de ontwikkelomgeving, gebruikte programmeertalen en tools, database ontwerp, flowcharts voor toekomstige admin-taken en deployment.
          Dit document dient als een leidraad voor de ontwikkeling en het beheer van de website. 
        </p>
        <p className="mb-4">
          Bekijk het <Link href="https://eduofficenl-my.sharepoint.com/:w:/g/personal/501077_vistacollege_nl/EVqaNTP1hq1Nkne9ZnSLVVoB1EyfkoOk9mlydaqdi4qHmQ?e=XAGD43" className="inline-button">Technisch Ontwerp</Link> hier.
        </p>
      </div>
    </section>
  );
};
export default ontwerptSoftware;