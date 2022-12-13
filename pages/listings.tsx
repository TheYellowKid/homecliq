import Navbar from "../components/navigation/navbar";
import SmallBanner from "../components/banner/SmallBanner";
import ListingsTab from "../components/pages/listings/ListingsTab";
import Footer from "../components/footer/Footer";

export default function Listings() {
  return (
    <div className="font-quicksand">
      <Navbar />
      <SmallBanner />
      <ListingsTab />
      <Footer />
    </div>
  );
}
