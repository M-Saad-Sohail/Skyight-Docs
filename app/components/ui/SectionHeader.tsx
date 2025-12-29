interface SectionHeaderProps {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function SectionHeader({ id, title, description, icon }: SectionHeaderProps) {
  return (
    <div id={id} className="scroll-mt-24 mb-8">
      <div className="flex items-center gap-3 mb-3">
        {icon && (
          <div className="p-2.5 rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20">
            {icon}
          </div>
        )}
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">
          {title}
        </h2>
      </div>
      {description && (
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{description}</p>
      )}
      <div className="mt-4 h-px bg-linear-to-r from-cyan-500/50 via-blue-500/30 to-transparent" />
    </div>
  );
}

