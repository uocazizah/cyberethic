export type ContentBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "tip"; text: string }
  | {
      type: "callout";
      tone: "info" | "warning" | "danger";
      title?: string;
      text: string;
    }
  | { type: "doDont"; do: string[]; dont: string[] };

export interface Section {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  blocks: ContentBlock[];
}
