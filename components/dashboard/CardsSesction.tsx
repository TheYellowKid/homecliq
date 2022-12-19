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
    <div className="grid grid-cols-3 gap-12">
      {cards.map((card) => (
        <DashboardCard title={card.title} count={card.count} icon={card.icon} />
      ))}
    </div>
  );
}
