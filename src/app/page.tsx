import { BlogPostsPreview } from "@/components/blog-posts-preview";
import { HeroAnimations } from "@/components/hero-animations";
import "remixicon/fonts/remixicon.css";

const projects = [
  {
    title: "Acadeva",
    description:
      "A student workspace that combines study materials, scheduling, and collaboration into one connected system.",
    problem:
      "Students relied on scattered tools like chats, PDFs, and timetables that didn’t work together.",
    role: "Full-stack development and product design",
    tech: ["Next.js", "Mobile", "Node.js"],
    result:
      "Reduced fragmentation by unifying study resources and scheduling into a single workflow.",
    url: "https://acadeva.xyz",
    urlType: "web",
  },
  {
    title: "Rhubarb GUI",
    description:
      "A desktop GUI for Rhubarb Lip Sync that simplifies generating lip sync data from audio files.",
    problem:
      "Rhubarb Lip Sync is CLI-based, making it harder to use, configure, and monitor for non-technical users.",
    role: "Desktop application development and UX design",
    tech: ["Python", "PyQt5", "GUI"],
    result:
      "Made lip sync processing more accessible with command preview, progress tracking, and flexible export options.",
    url: "https://github.com/emmanuelekopimo/rhubarb-gui",
    urlType: "github",
  },
  {
    title: "UNIUYO SUG Website",
    description:
      "A centralized platform for student union updates, announcements, and communication across the University of Uyo.",
    problem:
      "Students had no single reliable source for timely and consistent union information.",
    role: "Frontend development and UI design",
    tech: ["React", "Chakra UI"],
    result:
      "Improved access to updates and created a more consistent and accessible digital presence for the SUG.",
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
    image: "/images/emmanuel-and-joe-deveast-2025.jpg",
    url: "https://leadership.ng/varsity-students-pitch-innovations-at-2025-entrepreneurship-week/",
  },
  {
    title: "Avalanche Team1 BUIDLCAMP",
    time: "2025 • 1st runner up",
    summary:
      "Built AvaBid, an NFT bidding platform that allows users to place bids on NFTs.",
    image: "/images/emmanuel-surge-aces-week-2025.jpg",
  },
  {
    title: "GDGoC UNIUYO Tech Ignite",
    time: "2024 • 1st & 2nd Place",
    summary:
      "Built 2 AI study tools: An Quiz generator from PDFs and an interactive AI study platform.",
    image: "/images/emmanuel-and-joe-techignite-2024.jpg",
  },
];

const experience = [
  {
    title: "IT Support Personnel",
    time: "2026 - Present",
    company: "ECEWS",
    logo: "/images/ecews-logo.jfif",
    url: "https://www.linkedin.com/company/ecewsng",
    summary:
      "Maintained IT infrastructure for a Nigerian NGO delivering healthcare, education, and economic empowerment programs.",
  },
  {
    title: "Dev Co Lead",
    time: "2025 - Present",
    company: "GDGoC UNIUYO",
    logo: "/images/gdgoc-logo.png",
    url: "https://www.linkedin.com/company/gdscuniuyo/",
    summary:
      "Co-led a Google-backed student developer community, organizing tech workshops and events at UNIUYO.",
  },
  {
    title: "Software Developer",
    time: "2024 - Present",
    company: "Acadeva Limited",
    logo: "/images/acadeva-logo.png",
    url: "https://www.linkedin.com/company/acadeva",
    summary:
      "Developed features for an AI-powered academic platform serving Nigerian students with study tools.",
  },
];

