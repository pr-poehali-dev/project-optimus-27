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

        <div className="flex flex-col gap-3 md:gap-2">
          {STAGES.map((stage, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${i * 120}ms`,
                marginLeft: `${i * 7}%`,
              }}
            >
              <div className="flex items-stretch gap-3 md:gap-4">
                {/* step number */}
                <div className="flex w-10 shrink-0 items-center justify-center rounded-lg bg-primary font-sans text-lg font-bold text-primary-foreground shadow-md md:w-12 md:text-xl">
                  {i + 1}
                </div>

                {/* card */}
                <div className="flex-1 rounded-xl border border-border border-l-4 border-l-primary bg-card/95 p-4 shadow-md backdrop-blur-sm md:p-5">
                  <h3 className="mb-1.5 font-sans text-base font-semibold text-foreground md:text-lg">
                    {stage.title}
                  </h3>
                  <p className="mb-2 text-sm leading-relaxed text-foreground/75">{stage.text}</p>
                  <p className="font-sans text-sm font-semibold text-primary">{stage.accent}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}