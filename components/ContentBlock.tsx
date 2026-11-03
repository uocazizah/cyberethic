import type { ContentBlock as ContentBlockType } from "@/lib/types";
import { Callout } from "./Callout";
import { DoDont } from "./DoDont";
import { TipBox } from "./TipBox";

interface Props {
  block: ContentBlockType;
}

export function ContentBlock({ block }: Props) {
  switch (block.type) {
    case "heading": {
      const Tag = block.level === 2 ? "h2" : "h3";
      const className =
        block.level === 2
          ? "mt-8 text-xl font-bold tracking-tight"
          : "mt-6 text-lg font-semibold";
      return <Tag className={className}>{block.text}</Tag>;
    }
    case "paragraph":
      return (
        <p className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300">
          {block.text}
        </p>
      );
    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      const className = block.ordered
        ? "mt-3 list-decimal space-y-1 pl-6 text-zinc-700 dark:text-zinc-300"
        : "mt-3 list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300";
      return (
        <Tag className={className}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Tag>
      );
    }
    case "tip":
      return <TipBox text={block.text} />;
    case "callout":
      return (
        <Callout tone={block.tone} title={block.title} text={block.text} />
      );
    case "doDont":
      return <DoDont do={block.do} dont={block.dont} />;
    default:
      return null;
  }
}
