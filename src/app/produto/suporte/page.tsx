import {
  CreditCard,
  Download,
  Gamepad2,
  Headphones,
  RefreshCcw,
  Search,
  ShieldCheck,
} from "lucide-react";

const supportTopics = [
  {
    title: "Problemas técnicos",
    description: "Ajuda para jogos que não abrem, travam ou apresentam erro.",
    icon: Gamepad2,
  },
  {
    title: "Pagamento",
    description: "Dúvidas sobre cobrança, confirmação e meios de pagamento.",
    icon: CreditCard,
  },
  {
    title: "Downloads",
    description: "Suporte para baixar, instalar e ativar seus jogos.",
    icon: Download,
  },
  {
    title: "Reembolso",
    description: "Consulte as regras e acompanhe solicitações em andamento.",
    icon: RefreshCcw,
  },
  {
    title: "Segurança",
    description: "Proteja sua conta e revise acessos recentes.",
    icon: ShieldCheck,
  },
  {
    title: "Atendimento",
    description: "Fale com o suporte quando precisar de ajuda personalizada.",
    icon: Headphones,
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 pb-16 pt-32 text-white sm:px-8">
      <section className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">
          Central de suporte
        </p>
        <h1 className="mt-4 text-3xl font-bold sm:text-5xl">
          Como podemos ajudar?
        </h1>

        <label className="relative mt-8 w-full max-w-2xl">
          <span className="sr-only">Buscar ajuda</span>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            size={20}
          />
          <input
            type="search"
            placeholder="Busque por pagamento, download, reembolso..."
            className="h-14 w-full rounded-lg border border-white/10 bg-white px-12 text-sm text-slate-950 outline-none transition focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20"
          />
        </label>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {supportTopics.map((topic) => {
          const Icon = topic.icon;

          return (
            <article
              key={topic.title}
              className="rounded-lg bg-slate-900 p-6 ring-1 ring-white/10 transition hover:ring-lime-400/60"
            >
              <Icon className="text-lime-300" size={32} />
              <h2 className="mt-5 text-lg font-semibold">{topic.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {topic.description}
              </p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
