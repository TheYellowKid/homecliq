import SqaureButton from "../buttons/SquareButton";
import { useRouter } from "next/router";

interface SidebarProps {
  title: string;
  rent: number;
  location: string;
  towncity: string;
  owneremail:string;
  id: string;
}

export default function PropertyDetailSideBar({
  title,
  rent,
  location,
  towncity,
  owneremail,
  id,
}: SidebarProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-300 rounded">
      <text className="text-xl font-bold">Property Info</text>
      <text>{title}</text>
      <text>
        {towncity}, {location}
      </text>
      <text>${rent}/month</text>
      <SqaureButton
        text="Apply Now"
        onClick={() =>
          router.push({ pathname: "/apply-property", query: { id: id, owneremail:owneremail } })
        }
      />
    </div>
  );
}
