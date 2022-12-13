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
      icon: "HomeIcon",
    },
    {
      title: "Total Tenands",
      count: 200,
      icon: "HomeIcon",
    },
    {
      title: "Done Deals",
      count: 450,
      icon: "HomeIcon",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-12">
      {cards.map((card) => (
        <DashboardCard title={card.title} count={card.count} />
      ))}
    </div>
  );
}
