import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import {
  activities,
  education,
  experience,
  professionalSkills,
  profile,
  projects,
  technicalSkills,
} from "./content";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent text-foreground">
      <NavBar />
      <div className="container-page pt-24 pb-16">
        <HeroSection />

        <section id="about" className="scroll-mt-24 mt-16">
          <h2 className="border-b border-[color:var(--border)] pb-2 text-2xl font-semibold tracking-tight text-[color:var(--primary)]">
            About
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[color:var(--muted)]">
            {profile.headline}
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-[color:var(--muted)]">
            {profile.summary}
          </p>
        </section>

        <section id="experience" className="scroll-mt-24 mt-16">
          <h2 className="border-b border-[color:var(--border)] pb-2 text-2xl font-semibold tracking-tight text-[color:var(--primary)]">
            Experience
          </h2>
          <div className="mt-6 space-y-8">
            {experience.map((job) => (
              <article key={`${job.company}-${job.role}`} className="card p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="text-[color:var(--muted)]">{job.company}</p>
                  </div>
                  <p className="text-sm text-[color:var(--muted)]">
                    {job.start} – {job.end}
                  </p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[color:var(--muted)]">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <h3 className="mt-12 text-xl font-semibold text-foreground">
            Leadership & extracurricular
          </h3>
          <div className="mt-4 space-y-6">
            {activities.map((a) => (
              <article key={`${a.organization}-${a.title}`} className="card p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{a.title}</h4>
                    <p className="text-[color:var(--muted)]">{a.organization}</p>
                  </div>
                  <p className="text-sm text-[color:var(--muted)]">
                    {a.start} – {a.end}
                  </p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[color:var(--muted)]">
                  {a.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 mt-16">
          <h2 className="border-b border-[color:var(--border)] pb-2 text-2xl font-semibold tracking-tight text-[color:var(--primary)]">
            Technical skills
          </h2>
          <div className="mt-6 space-y-8">
            {Object.entries(technicalSkills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--accent)]">
                  {category}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-[color:var(--border)] bg-[color:var(--card-strong)] px-3 py-1 text-sm text-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-[color:var(--accent)]">
            Professional skills
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {professionalSkills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-1 text-sm"
              >
                {s}
              </li>
            ))}
          </ul>
        </section>

        <section id="education" className="scroll-mt-24 mt-16">
          <h2 className="border-b border-[color:var(--border)] pb-2 text-2xl font-semibold tracking-tight text-[color:var(--primary)]">
            Education
          </h2>
          <ul className="mt-6 space-y-4">
            {education.map((e) => (
              <li key={e.institution} className="card p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="font-semibold">{e.institution}</p>
                  {e.years ? (
                    <p className="text-sm text-[color:var(--muted)]">{e.years}</p>
                  ) : null}
                </div>
                <p className="text-[color:var(--muted)]">{e.qualification}</p>
                {e.details ? (
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    {e.details}
                  </p>
                ) : null}
                {e.bullets?.length ? (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[color:var(--muted)]">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="scroll-mt-24 mt-16">
          <h2 className="border-b border-[color:var(--border)] pb-2 text-2xl font-semibold tracking-tight text-[color:var(--primary)]">
            Projects
          </h2>
          <ul className="mt-6 space-y-6">
            {projects.map((p) => (
              <li key={p.title} className="card p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold">{p.title}</h3>
                  {p.period ? (
                    <p className="text-sm text-[color:var(--muted)]">{p.period}</p>
                  ) : null}
                </div>
                {p.tags?.length ? (
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-md bg-[color:var(--accent-soft)] px-2 py-0.5 text-xs font-medium text-[color:var(--primary)]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[color:var(--muted)]">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="scroll-mt-24 mt-16">
          <h2 className="border-b border-[color:var(--border)] pb-2 text-2xl font-semibold tracking-tight text-[color:var(--primary)]">
            Contact
          </h2>
          <ul className="mt-6 space-y-2 text-[color:var(--muted)]">
            <li>
              <a
                className="underline decoration-[color:var(--accent)] underline-offset-4 hover:text-[color:var(--primary)]"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a
                className="underline decoration-[color:var(--accent)] underline-offset-4 hover:text-[color:var(--primary)]"
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
