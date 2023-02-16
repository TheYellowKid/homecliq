import AgentListingsTable from "../../../components/dashboard/tables/AgentListingsTable";
import AgentDashBoardLayout from "../../../components/layouts/AgentDashBoardLayout";

export default function MyListings() {
  return (
    <AgentDashBoardLayout title="My Listings">
       <AgentListingsTable />
    </AgentDashBoardLayout>
  );
}
