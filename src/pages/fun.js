import Head from 'next/head'

export default function Fun() {
  return (
    <>
      <Head>
        <title>Fun — Youri van der Meulen</title>
      </Head>

      <article className="space-y-10">
        <header className="space-y-3">
          <h1 className="font-serif text-heading text-3xl font-normal">Fun</h1>
          <p className="text-muted text-sm leading-relaxed">
            The stuff that doesn't fit on a CV — last updated{' '}
            {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}.
          </p>
        </header>

        <div className="space-y-8 text-[15px] leading-relaxed text-text/90">

          <FunSection title="Reading">
            <ul className="space-y-4">
              <ReadingItem
                title="Je bent wat je doet"
                author="Ray Klaassens"
                status="reading"
                description="A Dutch book on personal leadership and ownership, drawing on the author's background in Special Forces. The core idea: the difference between knowing what needs to be done and actually doing it is where character is built."
                href="https://www.goodreads.com/book/show/229241051-je-bent-wat-je-doet"
              />
              <ReadingItem
                title="Greenlights"
                author="Matthew McConaughey"
                status="reading"
                description="Part memoir, part philosophy — McConaughey reflects on fifty years of stories, decisions, and lessons. The premise: red lights and yellow lights eventually turn green too, if you know how to deal with them."
                href="https://www.goodreads.com/book/show/52838315-greenlights"
              />
            </ul>
          </FunSection>

          <FunSection title="Currently learning">
            <p className="text-text/70 text-sm">
              [...]
            </p>
          </FunSection>

          <FunSection title="Outside the screen">
            <p className="text-text/70 text-sm">
              [...]
            </p>
          </FunSection>

          <FunSection title="Interested in">
            <p className="text-text/70 text-sm">
              [...]
            </p>
          </FunSection>

        </div>
      </article>
    </>
  )
}

function FunSection({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="font-serif text-heading text-lg font-normal">{title}</h2>
      <div>{children}</div>
    </section>
  )
}

function ReadingItem({ title, author, status, description, href }) {
  return (
    <li className="space-y-1.5 border-b border-border pb-4">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="link text-sm font-medium"
          >
            {title}
          </a>
          <span className="text-muted text-sm ml-2">by {author}</span>
        </div>
        <span className={`text-xs shrink-0 ${status === 'reading' ? 'text-accent' : 'text-muted'}`}>
          {status === 'reading' ? 'reading now' : 'finished'}
        </span>
      </div>
      {description && (
        <p className="text-text/60 text-sm leading-relaxed">{description}</p>
      )}
    </li>
  )
}