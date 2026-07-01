import { Phone, MapPin, Building2, ChevronDown } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { useState, type FormEvent } from "react"
import { MagneticButton } from "@/components/magnetic-button"

const DISTRICTS: Record<string, { label: string; fee?: string; areas: string[] }[]> = {
  "Свердловский район": [
    {
      label: "Без комиссии за выезд",
      areas: [
        "Центральный район",
        "мкр. Громовский",
        "мкр. Островский",
        "мкр. Зелёное Хозяйство",
        "мкр. Краснова",
        "мкр. Октябрьский",
        "мкр. Крохалёва (Крохалевка)",
        "мкр. Юбилейный",
        "мкр. Южный",
        "мкр. Владимирский (Загарье)",
        "мкр. Липовая Гора",
      ],
    },
    {
      label: "Комиссия за выезд +500 руб.",
      fee: "+500 руб.",
      areas: ["мкр. Новые Ляды", "мкр. Ново-Бродовский"],
    },
  ],
  "Ленинский район": [
    {
      label: "Без комиссии за выезд",
      areas: [
        "Центральный район",
        "мкр. Разгуляй",
        "мкр. Городские горки",
        "мкр. Висим",
        "мкр. Мотовилиха",
      ],
    },
  ],
  "Индустриальный район": [
    {
      label: "Без комиссии за выезд",
      areas: [
        "мкр. Новоплоский",
        "мкр. Балатово",
        "мкр. Ераничи",
        "мкр. Авиагородок",
        "мкр. Нагорный",
        "мкр. Бахаревка",
        "мкр. Свиязева",
        "п. Верхние Муллы",
      ],
    },
    {
      label: "Комиссия за выезд +300 руб.",
      fee: "+300 руб.",
      areas: ["д. Хмели", "п. Субботино", "п. Осенцы"],
    },
  ],
  "Дзержинский район": [
    {
      label: "Без комиссии за выезд",
      areas: [
        "Центральный район",
        "мкр. Заимка",
        "мкр. Данилиха",
        "мкр. Староплоский",
        "мкр. Светлый",
        "мкр. Железнодорожный",
        "мкр. Парковый",
        "мкр. Красный Октябрь",
        "п. Заостровка",
      ],
    },
    {
      label: "Комиссия за выезд +200 руб.",
      fee: "+200 руб.",
      areas: [
        "мкр. Пролетарский",
        "мкр. Акуловский",
        "мкр. Комсомольский",
        "мкр. Заречный",
      ],
    },
  ],
  "Мотовилихинский район": [
    {
      label: "Без комиссии за выезд",
      areas: [
        "мкр. Горбуново",
        "мкр. Городские горки",
        "мкр. Ива",
        "мкр. Ивака",
        "мкр. Рабочий посёлок",
        "мкр. Садовый",
        "п. Хохловка",
      ],
    },
  ],
  "Орджоникидзевский район": [
    {
      label: "Комиссия за выезд +300 руб.",
      fee: "+300 руб.",
      areas: [
        "мкр. Чапаевский",
        "мкр. Камский",
        "мкр. Кислотные дачи",
        "мкр. Молодёжный (2 участок)",
        "мкр. КамГЭС",
        "мкр. Январский",
        "мкр. Домостроительный",
        "мкр. Лёвшино",
        "мкр. Новогайвинский",
        "мкр. Гайва",
      ],
    },
    {
      label: "Комиссия за выезд +500 руб.",
      fee: "+500 руб.",
      areas: ["мкр. Голованово", "п. Заозерье"],
    },
  ],
  "Кировский район": [
    {
      label: "Комиссия за выезд +300 руб.",
      fee: "+300 руб.",
      areas: [
        "мкр. Судзавод",
        "пос. Кировский",
        "мкр. Налимиха",
        "мкр. Старые Водники",
        "мкр. Новые Водники",
        "мкр. Закамск",
      ],
    },
    {
      label: "Комиссия за выезд +500 руб.",
      fee: "+500 руб.",
      areas: ["мкр. Крым"],
    },
  ],
  "Краснокамское направление": [
    {
      label: "Комиссия за выезд +500 руб.",
      fee: "+500 руб.",
      areas: ["г. Краснокамск", "п. Майский", "п. Оверята", "п. Октябрьский"],
    },
  ],
  "Юго-Камское направление": [
    {
      label: "Комиссия за выезд +500 руб.",
      fee: "+500 руб.",
      areas: ["п. Юго-Камский", "с. Насадка", "д. Гамово", "с. Фролы"],
    },
  ],
  "Кунгурское направление": [
    {
      label: "Комиссия за выезд +500 руб.",
      fee: "+500 руб.",
      areas: ["с. Лобаново", "с. Усть-Качка", "п. Сокол"],
    },
  ],
  "Сылвенское направление": [
    {
      label: "Комиссия за выезд +500 руб.",
      fee: "+500 руб.",
      areas: ["п. Сылва", "с. Троица", "п. Платошино"],
    },
  ],
  "Добрянское направление": [
    {
      label: "Комиссия за выезд +500 руб.",
      fee: "+500 руб.",
      areas: ["г. Добрянка", "п. Полазна", "п. Висим"],
    },
  ],
}

