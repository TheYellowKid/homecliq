import DashboardNavbar from "../../../components/navigation/DashboardNavbar";
import AgentDashboardSidebar from "../../../components/dashboard/agent/AgentDashboardSidebar";
import AgentListingsTable from "../../../components/dashboard/tables/AgentListingsTable";
import DashboardMobileNavbar from "../../../components/navigation/DashboardMobileNavbar";

export default function MyListings() {
  return (
    <div className="font-quicksand">
      <DashboardNavbar />
      <div className="flex-col md:grid md:grid-cols-5">
        <div className="hidden md:flex flex-col md:px-12"></div>
        <div className="hidden md:flex flex-col md:px-12">
          <AgentDashboardSidebar />
        </div>
        <div className="flex-col p-4 md:col-span-3">
          <div className="flex items-center justify-between p-4">
            <text className="my-12 text-3xl font-bold">My Listings</text>
            <div className="flex items-center justify-center flex-wrap md:hidden">
              <DashboardMobileNavbar />
            </div>
          </div>
          <AgentListingsTable />
        </div>
      </div>
    </div>
  );
}
