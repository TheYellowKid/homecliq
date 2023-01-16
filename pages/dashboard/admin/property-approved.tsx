import PropertApprovedCard from "../../../components/cards/PropertyApprovedCard";
import DashboardNavbar from "../../../components/navigation/DashboardNavbar";

export default function PropertyApproved() {
  return (
    <div className="font-quicksand">
    <DashboardNavbar />
      <div className=" flex items-center justify-center p-4 md:p-32">
        <PropertApprovedCard />
      </div>
    </div>
  );
}