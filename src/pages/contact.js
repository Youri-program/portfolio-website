import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Youri van der Meulen</title>
      </Head>

      <article className="space-y-10">
        <header className="space-y-3">
          <h1 className="font-serif text-heading text-3xl font-normal">Contact</h1>
          <p className="text-muted text-sm leading-relaxed max-w-sm">
            I'm always open to interesting conversations, collaboration, or just a good question.
          </p>
        </header>

        <div className="space-y-6 text-[15px]">
          <div className="space-y-4">
            <ContactRow label="Email" value="yourivandermeulen@proton.me" href="mailto:yourivandermeulen@proton.me" />
            <ContactRow label="LinkedIn" value="my profile" href="https://linkedin.com/in/youri-van-der-meulen-593180223" />
            <ContactRow label="GitHub" value="github.com/Youri-program" href="https://github.com/Youri-program" />
          </div>

          <hr className="border-border" />

          <p className="text-muted text-sm leading-relaxed">
            For anything serious, email is best. I try to respond within a few days.
          </p>
        </div>
      </article>
    </>
  )
}

function ContactRow({ label, value, href }) {
  return (
    <div className="flex items-baseline gap-6 border-b border-border pb-4">
      <span className="text-muted text-sm w-20 shrink-0">{label}</span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="link text-sm"
      >
        {value}
      </a>
    </div>
  )
}
