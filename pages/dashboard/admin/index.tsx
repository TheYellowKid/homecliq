import DashboardNavbar from "../../../components/navigation/DashboardNavbar";
import CardsSection from "../../../components/dashboard/CardsSesction";
import AdminDashboardSidebar from "../../../components/dashboard/admin/AdminDashboardSidebar";
import AdminDashboardMobileNavbar from "../../../components/navigation/AdminDashboardMobileNavbar";

export default function AdminDashboard() {
  return (
    <div className="font-quicksand">
      <DashboardNavbar />
      <div className="flex flex-col md:grid md:grid-cols-5">
        <div className="hidden md:flex flex-col md:px-12"></div>
        <div className="hidden md:flex flex-col md:px-12">
          <AdminDashboardSidebar />
        </div>
        <div className="flex flex-col p-4 md:col-span-3">
          <div className="flex items-center justify-between p-4">
            <text className="text-3xl font-bold">Dashboard</text>
            <div className="flex items-center justify-center flex-wrap md:hidden">
              <AdminDashboardMobileNavbar />
            </div>
          </div>
          <CardsSection />
        </div>
      </div>
    </div>
  );
}
