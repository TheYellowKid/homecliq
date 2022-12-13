import { HomeIcon, EyeOpenIcon } from "@radix-ui/react-icons";

interface DashboardCardProps {
  title: string;
  count: number;
}
export default function DashboardCard({ title, count }: DashboardCardProps) {
  return (
    <div className="flex flex-col w-56 p-4 bg-white rounded-sm shadow-lg h-36">
      <div className="flex items-center justify-between h-32">
        <HomeIcon height={40} width={40} />
        <div className="flex flex-col items-center justify-center">
          <text className="text-xl ">{title}</text>
          <text className="text-2xl font-black">{count}</text>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-end">
        <EyeOpenIcon />
        <text className="text-base">View</text>
      </div>
    </div>
  );
}
