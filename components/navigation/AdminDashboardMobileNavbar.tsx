import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DashboardIcon,
  GearIcon,
  ExitIcon,
  PersonIcon ,
  EnvelopeOpenIcon,
  EnvelopeClosedIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../../firebase";

export default function AdminDashboardMobileNavbar() {
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
          <Link href="/dashboard/admin/">
          <div className="flex items-center gap-4">
            <DashboardIcon />
            <text className="text-base">Dashboard</text>
          </div>
        </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
           <Link href="/dashboard/admin/all-listings">
          <div className="flex items-center gap-4">
            <HomeIcon />
            <text className="text-base">All Listings</text>
          </div>
        </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Link href="/dashboard/admin/pending-listings">
          <div className="flex items-center gap-4">
            <EnvelopeOpenIcon />
            <text className="text-base">Pending</text>
          </div>
        </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Link href="/dashboard/admin/applications">
          <div className="flex items-center gap-4">
            <EnvelopeClosedIcon />
            <text className="text-base">Applications</text>
          </div>
        </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
           <Link href="/dashboard/admin/landlords">
          <div className="flex items-center gap-4">
            <PersonIcon />
            <text className="text-base">Landlords / Agents</text>
          </div>
        </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={signOut}>
          <div className="flex items-center gap-4">
            <ExitIcon />
            <a onClick={signOut}>
              <text className="text-base">Logout</text>
            </a>
          </div>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
