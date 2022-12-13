import Navbar from "../components/navigation/navbar";
import Banner from "../components/banner/Banner";
import FeaturedProperties from "../components/pages/home/FeaturedProperties";
import LandlordSection from "../components/pages/home/LandlordSection";
import FeedBackSection from "../components/pages/home/FeedbackSection";
import Footer from "../components/footer/Footer";

export default function Index() {
  return (
    <div className="flex flex-col w-screen font-quicksand">
      <Navbar />
      <Banner />
      <FeaturedProperties />
      <LandlordSection />
      <FeedBackSection />
      <Footer />
    </div>
  );
}
