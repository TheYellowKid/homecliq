import RoundButton from "../buttons/RoundButton";
import Link from "next/link";
import { useRouter } from "next/router";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon,} from "@radix-ui/react-icons";

export default function Navbar() {

  const router = useRouter();

  return (
    <nav
      className="sticky top-0 flex flex-wrap items-center justify-between w-screen p-6 bg-white shadow z-10"
    >
      <div className="flex items-center flex-shrink-0 mr-6 text-blue-900">
        <Link href="/">
          <text className="text-2xl font-black tracking-tight">HOMECLIQ</text>
        </Link>
      </div>
      <div className="block lg:hidden">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger
            className="flex items-center justify-center flex-wrap md:hidden"
            asChild
          >
            <HamburgerMenuIcon height={40} width={40} />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="p-4 bg-white flex flex-col justify-between rounded shadow z-50 w-52 h-60">
            <DropdownMenu.Item>
              <Link
                href="/"
                className="block mt-4 mr-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-black"
              >
                Home
             </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link
                href="/listings"
                className="block mt-4 mr-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-black"
              >
                Listings
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link
                href="/add-listing"
                className="block mt-4 font-bold mr-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-black"
              >
            Add Listing
          </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <RoundButton
                text="Track Application"
                onClick={() => router.push("/track-application")}
              />
            </DropdownMenu.Item>
            <DropdownMenu.Item>
               <RoundButton
                text="My Account"
                onClick={() => router.push("/dashboard")}
              />
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
      <div className="hidden md:flex-grow md:block w-full md:flex md:items-center md:w-auto">
        <div className="text-base font-bold lg:flex-grow">
          <Link
            href="/"
            className="block mt-4 mr-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-black"
          >
            Home
          </Link>
          <Link
            href="/listings"
            className="block mt-4 mr-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-black"
          >
            Listings
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4">
           <Link
            href="/add-listing"
            className="block mt-4 font-bold mr-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-black"
          >
            Add Listing
          </Link>
          <RoundButton
            text="Track Application"
            onClick={() => router.push("/track-application")}
          />
          <RoundButton
            text="My Account"
            onClick={() => router.push("/dashboard")}
          />
        </div>
      </div>
    </nav>
  );
}
