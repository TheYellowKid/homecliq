import SmallBanner from "../components/banner/SmallBanner";
import PropertyDetail from "../components/pages/listingDetails/PropertyDetail";
import AppLayout from "../components/layouts/AppLayout";

export default function ListingDetails() {
  return (
    <AppLayout>
      <SmallBanner heading="Property Details" />
      <PropertyDetail />
    </AppLayout>
  );
}
