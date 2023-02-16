import Navbar from "../components/navigation/navbar";
import Banner from "../components/banner/Banner";
import FeaturedProperties from "../components/pages/home/FeaturedProperties";
import LandlordSection from "../components/pages/home/LandlordSection";
import FeedBackSection from "../components/pages/home/FeedbackSection";
import AppLayout from "../components/layouts/AppLayout";

export default function Index() {
  return (
    <AppLayout>
      <Banner />
      <FeaturedProperties />
      <LandlordSection />
      <FeedBackSection />
    </AppLayout>
  );
}
