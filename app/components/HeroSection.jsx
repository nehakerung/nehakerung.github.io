import Link from "next/link";
import { profile } from "../content";

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

const HeroSection = () => {
  return (
    <section id="top" className="scroll-mt-24">
      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card-strong)]/60 p-6 sm:p-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-12 sm:items-center">
          <div className="col-span-7 place-self-center text-center sm:place-self-start sm:text-left">
            <p className="text-sm font-medium uppercase tracking-wide text-[color:var(--accent)]">
              {profile.name}
            </p>
            <h1 className="mb-4 mt-2 text-4xl font-semibold tracking-tight text-[color:var(--foreground)] lg:text-5xl">
              {profile.headline}
            </h1>
            <p className="text-lg leading-relaxed text-[color:var(--muted)] lg:text-xl">
              {profile.summary}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <Link
                href={`mailto:${profile.email}`}
                className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Email me
              </Link>
              <Link
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-6 py-3 text-sm font-medium text-[color:var(--primary)] transition hover:bg-[color:var(--accent-soft)]"
              >
                LinkedIn
              </Link>
            </div>
          </div>
          <div className="col-span-5 place-self-center">
            <div
              className="mx-auto flex h-[220px] w-[220px] items-center justify-center rounded-full border-2 border-[color:var(--accent)] bg-gradient-to-br from-[color:var(--accent-soft)] to-[color:var(--card)] text-5xl font-semibold tracking-tight text-[color:var(--primary)] shadow-md lg:h-[300px] lg:w-[300px] lg:text-6xl"
              aria-hidden
            >
              {initials(profile.name)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
