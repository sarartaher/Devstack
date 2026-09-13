import { FiPackage, FiX, FiTrash2 } from "react-icons/fi";
import type { TechTypeProps } from "../types/TechTypeProps";

interface CardSelectProps {
  stack: TechTypeProps[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
  onAdd:()=> void;
}

const CardSelect = ({ stack, onRemove, onRemoveAll, onAdd }: CardSelectProps) => {
  const count = stack.length;

  return (
    <aside className="w-full shrink-0 rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:w-[340px]">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Your Stack
        </h2>
        <span className="brand-gradient shrink-0 rounded-full px-3 py-1 text-xs font-semibold text-white">
          {count} {count === 1 ? "Technology" : "Technologies"} Selected
        </span>
      </div>

      {count === 0 ? (
        
        <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200 px-4 py-12 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
            <FiPackage className="h-7 w-7" />
          </div>
          <p className="mt-4 font-semibold text-slate-700">
            Your stack is empty
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate-400">
            Add technologies from the cards to build your ideal development
            stack.
          </p>
        </div>
      ) : (
        <>
          {/* Selected items — 1 column layout */}
          <ul className="mt-6 flex flex-col gap-3">
            {stack.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 rounded-2xl border border-zinc-100 bg-zinc-50/70 p-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <img
                    src={item.icon}
                    alt={`${item.name} logo`}
                    className="h-6 w-6"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-800">
                    {item.name}
                  </p>
                  <span className="text-xs text-slate-500">
                    {item.category}
                  </span>
                </div>
                <button
                  type="button"
                  aria-label={`Remove ${item.name} from stack`}
                  onClick={() => onRemove(item.id)}
                  className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500"
                >
                  <FiX className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>

          {/* Remove All */}
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
          >
            <FiTrash2 className="h-4 w-4" />
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default CardSelect;