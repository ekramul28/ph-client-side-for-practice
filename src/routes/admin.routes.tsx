import { NavLink } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { Children, ReactNode } from "react";

// export const adminPaths = [
//   {
//     path: "dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
// ];

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create-Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

// type TRoute = {
//   path: string;
//   element: ReactNode;
// };

// export const adminRoutes = adminPaths.reduce((acc: TRoute[], items) => {
//   if (items.path && items.element) {
//     acc.push({
//       path: items.path,
//       element: items.element,
//     });
//   }
//   if (items.children) {
//     items.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);

type TSideRoute = {
  key: string;
  label: ReactNode;
  children?: TSideRoute[];
};

export const adminSidebarItems = adminPaths.reduce(
  (acc: TSideRoute[], items) => {
    if (items.name && items.path) {
      acc.push({
        key: items.name,
        label: <NavLink to={`/admin/${items.path}`}>{items.name}</NavLink>,
      });
    }

    if (items.children) {
      acc.push({
        key: items.name,
        label: items.name,
        children: items.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  },
  []
);

console.log(adminSidebarItems);
