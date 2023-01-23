import PropertyOwnerDetailsForm from "../components/forms/PropertyOwnerDetailsForm";
import Navbar from "../components/navigation/navbar";
import Footer from "../components/footer/Footer";

export default function LandlordDetails() {
  return (
    <div >
        <Navbar />
        <div className="flex items-center justify-center flex-col p-4 md:px-64">
            <PropertyOwnerDetailsForm />
        </div>
        <Footer />
    </div>
  );
}