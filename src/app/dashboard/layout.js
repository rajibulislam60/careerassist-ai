import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex gap-5 w-full">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
}
