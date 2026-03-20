import { Info, AlertTriangle, CheckCircle } from "lucide-react";

interface CalloutProps {
  type?: "info" | "warning" | "success";
  children: React.ReactNode;
}

const icons = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
};

const styles = {
  info: "border-blue-500/50 bg-blue-500/10 text-blue-200",
  warning: "border-yellow-500/50 bg-yellow-500/10 text-yellow-200",
  success: "border-accent/50 bg-accent/10 text-green-200",
};

export function Callout({ type = "info", children }: CalloutProps) {
  const Icon = icons[type];

  return (
    <div
      className={`my-6 flex gap-3 rounded-lg border p-4 ${styles[type]}`}
      role="note"
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
