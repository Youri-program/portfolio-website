import Layout from '../components/layout.js'
import Link from 'next/link' 

export default function Home() {
  return (
    <section className="">

      <h1 className="mb-8 text-3xl space-mono-bold tracking-tighter">
        Hey<span role="img" aria-label="waving hand">👋</span>, welkom op Youri's portfolio!
      </h1>
      <p className="mb-4">
        {`Een enthousiaste, aanstormende Software Developer. Deze website heb ik gemaakt voor mijn 
        eindexamen en hier vind je een verzameling van al mijn projecten en bijhorende materialen. Van 
        creatieve coderingen en slimme oplossingen tot aan het werken in Agile-methodes en het bezitten
        van soft-skills, alles wat ik geleerd heb en waar ik trots op ben, 
        staat hier. Duik in mijn werk en ontdek mijn passie voor technologie en innovatie.`}
      </p>
      <p className="mb-4">
        {`Begin simpelweg links om te navigeren door de lijst van projecten, daarnaast vind je bij de kerntaken
        een makkelijk overzicht van alle bijhorende werkprocessen. Veel plezier met rondkijken!`}
      </p>
      <hr className="my-8" />

      <div className="mb-8">
        <p className="text-lg space-mono-bold mb-2">Gebruikte talen en frameworks:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Voor het realiseren van projecten zijn talen gebruikt zoals JavaScript, C# en Dart (Flutter).</li>
          <li>En andere frameworks, libraries en technologieën zoals WordPress, (Tailwind) CSS, HTML, React, NextJS en .NET.</li>
        </ul>
      </div>
    </section>
  )
}
 
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
    </Layout>
  )
}