import type { TechTypeProps } from "../types/TechTypeProps";

interface CardTypeProps extends TechTypeProps {
  onAdd: (tech: TechTypeProps) => void;
  isAdded: boolean;
}

const Card = ({ onAdd, isAdded, ...item }: CardTypeProps) => {
  return (
    <>
      <div className="flex w-full max-w-[360px] flex-col justify-between rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm transition-all hover:shadow-md max-sm:max-w-lg">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center">
              <img src={item.icon} alt={item.name} className="h-10 w-10 " />
            </div>

            {item.badge && (
              <span className="rounded-full bg-sky-50 px-3.5 py-1 text-xs font-medium text-sky-500">
                {item.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">
            {item.name}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-3">
            {item.description}
          </p>

          {/* Metadata Tags Row */}
          <div className="mt-6 flex items-center justify-between gap-2 text-xs">
            <span className="rounded-md bg-slate-100/80 px-2.5 py-1 font-medium text-slate-600">
              {item.category}
            </span>

            <span className="font-medium text-slate-500">
              {item.difficulty}
            </span>

            <div className="flex items-center gap-1 font-semibold text-slate-700">
              <svg
                className="h-3.5 w-3.5 text-amber-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{item.rating}</span>
            </div>
          </div>
        </div>
        <button
          type="button"
          disabled={isAdded}
          onClick={() => onAdd(item)}
          className={`mt-6 w-full rounded-xl py-3 text-sm font-semibold transition-colors duration-150 active:scale-[0.99] ${
            isAdded
              ? "bg-slate-200 text-slate-500 cursor-not-allowed"
              : "bg-[#0b0f19] text-white hover:bg-slate-800"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </>
  );
};

export default Card;
