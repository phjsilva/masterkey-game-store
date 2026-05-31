import { formatCurrency } from "@/lib/formatters";

interface PriceBlockProps {
  price?: number;
  discount?: number;
  finalPrice?: number;
  compact?: boolean;
}

export function PriceBlock({
  price = 0,
  discount = 0,
  finalPrice = 0,
  compact = false,
}: PriceBlockProps) {
  return (
    <div className="flex items-center gap-3">
      {discount > 0 ? (
        <span className="rounded bg-lime-500 px-2 py-1 text-sm font-bold text-slate-950">
          -{discount}%
        </span>
      ) : null}

      <div className="flex flex-col items-end leading-tight">
        {price > 0 && discount > 0 ? (
          <span className="text-xs text-slate-400 line-through">
            {formatCurrency(price)}
          </span>
        ) : null}
        <span className={compact ? "text-sm font-semibold" : "text-lg font-bold"}>
          {formatCurrency(finalPrice || price)}
        </span>
      </div>
    </div>
  );
}
