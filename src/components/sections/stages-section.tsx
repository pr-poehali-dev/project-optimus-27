import { useReveal } from "@/hooks/use-reveal"

const STAGES = [
  {
    title: "Заявка на ремонт",
    text: "Сообщите марку своего холодильника, признаки неисправности, которые Вы обнаруживаете, и район, где установлен холодильник. Эта информация поможет нам сориентировать Вас по возможной стоимости услуги, и заранее подготовить нужные для ремонта детали.",
    accent: "Ремонт холодильников — наша специализация!",
  },
  {
    title: "Визит мастера и диагностика",
    text: "Наш мастер выезжает в удобное для Вас время к месту установки холодильного аппарата со всем необходимым для диагностики и ремонта оборудованием и нужными запасными деталями.",
    accent: "Выезд к неисправному холодильнику — наша мобильность!",
  },
  {
    title: "Ремонтные работы",
    text: "Мастер грамотно и аккуратно выполняет необходимые ремонтные процедуры, возвращая работоспособность Вашего холодильника прямо у Вас на глазах.",
    accent: "Восстановление работы холодильника — наше мастерство!",
  },
  {
    title: "Проверка и оплата услуги",
    text: "По окончании ремонта Вы принимаете исправный холодильник, подписываете акт сдачи-приемки выполненных работ и производите итоговый расчёт за услугу.",
    accent: "Исправный холодильник — гарантированный результат нашего ремонта!",
  },
  {
    title: "Сервисная гарантия",
    text: "Мы предоставляем гарантию на все выполняемые нами работы сроком до 1 года.",
    accent: "Исполнение гарантийных обязательств — наша репутация!",
  },
]

export function StagesSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-start overflow-y-auto px-6 py-24 md:items-center md:px-12 md:py-16 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Этапы оказания услуги
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ От заявки до гарантии — 5 простых шагов</p>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[14px] top-2 bottom-2 w-px bg-primary/60 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-6 md:space-y-2">
            {STAGES.map((stage, i) => {
              const isRight = i % 2 === 1
              return (
                <div
                  key={i}
                  className={`relative flex items-start gap-5 transition-all duration-700 md:gap-0 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  } md:justify-${isRight ? "end" : "start"}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* dot */}
                  <div className="relative z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background md:absolute md:left-1/2 md:-translate-x-1/2">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  </div>

                  {/* card */}
                  <div
                    className={`w-full rounded-xl border border-border bg-card/95 p-5 shadow-sm backdrop-blur-sm md:w-[46%] md:p-6 ${
                      isRight ? "md:mr-0" : "md:ml-0"
                    }`}
                  >
                    <h3 className="mb-2 border-b border-primary/30 pb-2 font-sans text-lg font-semibold text-foreground md:text-xl">
                      {stage.title}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-foreground/75">{stage.text}</p>
                    <p className="font-sans text-sm font-semibold text-primary">{stage.accent}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
