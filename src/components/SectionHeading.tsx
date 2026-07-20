interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-slate-400">{description}</p> : null}
    </div>
  )
}
