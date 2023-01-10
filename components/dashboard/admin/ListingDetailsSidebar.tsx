import DeleteButton from "../../buttons/DeleteButton";
import SqaureButton from "../../buttons/SquareButton";
import Link from "next/link";

interface SidebarProps {
  title: string;
  rent: number;
  location: string;
  towncity: string;
  id: string;
  agent: string;
  agentphone: string;
  agentemail: string;
}

export default function ListingsDetailSideBar({
  title,
  rent,
  location,
  towncity,
  id,
  agent,
  agentemail,
  agentphone,
}: SidebarProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <Link href="/dashboard/admin/all-listings">
          <SqaureButton text="Back to Listings" onClick={() => {}} />
        </Link>
      </div>
      <div className="flex flex-col gap-4 p-4 bg-gray-300 rounded overflow-hidden">
        <text className="text-xl font-bold">Details</text>
        <text>
          <span className="font-bold">Property:</span> {title}
        </text>
        <text>
          <span className="font-bold">Location:</span> {location}, {towncity}
        </text>
        <text>
          <span className="font-bold">Rent:</span> ${rent}/month
        </text>
        <text>
          <span className="font-bold">Date Listed:</span> 3 Jan 2022
        </text>
        <text>
          <span className="font-bold">Owner / Agent:</span> {agent}
        </text>
        <text>
          <span className="font-bold">Phone Number:</span> {agentphone}
        </text>
        <text>
          <span className="font-bold">Email:</span> {agentemail}
        </text>
        <DeleteButton text="Delete" />
      </div>
    </div>
  );
}
