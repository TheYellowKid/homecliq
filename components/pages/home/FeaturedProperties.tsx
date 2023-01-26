import SqaureButton from "../../buttons/SquareButton";
import PropertyCard from "../../cards/PropertyCard";
import { useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "../../../firebase";
import { useEffect, useState } from "react";

interface PropertyObject {
  contactmethod: string;
  description: string;
  images: [string];
  isApproved: boolean;
  location: string;
  owneremail: string;
  ownername: string;
  ownerphone: string;
  ownersurname: string;
  rent: number;
  title: string;
  towncity: string;
}
export default function FeaturedProperties() {
  const router = useRouter();
  const [featuredListings, setFeaturedListings] = useState<PropertyObject[]>(
    []
  );
  const [propertyIds, setPropertyIds] = useState<string[]>([]);
  const querySnapshot = getDocs(collection(fireStore, "properties"));
  const getListings = async () => {
    const data: PropertyObject[] = [];
    const ids: string[] = [];
    await querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().isApproved === true) {
          data.push(doc.data() as PropertyObject);
          ids.push(doc.id);
        }
      });
    });
    setFeaturedListings(data);
    setPropertyIds(ids);
  };

  useEffect(() => {
    getListings();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <text className="text-sm md:text-xl font-semibold text-blue-900 text-center">
        ..Featured Properties..
      </text>
      <text className="text-xl md:text-4xl font-bold text-center">Explore Properties</text>
      <div className="flex flex-col md:grid w-full md:grid-cols-3 gap-4 px-4 md:px-64">
        {featuredListings.length > 0 ? (
          featuredListings
            .slice(0, 3)
            .map((property, i) => (
              <PropertyCard
                title={property.title}
                image={property.images[0]}
                rent={property.rent}
                location={property.location}
                towncity={property.towncity}
                id={propertyIds[i]}
              />
            ))
        ) : (
          <div className="items-center justify-center flex">
            <text>no featured property found</text>
          </div>
        )}
      </div>
      <div className="items-center justify-center m-8">
        <div>
          <SqaureButton
            text="View Listings"
            onClick={() => router.push("/listings")}
          />
        </div>
      </div>
    </div>
  );
}
