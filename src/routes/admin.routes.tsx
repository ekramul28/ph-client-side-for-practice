import AdminDashboard from "../pages/admin/AdminDashboard";
import StudentDashboard from "../pages/student/StudentDashboard";

export const adminPaths = [
  {
    index: true,
    element: <AdminDashboard />,
  },
  {
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "create-student",
    element: <StudentDashboard />,
  },
];

const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: "Dashboard",
  },
];
