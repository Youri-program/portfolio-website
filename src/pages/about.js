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

        {/* Skills */}
        <section className="space-y-5">
          <h2 className="font-serif text-heading text-lg font-normal">Skills & Tools</h2>
          <div className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2">
            <SkillGroup label="AI & Data Science" skills={['Python', 'Machine Learning', 'CatBoost / LightGBM / XGBoost', 'TensorFlow / Keras', 'Computer Vision (YOLO, OpenCV)', 'Data Engineering & ETL']} />
            <SkillGroup label="Infrastructure & Cloud" skills={['AWS (Lambda, DynamoDB, S3, Cognito)', 'Azure & Azure DevOps', 'Docker & Docker Compose', 'PostgreSQL / Citus', 'CI/CD (GitHub Actions)']} />
            <SkillGroup label="Software Development" skills={['JavaScript / TypeScript', 'React & Next.js', 'Java Spring (MVC, Security, JPA)', '.NET Core / C#', 'REST API design', 'Git & GitHub']} />
            <SkillGroup label="Embedded & Edge" skills={['NVIDIA Jetson Orin Nano', 'TensorRT optimisation', 'WebRTC', 'Servo motor control', 'Edge AI deployment']} />
          </div>
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

function SkillGroup({ label, skills }) {
  return (
    <div className="space-y-2">
      <p className="text-muted text-xs uppercase tracking-widest">{label}</p>
      <ul className="space-y-1">
        {skills.map(skill => (
          <li key={skill} className="text-text/70 border-b border-border/50 pb-1">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}