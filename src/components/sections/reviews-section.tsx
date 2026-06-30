import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

const REVIEWS = [
  {
    name: "Olga1061 Chernushevich",
    initials: "O",
    color: "bg-green-600",
    text: "Прекрасный мастер! Ильдар отлично справился с ремонтом, профессионально и аккуратно подошел к делу, смело рекомендую для обращений по ремонту холодильников, сделал все на квартире, весь комплект инструментов с собой!",
    source: "Google",
  },
  {
    name: "Ольга Никитина",
    initials: "О",
    color: "bg-pink-500",
    text: "Спасибо вам огромное за вас! За ваш труд, компетентность, оперативность! Стала неисправна стиральная машина. Приехал мастер Алмаз. Всё быстро, по делу, спокойно и дружелюбно! Перепрошил программу, заменил шланг и одну деталь, загерметизировал где нужно, провёл полную профилактику! Цена на работу вполне адекватна и незаоблачна! Благодарю вас!",
    date: "14 мар",
    source: "Google",
  },
  {
    name: "Дарья Чурилова",
    initials: "Д",
    color: "bg-orange-400",
    text: "Как это обычно бывает, техника, которая служила долгие годы, ломается внезапно. Так произошло с моим старым холодильником, который работал около 20 лет и в январе этого года перестал морозить. Большое спасибо Ильдару, который оперативно приехал и заменил компрессор — однозначно рекомендую его услуги! Сейчас холодильник работает как никогда отлично)",
    date: "25 фев",
    source: "Google",
  },
  {
    name: "Светлана Варкова",
    initials: "С",
    color: "bg-purple-500",
    meta: "2 отзыва · 2 фото",
    text: "Огромное спасибо мастеру Ильдару! Очень быстро приехал по заявке. Качественно провел ремонт нашего холодильника и это не заняло много времени.",
    source: "Google",
  },
  {
    name: "Галина",
    initials: "Г",
    color: "bg-red-600",
    meta: "1 отзыв",
    text: "Благодарна фирме и специалисту Ильдару за качественный ремонт холодильника. Быстро нашел неисправность, все исправил. Отдельное спасибо за то, что уменьшил шум холодильника. Стало намного комфортнее. Спасибо. Рекомендую.",
    source: "Google",
  },
  {
    name: "Эдуард Тимганов",
    initials: "Э",
    color: "bg-teal-600",
    meta: "1 отзыв",
    text: "Мастер Ильдар, профессионал своего дела. Быстро нашёл проблему, быстро отремонтировал.",
    source: "Google",
  },
  {
    name: "Юрий Ширинкин",
    initials: "Ю",
    color: "bg-yellow-500",
    meta: "1 отзыв · Знаток города 2 уровня",
    date: "5 февраля",
    text: "Вышла из строя морозильная камера. Приехал мастер, зовут Ильдар, произвёл диагностику, всё доходчиво объяснил по всем неисправностям. Произвёл ремонт быстро и качественно. Большое спасибо вам.",
    source: "Google",
  },
  {
    name: "Светлана Чечкина",
    initials: "С",
    color: "bg-pink-600",
    meta: "1 отзыв",
    text: "Спасибо большое мастеру своего дела Ильдару, вытек фреон, думали, что придется везти камеру в сервис, но Ильдар все сделал на месте, побольше бы таких мастеров.",
    source: "Google",
  },
]

const SOURCES = [
  {
    label: "Яндекс.Карты",
    icon: "MapPin",
    color: "bg-red-500",
    url: "https://yandex.ru/maps/org/permremkholod/40357764998/reviews/?ll=56.210974%2C57.985167&z=16",
  },
  {
    label: "Google Карты",
    icon: "Globe",
    color: "bg-blue-500",
    url: "https://www.google.ru/maps/place/ПермРемХолод+-+Ремонт+Холодильников+Перми/@57.9852264,56.2084335,17z/data=!4m8!3m7!1s0x43e8c724a0382395:0x3e0a581112ab5006!8m2!3d57.9852264!4d56.2110084!9m1!1b1!16s%2Fg%2F11fgkmd1mt?entry=ttu",
  },
  {
    label: "2ГИС",
    icon: "Map",
    color: "bg-green-600",
    url: "https://2gis.ru/perm/firm/70000001083636398/tab/reviews",
  },
  {
    label: "ВКонтакте",
    icon: "MessageSquare",
    color: "bg-blue-600",
    url: "https://vk.com/reviews-211597705",
  },
  {
    label: "ВК Обсуждение",
    icon: "MessagesSquare",
    color: "bg-indigo-600",
    url: "https://vk.com/wall-211597705_531",
  },
]

export function ReviewsSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col overflow-y-auto px-6 py-24 md:px-12 md:py-16 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Отзывы
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Честь и доброе имя ПермРемХолод</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          {/* Reviews grid */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-5 max-w-2xl text-sm leading-relaxed text-foreground/70">
              Репутация ПермРемХолод — одна из главных ценностей нашего сервиса. Ниже — реальные отзывы клиентов из открытых источников.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {REVIEWS.map((review, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-2 rounded-xl border border-border bg-card/90 p-4 shadow-sm backdrop-blur-sm transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${150 + i * 60}ms` }}
                >
                  {/* Author */}
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${review.color} font-sans text-sm font-bold text-white`}
                    >
                      {review.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-sans text-sm font-semibold text-foreground">{review.name}</p>
                      {review.meta && (
                        <p className="font-mono text-xs text-foreground/40">{review.meta}</p>
                      )}
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <span key={s} className="text-yellow-400 text-xs">★</span>
                    ))}
                    {review.date && (
                      <span className="ml-2 font-mono text-xs text-foreground/40">{review.date}</span>
                    )}
                  </div>

                  {/* Text */}
                  <p className="text-xs leading-relaxed text-foreground/75">{review.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: reputation + links */}
          <div
            className={`flex flex-col gap-4 transition-all duration-700 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            {/* Reputation block */}
            <div className="rounded-2xl border border-border bg-card/90 p-5 backdrop-blur-sm">
              <h3 className="mb-3 border-b border-primary/30 pb-2 font-sans text-base font-semibold text-primary">
                Честь и доброе имя ПермРемХолод
              </h3>
              <p className="mb-3 text-xs leading-relaxed text-foreground/70">
                Репутация ПермРемХолод — успешной мастерской, которая оперативно производит качественный и недорогой ремонт холодильного оборудования для жителей и предпринимателей Перми, — это одна из главных ценностей нашего сервиса.
              </p>
              <p className="text-xs leading-relaxed text-foreground/70">
                Важнейшим показателем репутации являются публичные отзывы о работе ПермРемХолод, которые оставляют наши клиенты в различных справочниках. Мы признательны всем, кто поделился впечатлениями об услугах нашей мастерской.
              </p>
            </div>

            {/* Sources */}
            <div className="rounded-2xl border border-border bg-card/90 p-5 backdrop-blur-sm">
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-foreground/50">
                Источники отзывов
              </p>
              <div className="flex flex-col gap-2">
                {SOURCES.map((src) => (
                  <a
                    key={src.label}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-2.5 transition-all hover:border-primary/40 hover:bg-primary/5"
                  >
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${src.color} text-white`}
                    >
                      <Icon name={src.icon} fallback="ExternalLink" size={14} />
                    </div>
                    <span className="font-sans text-sm text-foreground/80 group-hover:text-foreground">
                      {src.label}
                    </span>
                    <Icon name="ExternalLink" size={12} className="ml-auto text-foreground/30 group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
