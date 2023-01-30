import DashboardNavbar from "../../../components/navigation/DashboardNavbar"
import AdminListingSubmitionFailedCard from "../../../components/cards/AdminListingSubmitionFailed"

export default function ListingSubmissionFailed() {
    return(
        <div className="font-quicksand">
            <DashboardNavbar />
            <div className=" flex items-center justify-center p-4 md:p-32">
                <AdminListingSubmitionFailedCard/>
            </div>
        </div>
    )
}