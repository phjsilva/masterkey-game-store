import { Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/", label: "Descobrir" },
  { href: "/", label: "Navegar" },
  { href: "/produto/suporte", label: "Suporte" },
];

export function SiteHeader() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 text-white backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/icon 1.png"
            alt="MasterKey"
            width={42}
            height={42}
            priority
          />
          <span className="hidden text-lg font-bold sm:block">MasterKey</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <label className="relative ml-auto hidden min-w-0 flex-1 max-w-md md:block">
          <span className="sr-only">Buscar jogos</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="search"
            placeholder="Buscar jogos"
            className="h-10 w-full rounded bg-white/10 pl-10 pr-3 text-sm outline-none ring-1 ring-white/10 transition placeholder:text-slate-400 focus:ring-lime-400"
          />
        </label>

        <div className="flex items-center gap-2">
          <button aria-label="Carrinho" className="rounded p-2 hover:bg-white/10">
            <ShoppingCart size={20} />
          </button>
          <button aria-label="Perfil" className="rounded p-2 hover:bg-white/10">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
