import Head from 'next/head'
import Image from 'next/image'

const projects = [
  {
    id: 'raven',
    title: 'RAVEN',
    subtitle: 'Real-time Analytics & Vision Edge Network',
    year: '2025',
    tags: ['Computer Vision', 'Edge AI', 'YOLOv11', 'AWS', 'WebRTC', 'React', 'Docker'],
    summary:
      'An end-to-end real-time object detection and tracking system running on an NVIDIA Jetson Orin Nano edge device. Live video is streamed via WebRTC to a React dashboard backed by a serverless AWS cloud stack — all behind Cognito authentication.',
    highlights: [
      'YOLOv5 & YOLOv11 inference optimised with TensorRT on Jetson Orin Nano',
      'Peer-to-peer WebRTC video stream — no intermediate server, near-zero latency',
      'Serverless AWS backend: Lambda, DynamoDB, S3, API Gateway, Cognito',
      'Colour-coded live tracking UI designed for non-technical operators',
    ],
    why: "The most complete system I've built — edge inference, cloud integration, and a production UI in one deployed project. Directly reflects the architecture behind real-world surveillance and autonomous systems.",
    image: '/images/raven-hardware.png',
    imageAlt: 'RAVEN hardware setup — camera module on servo mount, Jetson Orin Nano, and LiPo battery',
  },
  {
    id: 'boostme',
    title: 'BoostMe',
    subtitle: 'ML-Driven Cycling Talent Prediction',
    year: '2025',
    tags: ['Machine Learning', 'CatBoost', 'LightGBM', 'XGBoost', 'TensorFlow', 'CRISP-DM'],
    summary:
      "A portfolio of ML models predicting whether a professional cyclist will finish in the top 30 of a race, built on 10 years of historical data for CAICLE's talent scouting pipeline.",
    highlights: [
      'Full CRISP-DM cycle on real, class-imbalanced race data',
      'Strict temporal cross-validation to prevent data leakage across seasons',
      'Recall-optimised model selection — missing talent is costlier than a false positive',
      'Deliberately rejected balanced accuracy as a metric; justified in client report',
    ],
    why: "What I'm most proud of here isn't the model accuracy — it's the decision to design evaluation around business cost rather than headline numbers. The same reasoning applies directly to high-stakes ML in defence or healthcare contexts.",
  },
  {
    id: 'myotrack',
    title: 'MyoTrack',
    subtitle: 'Remote CMAS Monitoring App for JDM Patients',
    year: '2024',
    tags: ['Java Spring', 'Azure', 'CI/CD', 'JWT', 'MySQL', 'Healthcare'],
    summary:
      'A clinically-validated web application enabling children with Juvenile Dermatomyositis to perform CMAS assessments at home, with a secure remote monitoring dashboard for their physicians — deployed on Azure.',
    highlights: [
      'Dual-interface design: accessible child app + secure clinician dashboard',
      'Role-based JWT authentication with GDPR compliance built in from day one',
      'Independent frontend/backend deployment pipelines via GitHub Actions',
      'Full test suite: 50 unit & integration tests with MockMvc and Testcontainers',
    ],
    why: 'Built for real patients with a real medical use case. The engineering decisions here — GDPR compliance, robust auth, independent deployment — reflect the standards required when software actually matters.',
  },
  {
    id: 'healthcare-de',
    title: 'Healthcare Data Engineering System',
    subtitle: 'Distributed, Compliant Analytics Platform',
    year: '2024',
    tags: ['PostgreSQL', 'Citus', 'ETL', 'Python', 'Docker', 'Elasticsearch', 'GDPR'],
    summary:
      'A distributed data engineering system for sensitive healthcare data — covering ETL pipelines, distributed PostgreSQL with Citus sharding, logging infrastructure, and a multi-framework security compliance policy. Built and benchmarked within 5 weeks.',
    highlights: [
      'PostgreSQL + Citus sharding by patient_id; ~4× faster on benchmarked analytical queries',
      'ISO 27799 violation audit: 8 violations identified, remediated, and documented',
      'Patient IDs pseudonymised with salted cryptographic hashing',
      'Logging stack: Vector + Elasticsearch + Kibana; replaced ELK after Filebeat/Logstash conflicts',
    ],
    why: "Data infrastructure is what ML systems actually run on. This project showed that compliance and engineering rigour aren't in tension — and that understanding both is what separates a data scientist from a data engineer.",
  },
]

function TagBadge({ label }) {
  return (
    <span className="text-xs px-2 py-0.5 rounded-sm bg-surface text-muted border border-border">
      {label}
    </span>
  )
}

function ProjectCard({ project }) {
  const { title, subtitle, year, tags, summary, highlights, why, image, imageAlt } = project

  return (
    <article className="border border-border hover:border-accent/30 rounded-sm transition-colors duration-200">
      {/* Optional project image */}
      {image && (
        <div className="relative w-full h-56 overflow-hidden rounded-t-sm border-b border-border bg-black">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover object-center opacity-90"
            sizes="(max-width: 768px) 100vw, 680px"
          />
        </div>
      )}

      {/* Header */}
      <div className="p-6 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-serif text-heading text-xl font-normal">{title}</h2>
            <p className="text-muted text-sm mt-0.5">{subtitle}</p>
          </div>
          <span className="text-muted text-xs shrink-0 mt-1">{year}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map(tag => <TagBadge key={tag} label={tag} />)}
        </div>

        {/* Summary */}
        <p className="text-text/80 text-sm leading-relaxed pt-1">{summary}</p>
      </div>

      {/* Divider */}
      <div className="border-t border-border mx-6" />

      {/* Highlights + why */}
      <div className="p-6 space-y-4">
        <ul className="space-y-1.5">
          {highlights.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm text-text/70 leading-relaxed">
              <span className="text-accent mt-0.5 shrink-0">–</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="text-xs text-muted leading-relaxed border-l-2 border-accent/30 pl-3 italic">
          {why}
        </p>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects — Youri van der Meulen</title>
        <meta
          name="description"
          content="A selection of DS & AI projects — from edge inference systems to distributed data pipelines."
        />
      </Head>

      <article className="space-y-10">
        <header className="space-y-3">
          <h1 className="font-serif text-heading text-3xl font-normal">Projects</h1>
          <p className="text-muted text-sm leading-relaxed max-w-md">
            Four projects spanning the full AI stack — from data infrastructure to deployed
            edge systems. More on{' '}
            <a
              href="https://github.com/Youri-program"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              GitHub
            </a>.
          </p>
        </header>

        <div className="space-y-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </article>
    </>
  )
}