const certifications = [
  {
    title: "AI Literacy",
    summary: "IBM SkillsBuild",
  },
  {
    title: "AI Fundamentals",
    summary: "IBM SkillsBuild",
  },
  {
    title: "IGCSE",
    summary: "Cambridge Assessment International Education",
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
  return (
    <HeroAnimations>
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
              </p>
            </div>
          </div>
        </section>

        <section className="reveal grid gap-8 border-t border-[var(--line)] py-16 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
              About
            </p>
            <h2 className="mt-4 font-display text-2xl leading-tight text-[var(--ink)] sm:text-3xl">
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
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Projects
              </p>
              <h2 className="mt-3 font-display text-2xl leading-tight text-[var(--ink)] sm:text-3xl">
                Where ideas turn into shipped results.
              </h2>
            </div>
            <span className="hidden text-sm text-[var(--muted)] md:block">
              / 01
            </span>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-2xl text-[var(--ink)]">
                      {project.title}
                    </h3>
                    {project.url && project.urlType === "web" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                        title={project.url}
                      >
                        <i className="ri-global-line text-xl"></i>
                      </a>
                    )}
                    {project.url && project.urlType === "github" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                        title={project.url}
                      >
                        <i className="ri-github-fill text-xl"></i>
                      </a>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {project.description}
                  </p>
                </div>
                <div className="space-y-3 text-sm text-[var(--muted)]">
                  <p>
                    <span className="text-[var(--ink)] font-semibold">
                      Problem
                    </span>{" "}
                    {project.problem}
                  </p>
                  <p>
                    <span className="text-[var(--ink)] font-semibold">
                      Role
                    </span>{" "}
                    {project.role}
                  </p>
                  <p>
                    <span className="text-[var(--ink)] font-semibold">
                      Result
                    </span>{" "}
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
              <h2 className="mt-3 font-display text-2xl leading-tight text-[var(--ink)] sm:text-3xl">
                My working stack for building reliable software.
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
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Achievements
              </p>
              <h2 className="mt-3 font-display text-2xl leading-tight text-[var(--ink)] sm:text-3xl">
                Notable wins and measurable impact.
              </h2>
            </div>
            <span className="hidden text-sm text-[var(--muted)] md:block">
              / 02
            </span>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)]"
              >
                <div
                  className="h-48 overflow-hidden"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="border-t border-[var(--line)] p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    {item.time}
                  </p>
                  <h3 className="mt-3 font-display text-xl text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {item.summary}
                  </p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      className="mt-4 inline-block text-sm text-[var(--accent)] hover:text-[var(--accent-strong)] transition-colors"
                    >
                      Read News
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="reveal border-t border-[var(--line)] py-16"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Experience
              </p>
              <h2 className="mt-3 font-display text-2xl leading-tight text-[var(--ink)] sm:text-3xl">
                Real work, real shipping.
              </h2>
            </div>
            <span className="hidden text-sm text-[var(--muted)] md:block">
              / 03
            </span>
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
                <div className="mt-3 flex items-start gap-3">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="h-12 w-12 flex-shrink-0 object-contain"
                  />
                  <div className="flex flex-col">
                    <h3 className="font-display text-xl text-[var(--ink)]">
                      {item.title}
                    </h3>
                    <a
                      href={item.url}
                      target="_blank"
                      className="mt-0 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-strong)] transition-colors"
                    >
                      {item.company}
                    </a>
                  </div>
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal border-t border-[var(--line)] py-16">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Certifications
              </p>
              <h2 className="mt-3 font-display text-2xl leading-tight text-[var(--ink)] sm:text-3xl">
                Credentials that back my technical abilities.
              </h2>
            </div>
            <span className="hidden text-sm text-[var(--muted)] md:block">
              / 04
            </span>
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

        <BlogPostsPreview />

        <section
          id="contact"
          className="reveal border-t border-[var(--line)] py-16"
        >
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Contact
              </p>
              <h2 className="mt-3 font-display text-2xl leading-tight text-[var(--ink)] sm:text-3xl">
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
                  className="group rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-5 py-6 transition hover:border-[var(--accent)]"
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    {contact.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--ink)]">
                    {contact.value}
                  </p>
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
              <h2 className="mt-3 font-display text-2xl leading-tight text-[var(--ink)] sm:text-3xl">
                Lets build something important.
              </h2>
            </div>
            <a
              className="inline-flex whitespace-nowrap rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-md transition hover:bg-[var(--accent-strong)] hover:shadow-lg"
              href="mailto:emmanuel@acadeva.xyz"
            >
              Start a project
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] py-10 text-center text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
        © {new Date().getFullYear()} Emmanuel Akpan
      </footer>
    </HeroAnimations>
  );
}
