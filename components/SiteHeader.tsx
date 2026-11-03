import Link from "next/link";
import { sections } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Cyber Ethic
        </Link>
        <nav className="flex flex-wrap gap-1 text-sm">
          {sections.map((s) => (
            <Link
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-md px-2 py-1 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
            >
              {s.shortTitle}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
