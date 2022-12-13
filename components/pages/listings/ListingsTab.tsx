import PageFilter from "../../filters/PageFilter";
import PropertyCard from "../../cards/PropertyCard";

export default function ListingsTab() {
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <PropertyCard
            title={property.title}
            image={property.image}
            rent={property.rent}
            location={property.location}
          />
        ))}
      </div>
    </div>
  );
}
