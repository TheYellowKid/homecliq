import Navbar from "../components/navigation/navbar";
import SmallBanner from "../components/banner/SmallBanner";
import SearchResultsTab from "../components/pages/listings/SearchResults";
import Footer from "../components/footer/Footer";
import { useRouter } from "next/router";


export default function Search() {
    
    const router = useRouter();
    const { type, location } = router.query;


    return(
    <div className="font-quicksand">
      <Navbar />
      <SmallBanner heading="Listings" />
        <SearchResultsTab type={type as string} location ={location as string} />
      <Footer />
    </div>
    )
}