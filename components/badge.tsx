import React from "react";

function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.ReactNode {
  return (
    <span
      className={`rounded-lg border bg-zinc-100 px-2.5 py-0.5 text-xs font-medium leading-[10px] text-zinc-900 ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
