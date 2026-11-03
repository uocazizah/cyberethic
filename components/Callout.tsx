interface Props {
  tone: "info" | "warning" | "danger";
  title?: string;
  text: string;
}

const TONE_STYLES: Record<Props["tone"], string> = {
  info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-200",
  warning:
    "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/40 dark:text-amber-200",
  danger:
    "border-red-200 bg-red-50 text-red-900 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200",
};

export function Callout({ tone, title, text }: Props) {
  return (
    <div
      className={`my-4 rounded-lg border px-4 py-3 text-sm ${TONE_STYLES[tone]}`}
    >
      {title && <p className="mb-1 font-semibold">{title}</p>}
      <p>{text}</p>
    </div>
  );
}
