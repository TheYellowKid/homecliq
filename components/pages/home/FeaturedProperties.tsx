import SqaureButton from "../../buttons/SquareButton";
import PropertyCard from "../../cards/PropertyCard";

export default function FeaturedProperties() {
  const property = {
    title: "3 Bedroom Apartment",
    location: "Mabvazuva, Rusape",
    rent: 350,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/314234927.jpg?k=21291418450e2c1802e02864677b7cf811321797b1d36aaa55e1019133f82698&o=&hp=1",
  };
  return (
    <div className="flex flex-col items-center gap-4 px-32 py-8">
      <text className="text-xl font-semibold text-blue-900">
        ..Featured Properties..
      </text>
      <text className="text-4xl font-bold">Explore Properties</text>
      <div className="grid w-full grid-cols-3 gap-4 px-64">
        <PropertyCard
          title={property.title}
          image={property.image}
          rent={property.rent}
          location={property.location}
        />
        <PropertyCard
          title={property.title}
          image={property.image}
          rent={property.rent}
          location={property.location}
        />
        <PropertyCard
          title={property.title}
          image={property.image}
          rent={property.rent}
          location={property.location}
        />
      </div>
      <div className="items-center justify-center m-8">
        <div>
          <SqaureButton text="View Listings" />
        </div>
      </div>
    </div>
  );
}
