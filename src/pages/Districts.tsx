import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const DISTRICTS = [
  "Свердловский район",
  "Ленинский район",
  "Индустриальный район",
  "Дзержинский район",
  "Мотовилихинский район",
  "Орджоникидзевский район",
  "Кировский район",
  "Краснокамское направление",
  "Юго-Камское направление",
  "Кунгурское направление",
  "Сылвенское направление",
  "Добрянское направление",
]

export default function Districts() {
  const navigate = useNavigate()
  const [active, setActive] = useState(DISTRICTS[0])

  const mapQuery = encodeURIComponent(`Пермь ${active}`)
  const mapSrc = `https://yandex.ru/map-widget/v1/?mode=search&text=${mapQuery}&z=12`

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-primary">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 transition-transform hover:scale-105"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/15">
              <span className="text-lg font-bold text-primary-foreground">❄</span>
            </div>
            <span className="font-sans text-lg font-semibold text-primary-foreground">ПермРемХолод</span>
          </button>
          <a
            href="tel:+79504593864"
            className="hidden items-center gap-2 font-sans text-sm font-medium text-primary-foreground sm:flex"
          >
            <Icon name="Phone" size={16} />
            +7 (950) 459-38-64
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <button
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-foreground/60 transition-colors hover:text-foreground"
        >
          <Icon name="ArrowLeft" size={16} />
          На главную
        </button>

        <p className="mb-2 font-mono text-xs text-foreground/50">ПермРемХолод / Районы обслуживания</p>
        <h1 className="mb-10 font-sans text-4xl font-light leading-tight tracking-tight md:text-5xl">
          Районы обслуживания
        </h1>

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Districts list */}
          <div className="flex flex-col gap-2">
            {DISTRICTS.map((d) => (
              <button
                key={d}
                onClick={() => setActive(d)}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left font-sans text-sm transition-all ${
                  active === d
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground/80 hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <span>{d}</span>
                <Icon name="ChevronRight" size={16} />
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                key={active}
                title={`Карта: ${active}`}
                src={mapSrc}
                className="h-[360px] w-full md:h-[420px]"
                frameBorder="0"
                allowFullScreen
              />
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="mb-2 font-sans text-2xl font-light tracking-tight text-foreground md:text-3xl">
                Вызов мастера холодильников на дом
              </h2>
              <p className="mb-6 text-base leading-relaxed text-foreground/80">
                Мастер ПермРемХолод выезжает на дом для ремонта холодильника к жителям зоны «{active}» Перми.
              </p>

              <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                <SpecRow label="Категория услуги" value="Ремонт холодильников" />
                <SpecRow label="Вид предоставления" value="услуга на дому" />
                <SpecRow label="Перечень услуг" value="Услуги ПермРемХолод" />
                <SpecRow label="Регион обслуживания" value="Пермь" />
                <SpecRow label="Район выезда" value={active} />
                <SpecRow label="Прибытие мастера" value="от 30 минут" />
                <SpecRow label="Оплата" value="наличные, по карте" />
              </div>

              <a
                href="tel:+79504593864"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-sans font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                <Icon name="Phone" size={18} />
                Вызвать мастера
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 border-l-2 border-primary/40 pl-4">
      <span className="font-mono text-xs text-foreground/50">{label}:</span>
      <span className="font-sans text-base text-foreground">{value}</span>
    </div>
  )
}
