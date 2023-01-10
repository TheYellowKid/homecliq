import Link from "next/link";
import DashboardCard from "../cards/DashboardCard";



interface CardProps {
  totalListings: number;
  totalApplications: number;
  doneDeals: number;
}
export default function CardsSection({ totalListings, totalApplications, doneDeals }: CardProps) {
  const cards = [
    {
      title: "Total Listings",
      count: totalListings,
      icon: "HomeIcon",
      link: "/dashboard/admin/all-listings"
    },
    {
      title: "Applications",
      count: totalApplications,
      icon: "PersonIcon",
      link:  "/dashboard/admin/applications"
    },

    {
      title: "Done Deals",
      count: doneDeals,
      icon: "CheckCircledIcon",
      link:  "dashboard/admin/donedeals"
    },
  ];
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      {cards.map((card) => (
        <Link href={card.link}>
          <DashboardCard title={card.title} count={card.count} icon={card.icon} />
        </Link>
      ))}
    </div>
  );
}
