export default function SmallBanner() {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen bg-center bg-cover bg-small-banner bg-blend-darken"
      style={{ height: 300 }}
    >
      <div className="flex flex-col items-center gap-8">
        <text className="text-5xl font-bold text-white">Listings</text>
      </div>
    </div>
  );
}
