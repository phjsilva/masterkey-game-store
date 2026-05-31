interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-5 border-b border-white/15 pb-3">
      <h2 className="text-lg font-semibold uppercase tracking-[0.16em] text-slate-100">
        {children}
      </h2>
    </div>
  );
}
