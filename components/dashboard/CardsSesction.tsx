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
    },
    {
      title: "Applications",
      count: totalApplications,
      icon: "PersonIcon",
    },

    {
      title: "Done Deals",
      count: doneDeals,
      icon: "CheckCircledIcon",
    },
  ];
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      {cards.map((card) => (
        <DashboardCard title={card.title} count={card.count} icon={card.icon} />
      ))}
    </div>
  );
}
