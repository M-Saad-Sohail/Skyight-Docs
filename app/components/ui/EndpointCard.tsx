import MethodBadge from './MethodBadge';
import CodeBlock from './CodeBlock';

interface EndpointCardProps {
  id: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  title: string;
  description?: string;
  payload?: string;
}

export default function EndpointCard({
  id,
  method,
  endpoint,
  title,
  description,
  payload,
}: EndpointCardProps) {
  return (
    <div id={id} className="group scroll-mt-24">
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20">
        <div className="flex flex-wrap items-start gap-4 mb-4">
          <MethodBadge method={method} />
          <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
        </div>
        
        <div className="mb-4 p-3 rounded-lg bg-slate-950/50 border border-slate-700/30 overflow-x-auto">
          <code className="text-sm text-cyan-400 font-mono break-all">{endpoint}</code>
        </div>

        {description && (
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">{description}</p>
        )}

        {payload && (
          <div className="mt-4">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Request Payload
            </h4>
            <CodeBlock code={payload} title="Body" />
          </div>
        )}
      </div>
    </div>
  );
}

