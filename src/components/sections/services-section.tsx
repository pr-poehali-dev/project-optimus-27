import { useReveal } from "@/hooks/use-reveal"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const SERVICES = [
  {
    slug: "home-fridges",
    icon: "Refrigerator",
    title: "Ремонт бытовых холодильников",
    description: "Все марки и модели домашних холодильников с выездом на дом",
    direction: "top",
  },
  {
    slug: "commercial-fridges",
    icon: "Store",
    title: "Ремонт торговых холодильников",
    description: "Витрины, лари и холодильное оборудование для магазинов",
    direction: "right",
  },
  {
    slug: "car-fridges",
    icon: "Car",
    title: "Ремонт автохолодильников",
    description: "Восстановление работы автомобильных холодильников",
    direction: "left",
  },
  {
    slug: "washing-machines",
    icon: "WashingMachine",
    title: "Ремонт стиральных машин",
    description: "Диагностика и ремонт стиральных машин любых брендов",
    direction: "bottom",
  },
  {
    slug: "air-conditioning",
    icon: "AirVent",
    title: "Сервис кондиционеров",
    description: "Заправка, чистка и ремонт кондиционеров и сплит-систем",
    direction: "top",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)
  const navigate = useNavigate()

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center overflow-y-auto px-6 py-24 md:px-12 md:py-16 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Услуги
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Что мы ремонтируем</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-x-16 md:gap-y-8 lg:grid-cols-3 lg:gap-x-12">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              index={i}
              isVisible={isVisible}
              onClick={() => navigate(`/services/${service.slug}`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
  onClick,
}: {
  service: { icon: string; title: string; description: string; direction: string }
  index: number
  isVisible: boolean
  onClick: () => void
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <button
      onClick={onClick}
      className={`group text-left transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
          <Icon name={service.icon} fallback="Wrench" size={24} />
        </div>
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-2xl font-light text-foreground transition-colors group-hover:text-primary md:text-3xl">
        {service.title}
      </h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">{service.description}</p>
      <span className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
        Подробнее <Icon name="ArrowRight" size={12} />
      </span>
    </button>
  )
}