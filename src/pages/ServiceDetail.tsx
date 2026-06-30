import { useParams, useNavigate, Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

type ServiceItem = {
  title: string
  description: string
  price: string
}

type ServiceData = {
  slug: string
  icon: string
  name: string
  heading: string
  intro: string
  qualities: { label: string; text: string }[]
  linksNote?: { label: string; text: string; route?: string }[]
  servicesTitle: string
  items: ServiceItem[]
  note?: string
}

const SERVICES: ServiceData[] = [
  {
    slug: "home-fridges",
    icon: "Refrigerator",
    name: "Ремонт бытовых холодильников",
    heading: "Ремонт холодильников и морозильников на дому",
    intro:
      "Дипломированный мастер ПермРемХолод оперативно, качественно и недорого проводит необходимые технологические операции по ремонту холодильников с выездом на дом.",
    qualities: [
      {
        label: "Оперативно",
        text: "Ремонт Вашего холодильника нашим специалистом займёт от 30 минут до 2,5 часов в зависимости от сложности ремонта.",
      },
      {
        label: "Качественно",
        text: "Ремонт будет выполнен в соответствии со всеми техническими требованиями к ремонту именно Вашей модели холодильника.",
      },
      {
        label: "Недорого",
        text: "Наши цены без преувеличения – в прайсе и по факту всегда одно значение!",
      },
    ],
    linksNote: [
      { label: "Порядок оказания услуг", text: "Правила сервиса ПермРемХолод", route: "/info" },
      { label: "Условия выезда мастера на дом", text: "Районы обслуживания", route: "/districts" },
    ],
    servicesTitle: "Виды услуг по ремонту холодильников",
    items: [
      {
        title: "Заправка фреоном БХП",
        description: "Услуга по заправке бытового холодильника фреоном",
        price: "4500–5500 руб.",
      },
      {
        title: "Компонентный ремонт электронной платы БХП",
        description: "Услуга по ремонту модуля холодильника с электронным управлением",
        price: "5500–7500 руб.",
      },
      {
        title: "Замена компрессора БХП",
        description: "Услуга по замене мотор-компрессора в бытовом холодильнике",
        price: "12500–14500 руб.",
      },
      {
        title: "Замена инверторного двигателя LG на поршневой компрессор БХП",
        description: "Услуга по замене инверторного двигателя LG на поршневой компрессор",
        price: "19000–22500 руб.",
      },
      {
        title: "Замена пускозащитного реле БХП",
        description: "Услуга по замене пускозащитного реле холодильника",
        price: "5500–6000 руб.",
      },
      {
        title: "Ремонт контура холодильного агрегата БХП",
        description: "Услуга по ремонту холодильного контура бытового холодильника",
        price: "7500–10500 руб.",
      },
      {
        title: "Чистка капиллярной трубки БХП",
        description: "Услуга по устранению засоров в капиллярной трубке холодильника",
        price: "7000–8500 руб.",
      },
      {
        title: "Установка навесного испарителя БХП",
        description: "Услуга по установке нового испарителя в холодильник",
        price: "8500–10500 руб.",
      },
      {
        title: "Восстановление герметичности испарителя-морозильника БХП",
        description: "Услуга по ремонту проколотого испарителя-морозильника",
        price: "5500–8500 руб.",
      },
      {
        title: "Замена термостата БХП",
        description: "Замена термостата в холодильнике с электромеханическим управлением",
        price: "5500–6500 руб.",
      },
      {
        title: "Замена датчика (сенсора) температуры БХП",
        description: "Замена датчика температуры в холодильнике с электронным управлением",
        price: "5500–6500 руб.",
      },
      {
        title: "Замена нагревательного элемента БХП",
        description: "Услуга по замене нагревательного элемента (ТЭН) в холодильнике No Frost",
        price: "5500–6500 руб.",
      },
      {
        title: "Замена вентилятора БХП",
        description: "Замена вентилятора в холодильнике с динамическим охлаждением",
        price: "5500–6000 руб.",
      },
      {
        title: "Замена воздушной заслонки БХП",
        description: "Услуга по замене воздушной заслонки в холодильнике No Frost",
        price: "4500–5800 руб.",
      },
      {
        title: "Замена электромагнитного клапана БХП",
        description: "Услуга по замене электромагнитного клапана в холодильнике Total No Frost",
        price: "6500–7000 руб.",
      },
      {
        title: "Чистка дренажной системы БХП",
        description: "Услуга по устранению засора дренажной системы холодильника",
        price: "2800–3500 руб.",
      },
      {
        title: "Перенавешивание дверей БХП",
        description: "Услуга по перевешиванию дверей холодильника на другую сторону",
        price: "2500–3000 руб.",
      },
    ],
  },
  {
    slug: "commercial-fridges",
    icon: "Store",
    name: "Ремонт торговых холодильников",
    heading: "Ремонт торгового холодильного оборудования",
    intro:
      "Дипломированный мастер ПермРемХолод оперативно, качественно и недорого проводит необходимые технологические операции по ремонту торгового холодильного оборудования с выездом в торговую точку во все районы Перми и ближайшие пригороды.",
    qualities: [
      {
        label: "Оперативно",
        text: "Ремонт Вашего холодильника нашим специалистом займёт от 30 минут до 2,5 часов в зависимости от сложности ремонта.",
      },
      {
        label: "Качественно",
        text: "Ремонт будет выполнен в соответствии со всеми техническими требованиями к ремонту именно Вашей модели холодильника.",
      },
      {
        label: "Недорого",
        text: "Наши цены без преувеличения – в прайсе и по факту всегда одно значение!",
      },
    ],
    linksNote: [
      { label: "Порядок оказания услуг", text: "Правила сервиса ПермРемХолод", route: "/info" },
      { label: "Условия выезда мастера", text: "Районы обслуживания", route: "/districts" },
    ],
    servicesTitle: "Сервисные услуги по торговому холодильному оборудованию",
    items: [
      {
        title: "Техническое обслуживание испарителя ТХО",
        description: "Услуга по обслуживанию испарителя в торговом холодильнике",
        price: "3500–4500 руб.",
      },
      {
        title: "Замена вентилятора ТХО",
        description: "Услуга по замене вентилятора в торговом холодильнике",
        price: "6200–7000 руб.",
      },
      {
        title: "Услуга по заправке фреоном ТХО",
        description: "Услуга по заправке торгового холодильника фреоном",
        price: "6500–7000 руб.",
      },
      {
        title: "Ремонт холодильного контура ТХО",
        description: "Услуга по устранению утечки фреона торгового холодильного оборудования",
        price: "8500–10500 руб.",
      },
      {
        title: "Замена мотор-компрессора ТХО",
        description: "Услуга по замене мотор-компрессора торгового холодильного оборудования",
        price: "19000–25000 руб.",
      },
      {
        title: "Чистка капиллярной трубки ТХО",
        description: "Услуга по устранению засора в капиллярной трубке торгового холодильного оборудования",
        price: "8500–9000 руб.",
      },
      {
        title: "Замена контроллера ТХО",
        description: "Услуга по замене контроллера торгового холодильного оборудования",
        price: "6500–7500 руб.",
      },
      {
        title: "Замена термодатчика ТХО",
        description: "Услуга по замене термодатчика торгового холодильного оборудования",
        price: "5500–6000 руб.",
      },
    ],
  },
  {
    slug: "car-fridges",
    icon: "Car",
    name: "Ремонт автохолодильников",
    heading: "Услуги по ремонту автохолодильников",
    intro:
      "Дипломированный мастер ПермРемХолод оперативно, качественно и недорого проводит стационарный ремонт автомобильных холодильников и морозильников.",
    qualities: [
      {
        label: "Оперативно",
        text: "Ремонт Вашего холодильника нашим специалистом займёт от 30 минут до 2,5 часов в зависимости от сложности ремонта.",
      },
      {
        label: "Качественно",
        text: "Ремонт будет выполнен в соответствии со всеми техническими требованиями к ремонту именно Вашей модели холодильника.",
      },
      {
        label: "Недорого",
        text: "Наши цены без преувеличения – в прайсе и по факту всегда одно значение!",
      },
    ],
    linksNote: [
      { label: "Порядок оказания услуг", text: "Правила сервиса ПермРемХолод", route: "/info" },
      {
        label: "Производственный участок",
        text: "ул. Мира, 5а — требуется предварительная запись",
      },
    ],
    servicesTitle: "Сервисные услуги по автомобильным холодильникам",
    items: [
      {
        title: "Замена мотор-компрессора автомобильного холодильника",
        description: "Услуга по замене компрессора автохолодильника",
        price: "11000–13500 руб.",
      },
      {
        title: "Чистка капиллярной трубки автомобильного холодильника",
        description: "Услуга по устранению засора в капиллярной трубке автохолодильника",
        price: "4500–6000 руб.",
      },
      {
        title: "Заправка фреоном автомобильного холодильника",
        description: "Услуга по заправке автохолодильника хладагентом (фреоном)",
        price: "3500 руб.",
      },
      {
        title: "Ремонт контура автомобильного холодильника",
        description: "Услуга по устранению утечки фреона в автохолодильнике",
        price: "4500 руб.",
      },
    ],
  },
  {
    slug: "washing-machines",
    icon: "WashingMachine",
    name: "Ремонт стиральных машин",
    heading: "Услуги по ремонту стиральных машин",
    intro:
      "Дипломированный мастер ПермРемХолод оперативно, качественно и недорого проводит необходимые технологические операции по ремонту стиральных машин с выездом на дом по Перми.",
    qualities: [
      {
        label: "Оперативно",
        text: "Ремонт Вашей стиральной машины нашим специалистом займёт от 30 минут до 2,5 часов в зависимости от сложности ремонта.",
      },
      {
        label: "Качественно",
        text: "Ремонт будет выполнен в соответствии со всеми техническими требованиями к ремонту именно Вашей модели стиральной машины.",
      },
      {
        label: "Недорого",
        text: "Наши цены без преувеличения – в прайсе и по факту всегда одно значение!",
      },
    ],
    linksNote: [
      { label: "Порядок оказания услуг", text: "Правила сервиса ПермРемХолод", route: "/info" },
      { label: "Условия выезда мастера", text: "Районы обслуживания", route: "/districts" },
    ],
    servicesTitle: "Сервисные услуги по стиральным машинам",
    items: [
      {
        title: "Замена подшипника барабана СМА",
        description: "Услуга по замене подшипника бака в стиральной машине",
        price: "8500–12500 руб.",
      },
      {
        title: "Ремонт электронного модуля СМА",
        description: "Услуга по ремонту электронного модуля стиральной машины",
        price: "5500–7500 руб.",
      },
      {
        title: "Замена нагревателя СМА",
        description: "Услуга по замене нагревательного элемента (ТЭН) в стиральной машине",
        price: "4500–5500 руб.",
      },
      {
        title: "Замена амортизаторов СМА",
        description: "Услуга по замене амортизаторов стиральной машины",
        price: "4500–5500 руб.",
      },
      {
        title: "Замена щеток двигателя СМА",
        description: "Услуга по замене щеток двигателя стиральной машины",
        price: "4500–5500 руб.",
      },
      {
        title: "Ремонт двигателя СМА",
        description: "Услуга по ремонту двигателя стиральной машины",
        price: "5500–6500 руб.",
      },
      {
        title: "Замена сливного насоса СМА",
        description: "Услуга по замене сливного насоса стиральной машины",
        price: "4500–5500 руб.",
      },
      {
        title: "Замена манжеты люка СМА",
        description: "Услуга по замене манжеты люка стиральной машины",
        price: "3500–4500 руб.",
      },
      {
        title: "Замена таходатчика СМА",
        description: "Услуга по замене таходатчика стиральной машины",
        price: "4800–6500 руб.",
      },
      {
        title: "Подключение СМА",
        description: "Услуга по установке и подключению стиральной машины",
        price: "2500 руб.",
      },
    ],
  },
  {
    slug: "air-conditioning",
    icon: "AirVent",
    name: "Сервис кондиционеров",
    heading: "Услуги по ремонту кондиционеров",
    intro:
      "Дипломированный мастер ПермРемХолод оперативно, качественно и недорого проводит необходимые технологические операции по техническому обслуживанию кондиционеров с выездом на дом или в офис по Перми.",
    qualities: [
      {
        label: "Оперативно",
        text: "Обслуживание Вашего кондиционера нашим специалистом займёт от 30 минут до 3 часов в зависимости от сложности вида работ.",
      },
      {
        label: "Качественно",
        text: "Сервис будет оказан в соответствии со всеми техническими требованиями, установленными к модели кондиционера.",
      },
      {
        label: "Недорого",
        text: "Наши цены без преувеличения – в прайсе и по факту всегда одно значение!",
      },
    ],
    linksNote: [
      { label: "Порядок оказания услуг", text: "Правила сервиса ПермРемХолод", route: "/info" },
      { label: "Условия выезда мастера", text: "Районы обслуживания", route: "/districts" },
    ],
    servicesTitle: "Сервисные услуги по кондиционерам",
    items: [
      {
        title: "Техническое обслуживание кондиционера",
        description: "Услуга по техническому обслуживанию кондиционера",
        price: "4500 руб.",
      },
      {
        title: "Заправка кондиционера",
        description: "Услуга по заправке кондиционера хладагентом (фреоном)",
        price: "4500–6000 руб.",
      },
      {
        title: "Антибактериальная обработка кондиционера",
        description: "Услуга антибактериальной обработки кондиционера",
        price: "2000 руб.",
      },
    ],
  },
]

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const service = SERVICES.find((s) => s.slug === slug) ?? SERVICES[0]

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      {/* Header */}
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

      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <button
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-foreground/60 transition-colors hover:text-foreground"
        >
          <Icon name="ArrowLeft" size={16} />
          На главную
        </button>

        <p className="mb-2 font-mono text-xs text-foreground/50">ПермРемХолод / {service.name}</p>

        {/* Title */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Icon name={service.icon} fallback="Wrench" size={28} />
          </div>
          <h1 className="font-sans text-3xl font-light leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {service.heading}
          </h1>
        </div>

        {/* Intro */}
        <p className="mb-8 max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">{service.intro}</p>

        {/* Qualities */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {service.qualities.map((q) => (
            <div key={q.label} className="rounded-xl border border-border bg-card p-5">
              <p className="mb-1.5 font-sans text-base font-semibold text-primary">{q.label}:</p>
              <p className="text-sm leading-relaxed text-foreground/75">{q.text}</p>
            </div>
          ))}
        </div>

        {/* Links note */}
        {service.linksNote && (
          <div className="mb-10 flex flex-wrap gap-3">
            {service.linksNote.map((ln) => (
              <div key={ln.label} className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                <span className="font-mono text-xs text-foreground/50">{ln.label}:</span>
                {ln.route ? (
                  <Link
                    to={ln.route}
                    className="font-sans text-sm font-medium text-primary underline-offset-2 hover:underline"
                  >
                    {ln.text}
                  </Link>
                ) : (
                  <span className="font-sans text-sm text-foreground/80">{ln.text}</span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Services list */}
        <h2 className="mb-6 font-sans text-2xl font-light tracking-tight text-foreground md:text-3xl">
          {service.servicesTitle}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <h3 className="mb-2 border-b border-primary/20 pb-2 font-sans text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-foreground/70">{item.description}</p>
              </div>
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="font-mono text-xs text-foreground/50">Цена:</p>
                  <p className="font-sans text-lg font-bold text-primary">{item.price}</p>
                  <p className="font-mono text-xs text-foreground/40">(включая комплект ЗИП)</p>
                </div>
                <a
                  href="tel:+79504593864"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 font-sans text-xs font-medium text-primary-foreground transition-transform hover:scale-105"
                >
                  <Icon name="Phone" size={13} />
                  Заказать
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
          <p className="mb-2 font-sans text-xl font-light text-foreground">Нужна консультация или запись?</p>
          <p className="mb-6 text-sm text-foreground/60">Позвоните — мастер ответит и согласует удобное время</p>
          <a
            href="tel:+79504593864"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-sans font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            <Icon name="Phone" size={18} />
            +7 (950) 459-38-64
          </a>
        </div>
      </div>
    </main>
  )
}
