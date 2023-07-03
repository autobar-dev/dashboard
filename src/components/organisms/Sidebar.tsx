import SidebarItem from "../atoms/SidebarItem";
import { usePathname } from "next/navigation";
import { HiCube, HiCurrencyDollar, HiUsers } from "react-icons/hi2";

type SidebarItemContent = {
  path: string,
  label: string,
  icon: JSX.Element,
};

const items: SidebarItemContent[] = [
  {
    path: "/users",
    label: "Users",
    icon: (
      <HiUsers className="mr-2 text-lg inline-block" />
    ),
  },
  {
    path: "/modules",
    label: "Modules",
    icon: (
      <HiCube className="mr-2 text-lg inline-block" />
    ),
  },
  {
    path: "/currencies",
    label: "Currencies",
    icon: (
      <HiCurrencyDollar className="mr-2 text-lg inline-block" />
    ),
  },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <nav className={`h-full w-52 left-0 bg-white border-r-gray-200 border-r pt-2 px-2 flex-col "flex"}`}>
      {items.map(item => (
        <SidebarItem
          path={item.path}
          label={item.label}
          icon={item.icon}
          key={`sidebar-item-${item.path}`}
          active={path.includes(item.path)}
        />
      ))}
    </nav>
  );
}
