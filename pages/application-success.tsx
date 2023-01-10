import { useRouter } from "next/router";
import SmallBanner from "../components/banner/SmallBanner";
import Navbar from "../components/navigation/navbar";
import Footer from "../components/footer/Footer";
import ApplicationSuccessCard from "../components/cards/ApplicationSuccessCard";

export default function ApplictionSuccess() {
  const router = useRouter();
  return (
    <div className="font-quicksand">
      <Navbar />
      <SmallBanner heading="Apply Property" />
      <div className=" flex items-center justify-center p-4 md:p-32">
        <ApplicationSuccessCard />
      </div>
      <Footer />
    </div>
  );
}
