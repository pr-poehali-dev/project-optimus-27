import { useParams, useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"
import { CustomCursor } from "@/components/custom-cursor"

type Symptom = {
  title: string
  subtitle: string
  signs: { label: string; value: string }[]
}

type FaultData = {
  slug: string
  icon: string
  name: string
  heading: string
  intro: string
  links: string[]
  symptomsTitle: string
  symptoms: Symptom[]
  howWorks: { title: string; text: string }[]
}

const FAULTS: FaultData[] = [
  {
    slug: "not-turning-on",
    icon: "PowerOff",
    name: "Холодильник не включается",
    heading: "Почему холодильник не запускается при включении",
    intro:
      "Ваш холодильник перестал включаться полностью или частично, и Ваши продукты не охлаждаются. Мастерская «ПермРемХолод» помогает справиться с вопросами по неисправности холодильника: используйте нашу экспертную помощь для определения возможных причин.",
    links: [
      "Не включается полностью",
      "Не включается освещение",
      "Не запускается компрессор",
      "Компрессор включается и выключается",
      "Сбой циклов работы компрессора",
    ],
    howWorks: [
      {
        title: "Подключение холодильника",
        text: "Холодильник оснащён проводом с вилкой на конце. Для начала работы вилку вставляют в электрическую розетку, чтобы подключиться к электросети.",
      },
      {
        title: "Исправный холодильник",
        text: "Ток входит в холодильник, и он включается: запускается компрессор, при открывании двери загорается лампа освещения, морозильник начинает охлаждаться и в холодильнике устанавливается заданная температура.",
      },
      {
        title: "Неисправный холодильник",
        text: "Холодильник может не включаться при отсутствии напряжения в розетке или при обрыве электрической цепи, когда нарушаются контакты или перегорает одна из электрических деталей.",
      },
    ],
    symptomsTitle: "Симптомы неисправностей холодильника по признаку «Не включается»",
    symptoms: [
      {
        title: "Холодильник полностью не включается",
        subtitle: "Холодильник полностью не включается",
        signs: [
          { label: "Индикатор включения", value: "не горит" },
          { label: "Лампа освещения", value: "не зажигается" },
          { label: "Морозильная камера", value: "не морозит" },
          { label: "Холодильная камера", value: "не охлаждается" },
          { label: "Компрессор", value: "не запускается" },
        ],
      },
      {
        title: "Не включается освещение в холодильнике",
        subtitle: "Не включается освещение в холодильнике",
        signs: [
          { label: "Индикатор включения", value: "горит" },
          { label: "Лампа освещения", value: "не зажигается" },
          { label: "Морозильная камера", value: "морозит" },
          { label: "Холодильная камера", value: "охлаждается" },
          { label: "Компрессор", value: "работает циклично" },
        ],
      },
      {
        title: "Не запускается компрессор",
        subtitle: "Компрессор не работает и нет признаков запуска",
        signs: [
          { label: "Индикатор включения", value: "горит" },
          { label: "Лампа освещения", value: "зажигается" },
          { label: "Морозильная камера", value: "не морозит" },
          { label: "Холодильная камера", value: "не охлаждается" },
          { label: "Компрессор", value: "не запускается" },
          { label: "Звучание", value: "не издаёт звуков работы" },
        ],
      },
      {
        title: "Компрессор включается и выключается",
        subtitle: "Компрессор холодильника включается и сразу выключается",
        signs: [
          { label: "Индикатор включения", value: "горит" },
          { label: "Лампа освещения", value: "зажигается" },
          { label: "Морозильная камера", value: "не морозит" },
          { label: "Холодильная камера", value: "не охлаждается" },
          { label: "Компрессор", value: "включается и сразу выключается" },
          { label: "Звучание", value: "слышатся щелчки или сильное гудение" },
        ],
      },
      {
        title: "Сбой циклов работы компрессора",
        subtitle: "Нарушение циклов включения-выключения холодильника",
        signs: [
          { label: "Индикатор включения", value: "горит" },
          { label: "Лампа освещения", value: "зажигается" },
          { label: "Морозильная камера", value: "слабо морозит" },
          { label: "Холодильная камера", value: "плохо охлаждается" },
          { label: "Компрессор", value: "работает не циклично и тихо" },
          { label: "Конденсатор", value: "слабо нагревается" },
        ],
      },
    ],
  },
  {
    slug: "fridge-not-cooling",
    icon: "Thermometer",
    name: "Камера не охлаждается",
    heading: "Почему не охлаждается холодильная камера?",
    intro:
      "В Вашем холодильнике перестала охлаждаться холодильная камера, а морозильная камера морозит. Мастерская «ПермРемХолод» помогает справиться с вопросами по неисправности холодильника: используйте нашу экспертную помощь для определения возможных причин.",
    links: [
      "Компрессор работает нормально",
      "Компрессор не отключается",
      "Компрессор не может запуститься",
    ],
    howWorks: [
      {
        title: "Охлаждение холодильной камеры",
        text: "Охлаждение холодильной камеры происходит либо напрямую от испарителя, расположенного за задней стенкой, либо за счёт принудительной циркуляции холодного воздуха от испарителя, расположенного внизу аппарата.",
      },
      {
        title: "Исправный холодильник",
        text: "Приборы, контролирующие температуру внутри холодильной камеры, отмечают превышение температуры и подают сигнал на запуск компрессора. Компрессор активирует движение фреона по холодильному агрегату. Уровень охлаждения достигает заданных пользователем значений, и компрессор отключается.",
      },
      {
        title: "Неисправный холодильник",
        text: "Охлаждение холодильной камеры (при исправно функционирующей морозильной камере) может быть слабым или отсутствовать совсем из-за нарушения её герметичности, неисправности систем распределения холода между камерами, сбоев контролирующих приборов, повреждения холодильного контура.",
      },
    ],
    symptomsTitle: "Симптомы неисправностей холодильника по признаку «Не охлаждается»",
    symptoms: [
      {
        title: "Не холодит и компрессор работает нормально",
        subtitle: "Не холодит и компрессор работает нормально",
        signs: [
          { label: "Индикатор включения", value: "горит" },
          { label: "Лампа освещения", value: "зажигается" },
          { label: "Морозильная камера", value: "морозит нормально" },
          { label: "Холодильная камера", value: "не охлаждается" },
          { label: "Компрессор", value: "работает циклично" },
          { label: "Аварийный сигнал", value: "срабатывает" },
        ],
      },
      {
        title: "Не холодит и компрессор не отключается",
        subtitle: "Не холодит и компрессор не отключается",
        signs: [
          { label: "Индикатор включения", value: "горит" },
          { label: "Лампа освещения", value: "зажигается" },
          { label: "Морозильная камера", value: "морозит нормально или слабо морозит" },
          { label: "Холодильная камера", value: "не охлаждается" },
          { label: "Компрессор", value: "постоянно работает и сильно нагревается" },
          { label: "Обледенение", value: "образуется неравномерная наледь" },
          { label: "Аварийный сигнал", value: "срабатывает" },
        ],
      },
      {
        title: "Не холодит и компрессор не может запуститься",
        subtitle: "Не холодит и компрессор не может запуститься",
        signs: [
          { label: "Индикатор включения", value: "горит" },
          { label: "Лампа освещения", value: "зажигается" },
          { label: "Морозильная камера", value: "морозит нормально" },
          { label: "Холодильная камера", value: "не охлаждается" },
          { label: "Компрессор", value: "не запускается" },
          { label: "Звучание", value: "слышны гудение и щелчки" },
          { label: "Второй компрессор", value: "работает нормально" },
          { label: "Аварийный сигнал", value: "срабатывает" },
        ],
      },
    ],
  },
  {
    slug: "freezer-not-freezing",
    icon: "Snowflake",
    name: "Морозилка перестала морозить",
    heading: "Почему не морозит морозильная камера?",
    intro:
      "В Вашем холодильнике перестала морозить морозильная камера, а холодильная камера охлаждается нормально. Мастерская «ПермРемХолод» помогает справиться с вопросами по неисправности холодильника: используйте нашу экспертную помощь для определения возможных причин.",
    links: [
      "Компрессор работает нормально",
      "Компрессор не отключается",
      "Компрессор не может запуститься",
    ],
    howWorks: [
      {
        title: "Охлаждение морозильной камеры",
        text: "Охлаждение морозильной камеры происходит либо напрямую от испарителя, расположенного за задней стенкой, либо за счёт принудительной циркуляции холодного воздуха от испарителя, расположенного внизу аппарата.",
      },
      {
        title: "Исправный холодильник",
        text: "Приборы, контролирующие температуру внутри морозильной камеры, отмечают превышение температуры и подают сигнал на запуск компрессора. Компрессор активирует движение фреона по холодильному агрегату. Уровень охлаждения достигает заданных пользователем значений, и компрессор отключается.",
      },
      {
        title: "Неисправный холодильник",
        text: "Охлаждение морозильной камеры (при исправно функционирующей холодильной камере) может быть слабым или отсутствовать совсем из-за нарушения её герметичности, неисправности систем распределения холода между камерами, сбоев контролирующих приборов, повреждения холодильного контура.",
      },
    ],
    symptomsTitle: "Симптомы неисправностей холодильника по признаку «Холодит, но не морозит»",
    symptoms: [
      {
        title: "Не морозит и компрессор работает нормально",
        subtitle: "Не морозит и компрессор работает нормально",
        signs: [
          { label: "Индикатор включения", value: "горит" },
          { label: "Лампа освещения", value: "зажигается" },
          { label: "Морозильная камера", value: "не морозит" },
          { label: "Холодильная камера", value: "охлаждается нормально" },
          { label: "Компрессор", value: "работает циклично" },
          { label: "Аварийный сигнал", value: "срабатывает" },
        ],
      },
      {
        title: "Не морозит и компрессор не отключается",
        subtitle: "Не морозит и компрессор не отключается",
        signs: [
          { label: "Индикатор включения", value: "горит" },
          { label: "Лампа освещения", value: "зажигается" },
          { label: "Морозильная камера", value: "не морозит" },
          { label: "Холодильная камера", value: "охлаждается нормально" },
          { label: "Компрессор", value: "постоянно работает и сильно нагревается" },
          { label: "Обледенение", value: "образуется неравномерная наледь" },
          { label: "Аварийный сигнал", value: "срабатывает" },
        ],
      },
      {
        title: "Не морозит и компрессор не может запуститься",
        subtitle: "Не морозит и компрессор не может запуститься",
        signs: [
          { label: "Индикатор включения", value: "горит" },
          { label: "Лампа освещения", value: "зажигается" },
          { label: "Морозильная камера", value: "не морозит" },
          { label: "Холодильная камера", value: "охлаждается нормально" },
          { label: "Компрессор", value: "не запускается" },
          { label: "Звучание", value: "слышны гудение и щелчки" },
          { label: "Второй компрессор", value: "работает нормально" },
          { label: "Аварийный сигнал", value: "срабатывает" },
        ],
      },
    ],
  },
  {
    slug: "no-cooling-at-all",
    icon: "Flame",
    name: "Полностью не морозит",
    heading: "Почему холодильный аппарат не производит холод?",
    intro:
      "Ваш холодильник полностью перестал вырабатывать холод, и Ваши продукты не охлаждаются. Мастерская «ПермРемХолод» помогает справиться с вопросами по неисправности холодильника: используйте нашу экспертную помощь для определения возможных причин.",
    links: [
      "Нет холода и компрессор не включается совсем",
      "Нет холода и компрессор не может запуститься",
      "Нет холода и компрессор не отключается",
      "Нет холода и компрессор работает не циклично",
    ],
    howWorks: [
      {
        title: "Хладоспособность холодильника",
        text: "Охлаждение холодильника происходит за счет изменения давления на хладагент, проходящий внутри холодильного агрегата. Расширяясь в испарителе, хладагент (фреон) вбирает в себя тепло из камеры, и далее отдаёт его через радиатор во внешнюю среду.",
      },
      {
        title: "Исправный холодильник",
        text: "Приборы, контролирующие температуру внутри холодильника, отмечают превышение температуры и подают сигнал на запуск компрессора. Компрессор активирует движение фреона по холодильному агрегату. Уровень охлаждения достигает заданных пользователем значений, и компрессор отключается.",
      },
      {
        title: "Неисправный холодильник",
        text: "Цикл охлаждения может быть нарушен из-за неисправности контролирующих устройств, сбоев в работе компрессора или при повреждении холодильного контура.",
      },
    ],
    symptomsTitle: "Симптомы неисправностей холодильника по признаку «Полностью не морозит»",
    symptoms: [
      {
        title: "Не морозит и компрессор не включается совсем",
        subtitle: "Холодильник полностью не морозит и компрессор совсем не включается",
        signs: [
          { label: "Индикатор включения", value: "горит" },
          { label: "Лампа освещения", value: "зажигается" },
          { label: "Морозильная камера", value: "не морозит" },
          { label: "Холодильная камера", value: "не охлаждается" },
          { label: "Компрессор", value: "не запускается" },
          { label: "Аварийный сигнал", value: "срабатывает" },
        ],
      },
      {
        title: "Нет холода и компрессор не может запуститься",
        subtitle: "Нет холода и компрессор не может запуститься",
        signs: [
          { label: "Индикатор включения", value: "горит" },
          { label: "Лампа освещения", value: "зажигается" },
          { label: "Морозильная камера", value: "не морозит" },
          { label: "Холодильная камера", value: "не охлаждается" },
          { label: "Компрессор", value: "включается и сразу выключается" },
          { label: "Звучание", value: "слышатся щелчки и/или сильное гудение" },
        ],
      },
      {
        title: "Компрессор не отключается",
        subtitle: "Холодильник полностью не морозит и компрессор не отключается",
        signs: [
          { label: "Индикатор включения", value: "горит" },
          { label: "Лампа освещения", value: "зажигается" },
          { label: "Морозильная камера", value: "слабо морозит или не морозит совсем" },
          { label: "Холодильная камера", value: "не охлаждается" },
          { label: "Компрессор", value: "постоянно работает и сильно нагревается" },
          { label: "Конденсатор", value: "не нагревается" },
          { label: "Аварийный сигнал", value: "срабатывает" },
        ],
      },
      {
        title: "Компрессор работает не циклично",
        subtitle: "Нет холода и компрессор работает не циклично",
        signs: [
          { label: "Индикатор включения", value: "горит" },
          { label: "Лампа освещения", value: "зажигается" },
          { label: "Морозильная камера", value: "слабо морозит" },
          { label: "Холодильная камера", value: "плохо охлаждается" },
          { label: "Компрессор", value: "работает не циклично и тихо" },
          { label: "Конденсатор", value: "слабо нагревается" },
        ],
      },
    ],
  },
]

export default function FaultDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const fault = FAULTS.find((f) => f.slug === slug) ?? FAULTS[0]

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <CustomCursor />

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

        <p className="mb-2 font-mono text-xs text-foreground/50">ПермРемХолод / Неисправности / {fault.name}</p>

        {/* Title */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Icon name={fault.icon} fallback="AlertTriangle" size={28} />
          </div>
          <h1 className="font-sans text-3xl font-light leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {fault.heading}
          </h1>
        </div>

        {/* Intro */}
        <p className="mb-8 max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">{fault.intro}</p>

        {/* Quick links */}
        <div className="mb-8 rounded-2xl border border-border bg-card p-5">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-foreground/50">
            Быстрый переход к симптомам
          </p>
          <ul className="flex flex-col gap-2">
            {fault.links.map((link, i) => (
              <li key={i} className="flex items-center gap-2 font-sans text-sm text-primary">
                <Icon name="ChevronRight" size={14} />
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA phone */}
        <div className="mb-10 flex flex-wrap items-center gap-4 rounded-2xl border border-primary/30 bg-primary/5 px-6 py-4">
          <p className="flex-1 font-sans text-sm text-foreground/80">
            Задайте вопрос специалисту, почему Ваш холодильник неисправен:
          </p>
          <a
            href="tel:+79504593864"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 font-sans text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            <Icon name="Phone" size={16} />
            +7 (950) 459-38-64
          </a>
        </div>

        {/* How it works */}
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {fault.howWorks.map((hw, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-5">
              <p className="mb-2 font-sans text-sm font-semibold text-primary">{hw.title}</p>
              <p className="text-sm leading-relaxed text-foreground/70">{hw.text}</p>
            </div>
          ))}
        </div>

        {/* Symptoms */}
        <h2 className="mb-6 font-sans text-2xl font-light tracking-tight text-foreground md:text-3xl">
          {fault.symptomsTitle}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fault.symptoms.map((symptom, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="mb-3 border-b border-primary/20 pb-3">
                <p className="font-mono text-xs text-foreground/40">Признаки неисправности</p>
                <h3 className="mt-1 font-sans text-base font-semibold text-foreground">{symptom.title}</h3>
                {symptom.subtitle !== symptom.title && (
                  <p className="mt-0.5 text-xs text-foreground/60">{symptom.subtitle}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                {symptom.signs.map((sign, j) => (
                  <div key={j} className="flex items-start justify-between gap-2">
                    <span className="font-mono text-xs text-foreground/50">{sign.label}:</span>
                    <span
                      className={`text-right font-sans text-xs font-medium ${
                        sign.value.startsWith("не") || sign.value.startsWith("не ") || sign.value === "срабатывает"
                          ? "text-primary"
                          : "text-foreground/80"
                      }`}
                    >
                      {sign.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-border">
                <a
                  href="tel:+79504593864"
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-primary transition-colors hover:text-primary/80"
                >
                  <Icon name="Phone" size={12} />
                  Узнать возможные причины
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
          <p className="mb-2 font-sans text-xl font-light text-foreground">Нашли свой симптом?</p>
          <p className="mb-6 text-sm text-foreground/60">Позвоните — мастер приедет и устранит неисправность</p>
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
