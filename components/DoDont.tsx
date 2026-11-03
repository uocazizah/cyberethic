interface Props {
  do: string[];
  dont: string[];
}

export function DoDont({ do: doList, dont }: Props) {
  return (
    <div className="my-4 grid gap-4 md:grid-cols-2">
      <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-900/40 dark:bg-green-950/40">
        <h3 className="mb-2 font-semibold text-green-800 dark:text-green-300">
          Lakukan
        </h3>
        <ul className="list-disc space-y-1 pl-5 text-sm text-green-900 dark:text-green-200">
          {doList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900/40 dark:bg-red-950/40">
        <h3 className="mb-2 font-semibold text-red-800 dark:text-red-300">
          Hindari
        </h3>
        <ul className="list-disc space-y-1 pl-5 text-sm text-red-900 dark:text-red-200">
          {dont.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
