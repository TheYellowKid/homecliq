import SearchBar from "../search/SearchBar";
export default function Banner() {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen bg-center bg-cover bg-hero-bg bg-blend-darken"
      style={{ height: 600 }}
    >
      <div className="flex flex-col items-center gap-8 py-8 ">
        <text className="text-2xl md:text-5xl font-bold text-white text-center">
          Finding accomodation has never been easier
        </text>
        <SearchBar />
      </div>
    </div>
  );
}
