import { ContentBlock } from "@/components/ContentBlock";
import { SectionHero } from "@/components/SectionHero";
import { sections } from "@/lib/content";

export const metadata = {
  title: "Cyber Ethic — Panduan Etika dan Keamanan Komunikasi Digital",
  description:
    "Panduan praktis tentang etika dan keamanan komunikasi digital untuk pelajar dan umum.",
};

export default function Home() {
  return (
    <main id="top" className="mx-auto max-w-3xl px-4 py-12">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Panduan Etika dan Keamanan Komunikasi Digital
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
          Cyber Ethic membantu kamu berkomunikasi secara sopan, aman, dan
          bertanggung jawab di internet. Gulir ke bawah untuk membaca semua
          topik.
        </p>
      </section>
      {sections.map((section) => (
        <section
          key={section.slug}
          id={section.slug}
          className="scroll-mt-20 border-t border-zinc-800 py-12 first:border-t-0"
        >
          <SectionHero section={section} />
          <div>
            {section.blocks.map((block, i) => (
              <ContentBlock key={`${section.slug}-${i}`} block={block} />
            ))}
          </div>
        </section>
      ))}
      <div className="mt-8 text-center">
        <a href="#top" className="text-sm text-zinc-400 hover:text-zinc-100">
          Kembali ke atas ↑
        </a>
      </div>
    </main>
  );
}
