import DashboardNavbar from "../../../components/navigation/DashboardNavbar";
import AdminDashboardSidebar from "../../../components/dashboard/admin/AdminDashboardSidebar";
import PendingListngsTable from "../../../components/dashboard/tables/PendingListingsTable";
import AdminDashboardMobileNavbar from "../../../components/navigation/AdminDashboardMobileNavbar";

export default function AllListings() {
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
            <text className="my-12 text-3xl font-bold">Pending Listings</text>
            <div className="flex items-center justify-center flex-wrap md:hidden">
              <AdminDashboardMobileNavbar />
            </div>
          </div>
          <PendingListngsTable />
        </div>
      </div>
    </div>
  );
}
