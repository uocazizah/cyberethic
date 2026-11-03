"use client";

import { useEffect, useState } from "react";

export function CreditPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
        <h2 className="text-lg font-semibold">Informasi Website</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-300">
          Website ini di buat oleh Uoc Azizah 🎀 (
          <a
            href="https://github.com/uocazizah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            https://github.com/uocazizah
          </a>
          ), dengan repository (
          <a
            href="https://github.com/uocazizah/cyberethic.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            https://github.com/uocazizah/cyberethic.git
          </a>
          )
        </p>
        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-300"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
