import DashboardNavbar from "../../../components/navigation/DashboardNavbar";
import PendingListngsTable from "../../../components/dashboard/tables/PendingListingsTable";
import AgentDashboardSidebar from "../../../components/dashboard/agent/AgentDashboardSidebar";
import AgentPendingListngsTable from "../../../components/dashboard/tables/AgentPendingListingsTable";
import DashboardMobileNavbar from "../../../components/navigation/DashboardMobileNavbar";
import AgentDashBoardLayout from "../../../components/layouts/AgentDashBoardLayout";


export default function PendingListings() {
  return (
   <AgentDashBoardLayout title="Pending Listings">
     <AgentPendingListngsTable />
   </AgentDashBoardLayout>
  );
}
