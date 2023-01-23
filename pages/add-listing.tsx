import Navbar from "../components/navigation/navbar"
import Footer from "../components/footer/Footer"
import AddListingForm2 from "../components/forms/AddListingForm2"

export default function AddListing(){
    return (
        <>
            <Navbar />
            <div className="flex flex-col p-4 md:px-64">
                 <AddListingForm2 />
            </div>
            <Footer />
        </>
    )
}