import Reveal from './Reveal'

const accentText = {
  violet: 'text-violet',
  blue: 'text-blue',
  cyan: 'text-cyan',
  emerald: 'text-emerald',
  amber: 'text-amber',
}

const accentBg = {
  violet: 'bg-violet-soft text-violet',
  blue: 'bg-blue-soft text-blue',
  cyan: 'bg-cyan-soft text-cyan',
  emerald: 'bg-emerald-soft text-emerald',
  amber: 'bg-amber-soft text-amber',
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
  accent = 'violet',
  align = 'left',
}) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : 'text-left'}>
      <div
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-mono font-medium tracking-wide ${accentBg[accent]}`}
      >
        <span aria-hidden="true">$</span>
        <span>{eyebrow}</span>
      </div>

      <div
        className={`mt-4 flex items-center gap-3 ${
          align === 'center' ? 'justify-center' : 'justify-start'
        }`}
      >
        {Icon && (
          <span
            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-elevated ${accentText[accent]}`}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">{title}</h2>
      </div>

      {description && (
        <p
          className={`mt-3 max-w-2xl text-muted ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
