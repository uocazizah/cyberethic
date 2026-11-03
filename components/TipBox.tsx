interface Props {
  text: string;
}

export function TipBox({ text }: Props) {
  return (
    <div className="my-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-200">
      <span className="font-semibold">Tips: </span>
      {text}
    </div>
  );
}
