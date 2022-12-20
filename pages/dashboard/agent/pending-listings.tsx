import DashboardNavbar from "../../../components/navigation/DashboardNavbar";
import PendingListngsTable from "../../../components/dashboard/tables/PendingListingsTable";
import AgentDashboardSidebar from "../../../components/dashboard/agent/AgentDashboardSidebar";
import AgentPendingListngsTable from "../../../components/dashboard/tables/AgentPendingListingsTable";
export default function AllListings() {
  return (
    <div className="font-quicksand">
      <DashboardNavbar />
      <div className="grid grid-cols-4 gap-8 px-96">
        <div>
          <AgentDashboardSidebar />
        </div>
        <div className="col-span-3 gap-8 mt-12">
          <text className="my-12 text-3xl font-bold">Pending Listings</text>
          <AgentPendingListngsTable />
        </div>
      </div>
    </div>
  );
}
