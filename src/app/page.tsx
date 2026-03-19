"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Acadeva",
    description:
      "A scheduling platform that turns messy student timetables into a single, shareable flow.",
    problem:
      "Students lost time comparing schedules across chats and screenshots.",
    role: "Software engineering",
    tech: ["Next.js", "Mobile", "Node.js"],
    result: "Reduced scheduling time from hours to minutes for pilot groups.",
  },
  {
    title: "UNIUYO SUG Website",
    description:
      "A live operations dashboard for triage, staff availability, and patient queues.",
    problem:
      "Clinic leads lacked a single source of truth during high traffic days.",
    role: "UX, data modeling, UI build",
    tech: ["React", "Chakra UI"],
    result: "Enabled faster handoffs and real-time staffing decisions.",
  },
  {
    title: "Rhubarb GUI",
    description:
      "An internal design system focused on consistency and speed for small teams.",
    problem: "Design decisions drifted across projects and slowed delivery.",
    role: "Design systems lead",
    tech: ["Python", "PyQt5", "GUI"],
    result: "Cut UI build time by 35 percent across two teams.",
  },
];

const skills = {
  "Frontend/Mobile": [
    "Next.js",
    "React",
    "Tailwind",
    "Ionic",
    "Capacitor",
    "Chakra UI",
  ],
  Backend: ["Node", "Flask", "Firebase", "REST", "Go"],
  Tools: ["Git", "GitHub", "Firebase", "Docker", "OpenRouter"],
  "AI/ML": ["Prompt engineering", "RAG", "Agentic AI Design"],
};

const achievements = [
  {
    title: "DevEast Business Pitch",
    time: "2025 • 1st runner up",
    summary:
      "Pitched Acadeva, a comprehensive platform where uni students can find sstudy materials.",
  },
  {
    title: "Avalanche Team1 BUIDLCAMP",
    time: "2025 • 1st runner up",
    summary:
      "Built AvaBid, an NFT bidding platform that allows users to place bids on NFTs.",
  },
  {
    title: "GDGoC UNIUYO Tech Ignite",
    time: "2024 • 1st & 2nd Place",
    summary:
      "Built 2 AI study tools: An Quiz generator from PDFs and an interactive AI study platform.",
  },
];

const experience = [
  {
    title: "IT Support Personnel",
    time: "2026",
    company: "ECEWS",
    summary:
      "Ship end-to-end products for education and health startups, from discovery to launch.",
  },
  {
    title: "Dev Co Lead",
    time: "2025 - Present",
    company: "GDGoC UNIUYO",
    summary:
      "Led two zero-to-one MVPs focused on student productivity and community tools.",
  },
  {
    title: "Software Developer",
    time: "2024 - Present",
    company: "Acadeva Limited",
    summary:
      "Design and docs contributions for tools used by early-stage teams.",
  },
];

const certifications = [
  {
    title: "AI Literacy",
    summary: "IBM SkillsBuild",
  },
  {
    title: "Start-up Team Member",
    summary: "Hult Prize",
  },
  {
    title: "IGCSE",
    summary: "Cambridge Assessment International Education",
  },
];

const thoughts = [
  {
    title: "Why speed matters more than polish",
    summary: "A framework for shipping fast without losing craft.",
  },
  {
    title: "Designing for real constraints",
    summary: "Notes on building for mobile-first audiences in Africa.",
  },
  {
    title: "AI tools that actually stick",
    summary: "What makes an automation product feel trustworthy.",
  },
];

