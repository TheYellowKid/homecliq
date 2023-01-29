import DashboardNavbar from "../../../components/navigation/DashboardNavbar";
import AdminDashboardSidebar from "../../../components/dashboard/admin/AdminDashboardSidebar";
import ApplicationsTable from "../../../components/dashboard/tables/ApplicationsTable";
import AdminDashboardMobileNavbar from "../../../components/navigation/AdminDashboardMobileNavbar";

export default function DoneDeals() {
  return (
    <div className="font-quicksand">
      <DashboardNavbar />
      <div className="flex flex-col md:grid md:grid-cols-5 px-32">
        <div className="hidden md:flex flex-col md:px-12">
          <AdminDashboardSidebar />
        </div>
        <div className="flex flex-col p-4 md:col-span-3">
          <div className="flex items-center justify-between p-4">
            <text className="my-12 text-3xl font-bold">Applications</text>
             <div className="flex items-center justify-center flex-wrap md:hidden">
              <AdminDashboardMobileNavbar />
            </div>
          </div>
           <ApplicationsTable  />
        </div>
      </div>
    </div>
  );
}