type FormData = {
  name: string
  phone: string
  district: string
  area: string
  problem: string
}

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    district: "",
    area: "",
    problem: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const districtGroups = formData.district ? DISTRICTS[formData.district] ?? [] : []
  const allAreas = districtGroups.flatMap((g) => g.areas)

  const handleDistrictChange = (val: string) => {
    setFormData((f) => ({ ...f, district: val, area: "" }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || !formData.district) return
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", phone: "", district: "", area: "", problem: "" })
    setTimeout(() => setSubmitSuccess(false), 6000)
  }

  const selectClass =
    "w-full border-b border-foreground/30 bg-transparent py-2 text-base text-foreground appearance-none focus:border-foreground/50 focus:outline-none md:py-2.5 md:text-lg cursor-pointer font-sans"

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center overflow-y-auto px-4 py-24 md:px-12 md:py-16 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          {/* Left side */}
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl lg:text-8xl">
                Вызвать
                <br />
                мастера
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ Работаем ежедневно с 9:00 до 21:00</p>
            </div>

            <div className="space-y-4 md:space-y-8">
              <a
                href="tel:+79504593864"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Phone className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Телефон</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                  +7 (950) 459-38-64
                </p>
              </a>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Building2 className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Адрес</span>
                </div>
                <p className="text-base text-foreground md:text-2xl">ул. Мира 5А, Пермь</p>
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "430ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <MapPin className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Районы обслуживания</span>
                </div>
                <p className="text-base text-foreground md:text-2xl">Пермь, все районы и ближайшие пригороды</p>
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "510ms" }}
              >
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=56.238658%2C58.003128&mode=search&text=%D0%9F%D0%B5%D1%80%D0%BC%D1%8C%2C+%D1%83%D0%BB.+%D0%9C%D0%B8%D1%80%D0%B0%2C+5%D0%90&z=16"
                  width="100%"
                  height="160"
                  className="rounded-xl border border-foreground/15 opacity-90"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="Яндекс.Карта — ул. Мира 5А, Пермь"
                />
              </div>

              <div
                className={`flex gap-2 pt-2 transition-all duration-700 md:pt-4 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                {["Telegram", "WhatsApp", "VK", "permremholod.ru"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="border-b border-transparent font-mono text-xs text-foreground/60 transition-all hover:border-foreground/60 hover:text-foreground/90"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side — Form */}
          <div className="flex flex-col justify-center">
            {submitSuccess ? (
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-foreground/20 bg-foreground/5 p-8 text-center">
                <span className="text-4xl">✅</span>
                <p className="font-sans text-xl font-light text-foreground">Заявка принята!</p>
                <p className="font-mono text-sm text-foreground/60">Мастер перезвонит в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                {/* Name */}
                <div
                  className={`transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Имя</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                    placeholder="Ваше имя"
                  />
                </div>

                {/* Phone */}
                <div
                  className={`transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Телефон</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                {/* District */}
                <div
                  className={`transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Район</label>
                  <div className="relative">
                    <select
                      value={formData.district}
                      onChange={(e) => handleDistrictChange(e.target.value)}
                      required
                      className={`${selectClass} pr-6`}
                    >
                      <option value="" disabled>Выберите район</option>
                      {Object.keys(DISTRICTS).map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
                  </div>
                </div>

                {/* Area (shown only when district selected) */}
                {formData.district && allAreas.length > 0 && (
                  <div
                    className="animate-in fade-in slide-in-from-top-2 duration-300"
                  >
                    <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Микрорайон</label>
                    <div className="relative">
                      <select
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className={`${selectClass} pr-6`}
                      >
                        <option value="">Выберите микрорайон</option>
                        {districtGroups.map((group) => (
                          <optgroup key={group.label} label={group.label}>
                            {group.areas.map((a) => (
                              <option key={a} value={a}>{a}</option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
                    </div>
                    {/* Fee hint */}
                    {formData.area && (() => {
                      const group = districtGroups.find((g) => g.areas.includes(formData.area))
                      return group?.fee ? (
                        <p className="mt-1 font-mono text-xs text-primary/80">
                          Выезд в этот микрорайон: {group.fee}
                        </p>
                      ) : (
                        <p className="mt-1 font-mono text-xs text-foreground/50">
                          Выезд без дополнительной комиссии
                        </p>
                      )
                    })()}
                  </div>
                )}

                {/* Problem */}
                <div
                  className={`transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: "500ms" }}
                >
                  <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Что случилось?</label>
                  <textarea
                    rows={2}
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    className="w-full resize-none border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                    placeholder="Например: холодильник не морозит, марка Atlant..."
                  />
                </div>

                {/* Submit */}
                <div
                  className={`pt-1 transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <MagneticButton
                    variant="primary"
                    size="lg"
                    className="w-full disabled:opacity-50"
                  >
                    {isSubmitting ? "Отправка..." : "Вызвать мастера"}
                  </MagneticButton>
                  <p className="mt-2 text-center font-mono text-xs text-foreground/40">
                    Мастер перезвонит в течение 15 минут
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}