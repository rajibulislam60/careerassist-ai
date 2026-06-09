import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex gap-5">
      <Sidebar />
      {children}
    </div>
  );
}
