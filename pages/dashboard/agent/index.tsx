import DashboardNavbar from "../../../components/navigation/DashboardNavbar";
import CardsSection from "../../../components/dashboard/CardsSesction";
import AgentDashboardSidebar from "../../../components/dashboard/agent/AgentDashboardSidebar";

export default function AgentDashboard() {
  return (
    <div className="font-quicksand">
      <DashboardNavbar />
      <div className="grid grid-cols-4 gap-8 px-96">
        <div>
          <AgentDashboardSidebar />
        </div>
        <div className="col-span-3 gap-8 mt-12">
          <text className="my-12 text-3xl font-bold">Dashboard</text>
          <CardsSection />
        </div>
      </div>
    </div>
  );
}
