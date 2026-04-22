import React from 'react'

const SOCIALS = [
  {
    label: 'Email',
    hint: 'Start a thread',
    value: 'devkraftosolutions@gmail.com',
    href: 'mailto:devkraftosolutions@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path
          d="M4 6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v10.5A2.75 2.75 0 0 1 17.25 20H6.75A2.75 2.75 0 0 1 4 17.25V6.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.9"
        />
        <path
          d="M7 8l5 4 5-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    hint: 'Company profile',
    value: 'DevKrafto Solutions',
    href: 'https://www.linkedin.com/company/devkrafto-solutions/',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path
          d="M6.5 9.5V18"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M6.5 6.75h.01"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M10.25 18v-5.05c0-1.63.98-2.73 2.52-2.73 1.46 0 2.23.99 2.23 2.83V18"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.25 11.2V18"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d="M18.8 4H5.2A1.2 1.2 0 0 0 4 5.2v13.6A1.2 1.2 0 0 0 5.2 20h13.6a1.2 1.2 0 0 0 1.2-1.2V5.2A1.2 1.2 0 0 0 18.8 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.35"
        />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    hint: 'Latest visuals',
    value: '@devkrafto',
    href: 'https://www.instagram.com/devkrafto/',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path
          d="M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.9"
        />
        <path
          d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M17.5 6.7h.01"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

export default function SocialSection() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-10 flex flex-col gap-3">
          <div className="text-[10px] font-black uppercase tracking-[0.32em] text-[color:var(--muted)]">
            Connect
          </div>
          <h3 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-black tracking-tight text-[color:var(--fg)]">
            LinkedIn. Instagram. Email.
          </h3>
          <p className="max-w-2xl text-sm md:text-base text-[color:var(--muted)]">
            Pick your channel — we respond fast when the mission is clear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.external ? '_blank' : undefined}
              rel={s.external ? 'noreferrer noopener' : undefined}
              className="group relative overflow-hidden rounded-3xl bg-[color:var(--card)] p-6 ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1"
              aria-label={s.label}
            >
              <div
                className="pointer-events-none absolute -inset-24 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(closest-side, color-mix(in oklab, var(--accent) 35%, transparent), transparent 70%)',
                }}
              />

              <div className="relative flex items-start gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-black/25 ring-1 ring-white/10 text-[color:var(--accent)]">
                  {s.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <div className="font-['Space_Grotesk'] text-lg font-black tracking-tight text-[color:var(--fg)]">
                      {s.label}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--muted)]">
                      {s.hint}
                    </span>
                  </div>
                  <div className="mt-2 truncate text-sm text-[color:var(--muted)]">{s.value}</div>
                </div>
              </div>

              <div className="relative mt-6 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.24em] text-[color:var(--fg)]">
                Open channel
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

