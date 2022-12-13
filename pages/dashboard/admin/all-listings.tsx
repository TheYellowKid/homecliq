import DashboardNavbar from "../../../components/navigation/DashboardNavbar";
import AdminDashboardSidebar from "../../../components/dashboard/admin/AdminDashboardSidebar";
import AllListingsTable from "../../../components/dashboard/tables/AllListingsTable";

export default function AllListings() {
  return (
    <div className="font-quicksand">
      <DashboardNavbar />
      <div className="grid grid-cols-4 gap-8 px-96">
        <div>
          <AdminDashboardSidebar />
        </div>
        <div className="col-span-3 gap-8 mt-12">
          <text className="my-12 text-3xl font-bold">Listings</text>
          <AllListingsTable />
        </div>
      </div>
    </div>
  );
}
