import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About — Youri van der Meulen</title>
        <meta
          name="description"
          content="Data Science & AI student with a background in software development, interested in edge AI, computer vision, and defense applications."
        />
      </Head>

      <article className="space-y-12">
        <header className="space-y-3">
          <h1 className="font-serif text-heading text-3xl font-normal">About</h1>
          <p className="text-muted text-sm leading-relaxed max-w-md">
            Data Science & AI student, software developer, and systems thinker.
          </p>
        </header>

        {/* Interests */}
        <section className="space-y-4">
          <h2 className="font-serif text-heading text-lg font-normal">Interests</h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-text/80">
            <p>
              My academic interests lie in Artificial Intelligence and Data Science,
              particularly in the development of intelligent systems that can support
              complex decision-making and real-world operations. I am especially interested
              in the intersection of AI and engineering, where data-driven algorithms are
              integrated into physical systems such as edge devices, embedded platforms,
              and autonomous technologies.
            </p>
            <p>
              Areas such as computer vision, sensor data processing, and AI-enabled systems
              operating in real-world environments particularly motivate me. Within the
              defense and security domain, I find the application of these technologies
              compelling — they can enhance situational awareness, autonomy, and operational
              effectiveness in ways that genuinely matter.
            </p>
            <p>
              For my internship, I want to work on projects that combine AI with hands-on
              engineering solutions, contributing to the development of practical, real-world
              systems while further strengthening my technical skills.
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* Education */}
        <section className="space-y-6">
          <h2 className="font-serif text-heading text-lg font-normal">Education</h2>
          <div className="space-y-8">
            <EducationItem
              degree="Applied Data Science & Artificial Intelligence"
              level="Bachelor of Science"
              institution="Zuyd University of Applied Sciences"
              location="Maastricht"
              period="2024 — present"
              description="After completing my studies in software development, I began a new journey in Applied Data Science & AI to advance my knowledge of machine learning, data analysis, and AI-based solutions. This program builds on my coding background and deepens my preparation for the development of intelligent systems — with the explicit intention to apply these skills in actual, real-world environments."
            />
            <EducationItem
              degree="Software Development MBO 4"
              level="Cum Laude"
              institution="Vista College"
              location="Heerlen"
              period="2020 — 2024"
              description="A specialist four-year programme focused on the full software development lifecycle. Covered languages and tools including Python, JavaScript, C#, and SQL, alongside professional skills and Agile methodology. Graduated cum laude."
            />
          </div>
        </section>

        <hr className="border-border" />

        {/* Experience */}
        <section className="space-y-6">
          <h2 className="font-serif text-heading text-lg font-normal">Experience</h2>
          <div className="space-y-8">
            <ExperienceItem
              title="Software Developer Intern"
              company="Kembit"
              period="Aug 2022 — Jul 2023"
              description="Worked on a real-time monitoring tool for catching and routing errors across multiple platforms. The stack included .NET Core, TypeScript, Azure DevOps, and Docker. The team operated in Scrum, with weekly sprints and structured code reviews — my first experience building production software in a professional engineering environment."
            />
          </div>
        </section>

        <hr className="border-border" />

        {/* Skills — focused on two core areas */}
        <section className="space-y-5">
          <h2 className="font-serif text-heading text-lg font-normal">Skills</h2>
          <p className="text-muted text-sm leading-relaxed max-w-md">
            Two areas where I've invested the most depth — the rest is supporting context.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">

            <SkillGroup
              label="Computer Vision & Edge AI"
              description="Deploying inference on constrained hardware is where I've spent the most time. From model selection to TensorRT optimisation to live streaming — the full pipeline, not just the notebook."
              skills={[
                { name: 'YOLO (v5, v11)', level: 'confident' },
                { name: 'OpenCV', level: 'confident' },
                { name: 'TensorRT optimisation', level: 'working' },
                { name: 'NVIDIA Jetson / Edge deployment', level: 'working' },
                { name: 'WebRTC (live video streaming)', level: 'working' },
                { name: 'Docker & containerisation', level: 'confident' },
              ]}
            />

            <SkillGroup
              label="Full-Stack Development"
              description="A solid engineering foundation built over four years of study and a year of professional internship. I can build, deploy, and maintain production-grade applications end to end."
              skills={[
                { name: 'JavaScript / TypeScript', level: 'confident' },
                { name: 'React & Next.js', level: 'confident' },
                { name: 'Java Spring (MVC, Security, JPA)', level: 'confident' },
                { name: 'REST API design', level: 'confident' },
                { name: 'CI/CD (GitHub Actions, Azure DevOps)', level: 'working' },
                { name: 'AWS & Azure cloud deployment', level: 'working' },
              ]}
            />

          </div>

          {/* Supporting skills note */}
          <p className="text-muted text-xs leading-relaxed pt-2 border-t border-border">
            Supporting experience in: Python & ML (CatBoost, LightGBM, TensorFlow), data engineering
            (PostgreSQL, Citus, ETL pipelines), and security compliance (GDPR, ISO 27799).
          </p>
        </section>

      </article>
    </>
  )
}

function EducationItem({ degree, level, institution, location, period, description }) {
  return (
    <div className="space-y-2">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-text font-medium text-[15px]">{degree}</p>
          <p className="text-accent text-xs mt-0.5">{level}</p>
          <p className="text-muted text-sm">{institution} · {location}</p>
        </div>
        <span className="text-muted text-xs shrink-0 mt-0.5 text-right">{period}</span>
      </div>
      <p className="text-text/70 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function ExperienceItem({ title, company, period, description }) {
  return (
    <div className="space-y-2">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-text font-medium text-[15px]">{title}</p>
          <p className="text-muted text-sm">{company}</p>
        </div>
        <span className="text-muted text-xs shrink-0 mt-0.5 text-right">{period}</span>
      </div>
      <p className="text-text/70 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function SkillGroup({ label, description, skills }) {
  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <p className="text-text text-sm font-medium">{label}</p>
        <p className="text-muted text-xs leading-relaxed">{description}</p>
      </div>
      <ul className="space-y-1.5">
        {skills.map(({ name, level }) => (
          <li key={name} className="flex items-center justify-between border-b border-border/50 pb-1.5">
            <span className="text-text/80 text-sm">{name}</span>
            <span className={`text-xs ${level === 'confident' ? 'text-accent' : 'text-muted'}`}>
              {level === 'confident' ? 'proficient' : 'working knowledge'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}