import Navbar from "../components/navigation/navbar";
import SmallBanner from "../components/banner/SmallBanner";
import PropertyDetail from "../components/pages/listingDetails/PropertyDetail";
import Footer from "../components/footer/Footer";

export default function ListingDetails() {
  return (
    <div className="font-quicksand">
      <Navbar />
      <SmallBanner heading="Property Details" />
      <PropertyDetail />
      <Footer />
    </div>
  );
}
