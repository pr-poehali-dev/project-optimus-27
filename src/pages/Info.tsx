import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"
import { CustomCursor } from "@/components/custom-cursor"

export default function Info() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <CustomCursor />
      {/* Top bar */}
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

      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <button
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-foreground/60 transition-colors hover:text-foreground"
        >
          <Icon name="ArrowLeft" size={16} />
          На главную
        </button>

        <p className="mb-2 font-mono text-xs text-foreground/50">
          ПермРемХолод / Мастерская / Правила сервиса
        </p>
        <h1 className="mb-10 font-sans text-4xl font-light leading-tight tracking-tight md:text-5xl">
          Условия предоставления услуг ПермРемХолод
        </h1>

        <Block title="Сведения о сервисной организации">
          <p>
            Мастерская «ПермРемХолод» – сервисное предприятие, оказывающее услуги по ремонту
            и техническому обслуживанию бытового и торгового холодильного оборудования
            в городе Пермь.
          </p>
          <InfoRow label="Поставщик услуг" value="НПД Минсадырова Роксана Илдаровна (ИНН: 594300978039)" />
          <InfoRow label="Контактный телефон" value="+7 (996) 176-96-80" />
        </Block>

        <Block title="Ремонтный цех ПермРемХолод">
          <p>
            Ремонт в стационарных условиях – ремонт, выполняемый в специально предназначенном
            месте, оборудованном стационарными средствами ремонта с применением,
            в необходимых случаях, переносных средств.
          </p>
          <p>Стационарный ремонтный цех обеспечивает проведение работ в случаях трудоёмкого ремонта:</p>
          <List
            items={[
              "Компонентный ремонт электронных плат",
              "Ремонт холодильников с утечкой фреона в запененной части холодильного агрегата",
              "Ремонт неразборных баков стиральной машины",
              "Капитальный ремонт выкупленной техники",
              "Демонстрация продаваемой техники покупателям",
            ]}
          />
          <InfoRow label="Наименование" value="Ремонтный цех «ПермРемХолод»" />
          <InfoRow label="Адрес" value="ул. Мира 5А, г. Пермь" />
          <InfoRow label="Режим работы" value="Нерегламентированный (приём по предварительной договорённости)" />
          <InfoRow label="Телефон" value="+7 (950) 459-38-64 (ежедневно с 9:00 до 21:00)" />
        </Block>

        <Block title="Миссия ПермРемХолод">
          <p>
            Миссия предприятия «ПермРемХолод» состоит в продлении сроков службы холодильников
            и стиральных машин для жителей Перми посредством пропаганды правильной эксплуатации
            техники, консультаций по работе технических устройств и оказания услуг технического
            обслуживания и ремонта неисправных аппаратов.
          </p>
        </Block>

        <Block title="Виды обслуживаемой техники">
          <List
            items={[
              "Бытовые холодильные и/или морозильные приборы (БХП)",
              "Торговое холодильное и/или морозильное оборудование (ТХО)",
              "Автомобильные холодильники",
              "Кондиционеры",
              "Стиральные машины-автоматы (СМА)",
            ]}
          />
        </Block>

        <Block title="Виды предоставляемых услуг">
          <List
            items={[
              "Технические консультации – поддержание работоспособности техники посредством экспертных рекомендаций",
              "Техническое обслуживание (ТО) – операции по поддержанию работоспособности объекта при использовании по назначению",
              "Ремонт – восстановление работоспособности, исправности и ресурса объекта и/или его составных частей",
              "Установка техники – подготовка к эксплуатации электрических машин и приборов",
              "Продажа восстановленной техники",
            ]}
          />
        </Block>

        <Block title="Порядок предоставления услуг">
          <p>Этапы предоставления услуги:</p>
          <List
            ordered
            items={[
              "Приём заказов",
              "Согласование времени и прибытие мастера",
              "Диагностирование объекта и согласование ремонта",
              "Выполнение ремонтных операций",
              "Процедура передачи-приёмки отремонтированной техники",
            ]}
          />
        </Block>

        <Block title="Приём заказов">
          <p>При оформлении заявки на услугу оформляется карточка заказа.</p>
          <p>Собираемые данные для оформления заказа:</p>
          <List
            items={[
              "Фамилия Имя Отчество клиента",
              "Контактный номер телефона",
              "Вид техники и марка производителя",
              "Конструктивные особенности техники",
              "Обнаруженные признаки неисправности",
              "Адрес установки (нахождения) техники",
              "Пожелания клиента по времени оказания услуги",
            ]}
          />
          <p>
            В некоторых случаях, для обеспечения подготовленности мастера к ремонту за один визит,
            может понадобиться фотография шильдика (бирки с характеристиками технического устройства).
          </p>
        </Block>

        <div className="mt-12 rounded-2xl bg-primary p-8 text-center">
          <h3 className="mb-2 font-sans text-2xl font-light text-primary-foreground">
            Нужен ремонт техники?
          </h3>
          <p className="mb-6 text-primary-foreground/90">
            Закажите бесплатную диагностику на дом — мастер приедет по заявке от 30 минут.
          </p>
          <a
            href="tel:+79504593864"
            className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3 font-sans font-medium text-primary transition-transform hover:scale-105"
          >
            <Icon name="Phone" size={18} />
            +7 (950) 459-38-64
          </a>
        </div>
      </div>
    </main>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10 border-t border-border pt-8">
      <h2 className="mb-4 font-sans text-2xl font-light tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
      <div className="space-y-3 text-base leading-relaxed text-foreground/80">{children}</div>
    </section>
  )
}

function List({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul"
  return (
    <Tag className={`space-y-2 ${ordered ? "list-decimal" : "list-none"} pl-1`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          {!ordered && (
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          )}
          {ordered && (
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
              {i + 1}
            </span>
          )}
          <span>{item}</span>
        </li>
      ))}
    </Tag>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 border-l-2 border-primary/40 pl-4 sm:flex-row sm:gap-4">
      <span className="font-mono text-sm text-foreground/50 sm:w-48 sm:shrink-0">{label}:</span>
      <span className="text-foreground">{value}</span>
    </div>
  )
}