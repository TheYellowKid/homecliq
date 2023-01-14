import Link from "next/link";
import DashboardCard from "../../cards/DashboardCard";


interface CardProps {
  totalListings: number;
  pendingListings: number;
  totalApplications: number;
  doneDeals: number;
}
export default function AgentCardsSection({ totalListings,pendingListings, totalApplications, doneDeals }: CardProps) {

const cards = [
    {
      title: "Total Listings",
      count: totalListings,
      icon: "HomeIcon",
      link: "/dashboard/agent/my-listings"
    },
        {
      title: "Pending Listings",
      count: pendingListings,
      icon: "HomeIcon",
      link: "/dashboard/agent/pending-listings"
    },
    {
      title: "Applications",
      count: totalApplications,
      icon: "PersonIcon",
      link:  "/dashboard/agent/applications"
    },

    {
      title: "Done Deals",
      count: doneDeals,
      icon: "CheckCircledIcon",
      link:  "dashboard/agent/donedeals"
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