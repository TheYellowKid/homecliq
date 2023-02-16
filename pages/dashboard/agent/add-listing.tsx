import AddListingForm from "../../../components/forms/AddListingForm";
import AgentDashBoardLayout from "../../../components/layouts/AgentDashBoardLayout";



export default function AgentDashboard() {
  return (
       <AgentDashBoardLayout title="Add New Listing">
        <AddListingForm />
       </AgentDashBoardLayout>
  );
}
