import { EyeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";

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
        <Link href="/listing-details">
          <img
            src={image}
            alt="property"
            className="w-full h-64 rounded-t"
            height={300}
          />
        </Link>
      </div>
      <div className="flex flex-col p-4">
        <div>
          <Link href="listing-details">
            <h3 className="text-xl font-bold">{title}</h3>
          </Link>
          <h3 className="text-base font-normal">{location}</h3>
          <h3 className="text-base font-semibold">${rent}/month</h3>
        </div>
        <hr className="my-4" />
        <div className="flex flex-row-reverse">
          <Link href="/listing-details">
            <text className="flex items-center gap-2">
              <EyeOpenIcon />
              View
            </text>
          </Link>
        </div>
      </div>
    </div>
  );
}
