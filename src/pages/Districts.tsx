import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

type MicroGroup = {
  title: string
  note?: string
  items: string[]
}

type District = {
  name: string
  groups?: MicroGroup[]
}

const DISTRICTS: District[] = [
  {
    name: "Свердловский район",
    groups: [
      {
        title: "Без комиссии за выезд",
        note: "Выезжаем бесплатно в случае заказа ремонта холодильника.",
        items: [
          "Центральный район Перми",
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
        title: "С комиссией за выезд",
        note: "За выезд дополнительная оплата: 500 руб.",
        items: ["мкр. Новые Ляды", "мкр. Ново-Бродовский"],
      },
    ],
  },
  { name: "Ленинский район" },
  {
    name: "Индустриальный район",
    groups: [
      {
        title: "Без комиссии за выезд",
        note: "Выезжаем бесплатно в случае заказа ремонта холодильника.",
        items: [
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
        title: "С комиссией за выезд",
        note: "За выезд дополнительная оплата: 300 руб.",
        items: ["д. Хмели", "п. Субботино", "п. Осенцы"],
      },
    ],
  },
  {
    name: "Дзержинский район",
    groups: [
      {
        title: "Без комиссии за выезд",
        note: "Выезжаем бесплатно в случае заказа ремонта холодильника.",
        items: [
          "Центральный район Перми",
          "мкр. Заимка",
          "мкр. Данилиха",
          "мкр. Староплоский",
          "мкр. Светлый",
          "мкр. Железнодорожный",
          "мкр. Парковый",
          "мкр. Красный октябрь",
          "п. Заостровка",
        ],
      },
      {
        title: "С комиссией за выезд",
        note: "За выезд дополнительная оплата: 200 руб.",
        items: ["мкр. Пролетарский", "мкр. Акуловский", "мкр. Комсомольский", "мкр. Заречный"],
      },
    ],
  },
  { name: "Мотовилихинский район" },
  {
    name: "Орджоникидзевский район",
    groups: [
      {
        title: "С комиссией за выезд — 300 руб.",
        note: "За выезд дополнительная оплата: 300 руб.",
        items: [
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
        title: "С комиссией за выезд — 500 руб.",
        note: "За выезд дополнительная оплата: 500 руб.",
        items: ["мкр. Голованово", "п. Заозерье"],
      },
    ],
  },
  {
    name: "Кировский район",
    groups: [
      {
        title: "С комиссией за выезд — 300 руб.",
        note: "За выезд дополнительная оплата: 300 руб.",
        items: [
          "мкр. Судзавод",
          "пос. Кировский",
          "мкр. Налимиха",
          "мкр. Старые Водники",
          "мкр. Новые Водники",
          "мкр. Закамск",
        ],
      },
      {
        title: "С комиссией за выезд — 500 руб.",
        note: "За выезд дополнительная оплата: 500 руб.",
        items: ["мкр. Крым"],
      },
    ],
  },
  { name: "Краснокамское направление" },
  { name: "Юго-Камское направление" },
  { name: "Кунгурское направление" },
  { name: "Сылвенское направление" },
  { name: "Добрянское направление" },
]

export default function Districts() {
  const navigate = useNavigate()
  const [activeName, setActiveName] = useState(DISTRICTS[0].name)
  const active = activeName
  const activeDistrict = DISTRICTS.find((d) => d.name === activeName) ?? DISTRICTS[0]

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
                key={d.name}
                onClick={() => setActiveName(d.name)}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left font-sans text-sm transition-all ${
                  activeName === d.name
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground/80 hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <span>{d.name}</span>
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

            {activeDistrict.groups && (
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h3 className="mb-6 font-sans text-xl font-light tracking-tight text-foreground md:text-2xl">
                  Микрорайоны выезда
                </h3>
                <div className="space-y-6">
                  {activeDistrict.groups.map((group) => {
                    const isFree = group.title.startsWith("Без комиссии")
                    return (
                      <div key={group.title}>
                        <div className="mb-3 flex items-center gap-2">
                          <Icon
                            name={isFree ? "BadgeCheck" : "Wallet"}
                            size={18}
                            className={isFree ? "text-green-500" : "text-primary"}
                          />
                          <span className="font-sans text-base font-medium text-foreground">{group.title}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-border bg-background px-3 py-1.5 font-sans text-sm text-foreground/80"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                        {group.note && (
                          <p className="mt-3 font-mono text-xs text-foreground/60">{group.note}</p>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
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