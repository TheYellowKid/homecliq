import Navbar from "../components/navigation/navbar";
import SmallBanner from "../components/banner/SmallBanner";
import Footer from "../components/footer/Footer";
import TenandApplicationForm from "../components/forms/TenandApplicationForm";

export default function ApplyProperty() {
  return (
    <div className="font-quicksand">
      <Navbar />
      <SmallBanner heading="Apply Property" />
      <div className=" flex items-center justify-center p-32">
        <TenandApplicationForm />
      </div>
      <Footer />
    </div>
  );
}
