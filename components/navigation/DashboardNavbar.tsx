import Avatar from "../avatar/Avatar";

export default function DashboardNavbar() {
  return (
    <nav
      className="sticky top-0 flex flex-wrap items-center justify-between w-screen p-6 bg-white shadow"
      style={{ zIndex: 10 }}
    >
      <div className="flex flex-row-reverse w-full">
        <div className="flex items-center justify-center gap-4">
          <text>Elvin</text>
          <Avatar />
        </div>
      </div>
    </nav>
  );
}
