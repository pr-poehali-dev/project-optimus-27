import { useReveal } from "@/hooks/use-reveal"
import { useNavigate } from "react-router-dom"

const FAULTS = [
  {
    number: "01",
    title: "Холодильник не включается",
    category: "Подключён к сети, но не запускается полностью или частично",
    year: "Ø",
    direction: "left",
    slug: "not-turning-on",
  },
  {
    number: "02",
    title: "Камера не охлаждается",
    category: "Морозилка морозит, а в холодильной недостаточно холода",
    year: "+5°",
    direction: "right",
    slug: "fridge-not-cooling",
  },
  {
    number: "03",
    title: "Морозилка перестала морозить",
    category: "Холодильная охлаждает, а в морозильной не замораживает",
    year: "0°",
    direction: "left",
    slug: "freezer-not-freezing",
  },
  {
    number: "04",
    title: "Полностью не морозит",
    category: "Недостаточная температура для охлаждения и заморозки",
    year: "+15°",
    direction: "right",
    slug: "no-cooling-at-all",
  },
  {
    number: "05",
    title: "Перемораживает",
    category: "Сильно морозит, компрессор почти не отключается",
    year: "-30°",
    direction: "left",
    slug: null,
  },
  {
    number: "06",
    title: "В холодильнике скапливается вода",
    category: "В холодильнике или под ним начинает появляться и скапливаться талая вода",
    year: "💧",
    direction: "right",
    slug: null,
  },
  {
    number: "07",
    title: "Возникают странные звуки",
    category: "Бульканье, гудение, щелкание, треск или стук при работе холодильника",
    year: "🔊",
    direction: "left",
    slug: null,
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)
  const navigate = useNavigate()

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center overflow-y-auto px-6 py-24 md:px-12 md:py-16 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-6 transition-all duration-700 md:mb-10 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Неисправности
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Определите симптом — расскажите мастеру</p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {FAULTS.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              isVisible={isVisible}
              onClick={project.slug ? () => navigate(`/faults/${project.slug}`) : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
  onClick,
}: {
  project: { number: string; title: string; category: string; year: string; direction: string; slug: string | null }
  index: number
  isVisible: boolean
  onClick?: () => void
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  const Tag = onClick ? "button" : "div"

  return (
    <Tag
      onClick={onClick}
      className={`group flex w-full items-center justify-between gap-4 border-b border-foreground/10 py-3 text-left transition-all duration-700 md:py-4 ${
        onClick ? "hover:border-foreground/30" : "hover:border-foreground/20"
      } ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {project.number}
        </span>
        <div>
          <h3 className={`mb-1 font-sans text-xl font-light transition-all duration-300 md:text-2xl lg:text-3xl ${
            onClick
              ? "text-foreground group-hover:translate-x-2 group-hover:text-primary"
              : "text-foreground group-hover:translate-x-2"
          }`}>
            {project.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">{project.category}</p>
        </div>
      </div>
      <span className="font-mono text-xs text-foreground/30 md:text-sm">
        {onClick ? <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span> : null}
        {project.year}
      </span>
    </Tag>
  )
}