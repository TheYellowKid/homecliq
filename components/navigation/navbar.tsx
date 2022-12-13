import RoundButton from "../buttons/RoundButton";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 flex flex-wrap items-center justify-between w-screen p-6 bg-white shadow"
      style={{ zIndex: 10 }}
    >
      <div className="flex items-center flex-shrink-0 mr-6 text-blue-900">
        <text className="text-2xl font-black tracking-tight">HOMECLIQ</text>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
        <div className="text-base font-bold lg:flex-grow">
          <a
            href="#"
            className="block mt-4 mr-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-black"
          >
            Home
          </a>
          <a
            href="#"
            className="block mt-4 mr-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-black"
          >
            Listings
          </a>
        </div>
        <div className="flex items-center justify-center gap-4">
          <RoundButton text="Add Listing" />
          <RoundButton text="My Account" />
        </div>
      </div>
    </nav>
  );
}
