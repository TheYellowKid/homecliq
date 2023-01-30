import AdminListingSubmitionSuccessCard from "../../../components/cards/AdminListingSubmissionSuccess";
import DashboardNavbar from "../../../components/navigation/DashboardNavbar";

export default function AdminListingSubmissionSuccess() {
  return (
    <div className="font-quicksand">
    <DashboardNavbar />
      <div className=" flex items-center justify-center p-4 md:p-32">
        <AdminListingSubmitionSuccessCard />
      </div>
    </div>
  );
}