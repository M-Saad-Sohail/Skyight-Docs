interface MethodBadgeProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

const methodStyles = {
  GET: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  POST: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  PUT: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  DELETE: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
};

export default function MethodBadge({ method }: MethodBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-bold tracking-wider border ${methodStyles[method]}`}
    >
      {method}
    </span>
  );
}

