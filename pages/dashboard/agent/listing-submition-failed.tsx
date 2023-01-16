import DashboardNavbar from "../../../components/navigation/DashboardNavbar"
import ListingSubmitionFailedCard from "../../../components/cards/ListingSubmitionFailedCard"

export default function ListingSubmissionFailed() {
    return(
        <div className="font-quicksand">
            <DashboardNavbar />
            <div className=" flex items-center justify-center p-4 md:p-32">
                <ListingSubmitionFailedCard />
            </div>
        </div>
    )
}