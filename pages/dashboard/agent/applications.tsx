import DashboardNavbar from "../../../components/navigation/DashboardNavbar";
import AgentDashboardSidebar from "../../../components/dashboard/agent/AgentDashboardSidebar";
import AgentApplicationsTable from "../../../components/dashboard/tables/AgentApplicationsTable";

export default function Applications() {
  return (
    <div className="font-quicksand">
      <DashboardNavbar />
      <div className="grid grid-cols-4 gap-8 px-96">
        <div>
          <AgentDashboardSidebar />
        </div>
        <div className="col-span-3 gap-8 mt-12">
          <text className="my-12 text-3xl font-bold"> Applications</text>
          <AgentApplicationsTable />
        </div>
      </div>
    </div>
  );
}
