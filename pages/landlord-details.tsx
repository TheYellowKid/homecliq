import PropertyOwnerDetailsForm from "../components/forms/PropertyOwnerDetailsForm";
import Navbar from "../components/navigation/navbar";
import Footer from "../components/footer/Footer";
import { useRouter } from "next/router";

export default function LandlordDetails() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div >
        <Navbar />
        <div className="flex items-center justify-center flex-col p-4 md:px-64">
            <PropertyOwnerDetailsForm id={id as string}/>
        </div>
        <Footer />
    </div>
  );
}