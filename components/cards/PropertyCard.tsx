import { EyeOpenIcon } from "@radix-ui/react-icons";

interface PropertyCardProps {
  title: string;
  location: string;
  rent: number;
  image: string;
}
export default function PropertyCard({
  title,
  location,
  rent,
  image,
}: PropertyCardProps) {
  return (
    <div className="flex flex-col bg-white rounded shadow">
      <div>
        <img
          src={image}
          alt="property"
          className="w-full h-64 rounded-t"
          height={300}
        />
      </div>
      <div className="flex flex-col p-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <h3 className="text-base font-normal">{location}</h3>
          <h3 className="text-base font-semibold">${rent}/month</h3>
        </div>
        <hr className="my-4" />
        <div className="flex flex-row-reverse">
          <text className="flex items-center gap-2">
            <EyeOpenIcon />
            View
          </text>
        </div>
      </div>
    </div>
  );
}
