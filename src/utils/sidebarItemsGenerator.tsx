import { NavLink } from "react-router-dom";
import { TSideRoute, TUserPath } from "../types";

export const sidebarItemGenerator = (items: TUserPath[], role: string) => {
  const adminSidebarItem = items.reduce((acc: TSideRoute[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);

  return adminSidebarItem;
};
