import ListingSubmitionSuccessCard from "../../../components/cards/ListingSubmitionSuccessCard";
import DashboardNavbar from "../../../components/navigation/DashboardNavbar";

export default function ListingSubmissionSuccess() {
  return (
    <div className="font-quicksand">
    <DashboardNavbar />
      <div className=" flex items-center justify-center p-4 md:p-32">
        <ListingSubmitionSuccessCard />
      </div>
    </div>
  );
}