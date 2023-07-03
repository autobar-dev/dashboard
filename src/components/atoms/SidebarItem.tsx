import { Button } from "@tremor/react";
import Link from "next/link";

export default function SidebarItem({ path, label, icon, active }: {
  path: string,
  label: string,
  icon: JSX.Element,
  active: boolean,
}) {
  const generalClassName = "w-full flex flex-row justify-start px-6 mt-2 border-none";
  const activeClassName = "bg-tremor-brand";
  const inactiveClassName = "bg-tremor-brand-faint hover:bg-tremor-brand-muted";

  return (
    <Link href={path}>
      <Button
        className={`${generalClassName} ${active ? activeClassName : inactiveClassName}`}
        variant={active ? "primary" : "secondary"}
      >
        {icon}
        <span className="inline-block ml-4">{label}</span>
      </Button>
    </Link>
  );
}
