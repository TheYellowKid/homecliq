import PropertyDetailSideBar from "../../propertyDetails/PropertyDetailsSidebar";
import PropetyGallery from "../../gallery/PropertyGallerry";
import { collection, doc, getDocs } from "firebase/firestore";
import { fireStore } from "../../../firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
export default function PropertyDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<PropertyObject>();

  const querySnapshot = getDocs(collection(fireStore, "properties"));

  const getProperty = async () => {
    await querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id === id) {
          setProperty(doc.data() as PropertyObject);
          return;
        }
      });
    });
  };

  useEffect(() => {
    getProperty();
  }, []);

  return (
    <div className="grid grid-cols-4 py-32 px-96">
      <div className="flex flex-col col-span-3">
        <PropetyGallery images={property ? property.images : [""]} />
      </div>
      <div>
        <PropertyDetailSideBar
          title={property ? property.title : ""}
          rent={property ? property.rent : 0}
          location={property ? property.location : ""}
          towncity={property ? property.towncity : ""}
          id={id as string}
        />
      </div>
      <div className="flex flex-col col-span-4 gap-4 p-4">
        <text className="text-xl font-bold">Description</text>
        <text className="text-base">{property?.description}</text>
      </div>
    </div>
  );
}
