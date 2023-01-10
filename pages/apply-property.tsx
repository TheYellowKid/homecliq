import Navbar from "../components/navigation/navbar";
import SmallBanner from "../components/banner/SmallBanner";
import Footer from "../components/footer/Footer";
import TenandApplicationForm from "../components/forms/TenandApplicationForm";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ApplyProperty() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="font-quicksand">
      <Navbar />
      <SmallBanner heading="Apply Property" />
      <div className=" flex items-center justify-center p-4 md:p-32">
        <TenandApplicationForm id={id as string} />
      </div>
      <Footer />
    </div>
  );
}
