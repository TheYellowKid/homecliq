import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DashboardIcon,
  GearIcon,
  ExitIcon,
  PlusIcon,
  EnvelopeOpenIcon,
  EnvelopeClosedIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../../firebase";

export default function DashboardMobileNavbar() {
  const router = useRouter();

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        router.push("/dashboard");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="flex items-center justify-center flex-wrap md:hidden"
        asChild
      >
        <HamburgerMenuIcon height={40} width={40} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="p-4 bg-white flex flex-col justify-between rounded shadow z-50 w-52 h-60">
        <DropdownMenu.Item>
          <Link href="/dashboard/agent/">
            <div className="flex items-center gap-4">
              <DashboardIcon />
              <text className="text-base">Dashboard</text>
            </div>
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Link href="/dashboard/agent/add-listing">
            <div className="flex items-center gap-4">
              <PlusIcon />
              <text className="text-base">Add Listings</text>
            </div>
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Link href="/dashboard/agent/my-listings">
            <div className="flex items-center gap-4">
              <HomeIcon />
              <text className="text-base">My Listings</text>
            </div>
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Link href="/dashboard/agent/pending-listings">
            <div className="flex items-center gap-4">
              <EnvelopeOpenIcon />
              <text className="text-base">Pending</text>
            </div>
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Link href="/dashboard/agent/applications">
            <div className="flex items-center gap-4">
              <EnvelopeClosedIcon />
              <text className="text-base">Applications</text>
            </div>
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={signOut}>
          <div className="flex items-center gap-4">
            <ExitIcon />
            <text className="text-base">Logout</text>
          </div>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
