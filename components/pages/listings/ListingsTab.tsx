import PageFilter from "../../filters/PageFilter";
import PropertyCard from "../../cards/PropertyCard";
import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "../../../firebase";
import { useState, useEffect } from "react";

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

export default function ListingsTab() {
  const [listings, setListings] = useState<PropertyObject[]>([]);
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
    setListings(data);
    setPropertyIds(ids);
  };

  useEffect(() => {
    getListings();
  }, []);

  const property = {
    title: "3 Bedroom Apartment",
    location: "Mabvazuva, Rusape",
    rent: 350,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/314234927.jpg?k=21291418450e2c1802e02864677b7cf811321797b1d36aaa55e1019133f82698&o=&hp=1",
  };

  return (
    <div className="flex flex-col py-32 px-96">
      <div className="flex items-center justify-between">
        <div>
          <PageFilter placeholder="Most Recent" options={[]} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {listings.length > 0 ? (
          listings.map((property, i) => (
            <PropertyCard
              title={property.title}
              image={property.images[0]}
              rent={property.rent}
              location={property.location}
              id={propertyIds[i]}
            />
          ))
        ) : (
          <div className="items-center justify-center flex">
            <text>no properties found</text>
          </div>
        )}
      </div>
    </div>
  );
}