const contacts = [
  {
    label: "Email",
    value: "emmanuel@acadeva.xyz",
    href: "mailto:emmanuel@acadeva.xyz",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/emmanuelekopimo",
    href: "https://linkedin.com/in/emmanuelekopimo",
  },
  {
    label: "GitHub",
    value: "github.com/emmanuelekopimo",
    href: "https://github.com/emmanuelekopimo",
  },
  {
    label: "Twitter",
    value: "@emmanuelekopimo",
    href: "https://twitter.com/emmanuelekopimo",
  },
];

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".hero-chip", {
        opacity: 0,
        y: 12,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.4,
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 36,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            once: true,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen">
      <main className="mx-auto w-full max-w-6xl px-6">
        <section className="pb-16 pt-16 md:pt-24">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="mt-10 flex h-20 w-20 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-xl font-semibold text-[var(--ink)] shadow-[0_20px_40px_rgba(12,17,22,0.08)]">
              E
            </div>

            <div className="mt-8 space-y-4">
              <p className="hero-line text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
                Software Developer
              </p>
              <h1 className="hero-line font-display text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
                Emmanuel Akpan
              </h1>
              <p className="hero-line text-lg text-[var(--muted)]">
                Creating focused tools with sharp UX and reliable systems.
                <span className="mt-2 block">
                  University by day, product builder by night.
                </span>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                className="hero-chip rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent)]"
                href="#contact"
              >
                Hire Me
              </a>
              <span className="hero-chip inline-flex items-center gap-2 rounded-full bg-[var(--accent-strong)]/15 px-6 py-3 text-sm font-semibold text-[var(--accent)]">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                Available for new projects
              </span>
            </div>
          </div>
        </section>

        <section className="reveal grid gap-8 border-t border-[var(--line)] py-16 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
              About
            </p>
            <h2 className="mt-4 font-display text-3xl text-[var(--ink)]">
              Focused on products with real stakes.
            </h2>
          </div>
          <div className="space-y-4 text-[var(--muted)]">
            <p>
              I am a product-minded engineer who combines UX clarity with system
              thinking. My niche is translating messy workflows into crisp
              experiences that people trust.
            </p>
            <p>
              I care about speed, but never at the cost of reliability. The work
              is driven by the belief that well-designed tools create momentum
              for teams and communities.
            </p>
          </div>
        </section>

        <section
          id="projects"
          className="reveal border-t border-[var(--line)] py-16"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Projects
              </p>
              <h2 className="mt-3 font-display text-3xl text-[var(--ink)]">
                The work that makes the case.
              </h2>
            </div>
            <span className="text-sm text-[var(--muted)]">/ 03</span>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6"
              >
                <div>
                  <h3 className="font-display text-2xl text-[var(--ink)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {project.description}
                  </p>
                </div>
                <div className="space-y-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  <p>
                    <span className="text-[var(--ink)] font-bold">Problem</span>{" "}
                    {project.problem}
                  </p>
                  <p>
                    <span className="text-[var(--ink)] font-bold">Role</span>{" "}
                    {project.role}
                  </p>
                  <p>
                    <span className="text-[var(--ink)] font-bold">Result</span>{" "}
                    {project.result}
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="reveal border-t border-[var(--line)] py-16"
        >
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Skills
              </p>
              <h2 className="mt-3 font-display text-3xl text-[var(--ink)]">
                Stack I can defend in a room.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {Object.entries(skills).map(([group, items]) => (
                <div
                  key={group}
                  className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                    {group}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="achievements"
          className="reveal border-t border-[var(--line)] py-16"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Achievements
              </p>
              <h2 className="mt-3 font-display text-3xl text-[var(--ink)]">
                Real work, real shipping.
              </h2>
            </div>
            <span className="text-sm text-[var(--muted)]">/ 06</span>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {item.time}
                </p>
                <h3 className="mt-3 font-display text-xl text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="reveal border-t border-[var(--line)] py-16"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Experience
              </p>
              <h2 className="mt-3 font-display text-3xl text-[var(--ink)]">
                Real work, real shipping.
              </h2>
            </div>
            <span className="text-sm text-[var(--muted)]">/ 06</span>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {experience.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {item.time}
                </p>
                <h3 className="mt-3 font-display text-xl text-[var(--ink)]">
                  {item.title}
                </h3>
                <h3 className="mt-0 font-display text-xl text-xs">
                  {item.company}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal border-t border-[var(--line)] py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Certifications
              </p>
              <h2 className="mt-3 font-display text-3xl text-[var(--ink)]">
                Writing to show how I think.
              </h2>
            </div>
            <span className="text-sm text-[var(--muted)]">/ 03</span>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {certifications.map((post) => (
              <div
                key={post.title}
                className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6"
              >
                <h3 className="font-display text-xl text-[var(--ink)]">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {post.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal border-t border-[var(--line)] py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Thoughts
              </p>
              <h2 className="mt-3 font-display text-3xl text-[var(--ink)]">
                Writing to show how I think.
              </h2>
            </div>
            <span className="text-sm text-[var(--muted)]">/ 03</span>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {thoughts.map((post) => (
              <div
                key={post.title}
                className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6"
              >
                <h3 className="font-display text-xl text-[var(--ink)]">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {post.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="reveal border-t border-[var(--line)] py-16"
        >
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Contact
              </p>
              <h2 className="mt-3 font-display text-3xl text-[var(--ink)]">
                Make it easy to reach me.
              </h2>
              <p className="mt-4 text-sm text-[var(--muted)]">
                Open to collaborations, product partnerships, and focused
                builds.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-5 py-6 transition hover:border-transparent hover:bg-[var(--ink)] hover:text-white"
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    {contact.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold">{contact.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal mb-20 rounded-[32px] border border-[var(--line)] bg-[var(--surface)] px-6 py-12 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Call to Action
              </p>
              <h2 className="mt-3 font-display text-3xl text-[var(--ink)]">
                Lets build something important.
              </h2>
            </div>
            <a
              className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[var(--ink)]"
              href="mailto:emmanuel@acadeva.xyz"
            >
              Start a project
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] py-10 text-center text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
        Built for clarity, speed, and trust.
      </footer>
    </div>
  );
}
