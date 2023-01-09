import DashboardCard from "../cards/DashboardCard";

export default function CardsSection() {
  const cards = [
    {
      title: "Total Listings",
      count: 100,
      icon: "HomeIcon",
    },
    {
      title: "Total Landlords",
      count: 50,
      icon: "PersonIcon",
    },

    {
      title: "Done Deals",
      count: 450,
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
