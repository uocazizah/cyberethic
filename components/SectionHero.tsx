import type { Section } from "@/lib/types";

interface Props {
  section: Section;
}

export function SectionHero({ section }: Props) {
  return (
    <section className="mb-8">
      <p className="text-sm font-medium text-zinc-500">{section.shortTitle}</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight">
        {section.title}
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">{section.intro}</p>
    </section>
  );
}
