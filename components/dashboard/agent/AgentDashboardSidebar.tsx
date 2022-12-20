import {
  DashboardIcon,
  GearIcon,
  ExitIcon,
  PlusIcon,
  EnvelopeOpenIcon,
  EnvelopeClosedIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function AgentDashboardSidebar() {
  return (
    <div className="flex flex-col p-4 bg-white rounded shadow">
      <div className="flex items-center justify-center p-4">
        <text className="text-2xl font-black tracking-tight text-blue-900">
          HOMECLICK
        </text>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <Link href="/dashboard/agent/">
          <div className="flex items-center gap-4">
            <DashboardIcon />
            <text className="text-base">Dashboard</text>
          </div>
        </Link>
        <Link href="/dashboard/agent/add-listing">
          <div className="flex items-center gap-4">
            <PlusIcon />
            <text className="text-base">Add Listings</text>
          </div>
        </Link>
        <Link href="/dashboard/agent/my-listings">
          <div className="flex items-center gap-4">
            <HomeIcon />
            <text className="text-base">My Listings</text>
          </div>
        </Link>
        <Link href="/dashboard/agent/pending-listings">
          <div className="flex items-center gap-4">
            <EnvelopeOpenIcon />
            <text className="text-base">Pending</text>
          </div>
        </Link>
        <Link href="/dashboard/agent/applications">
          <div className="flex items-center gap-4">
            <EnvelopeClosedIcon />
            <text className="text-base">Applications</text>
          </div>
        </Link>
        <Link href="#">
          <div className="flex items-center gap-4">
            <GearIcon />
            <text className="text-base">Settings</text>
          </div>
        </Link>
        <Link href="#">
          <div className="flex items-center gap-4">
            <ExitIcon />
            <text className="text-base">Logout</text>
          </div>
        </Link>
      </div>
    </div>
  );
}
