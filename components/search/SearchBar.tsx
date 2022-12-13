import SqaureButton from "../buttons/SquareButton";
import DropdownInput from "./DropdownInput";

export default function SearchBar() {
  return (
    <div
      className="flex items-center justify-center gap-2 p-4 rounded"
      style={{ backgroundColor: "#ffffff8c" }}
    >
      <DropdownInput
        placeholder="Property Type"
        options={["Full House", "One room", "Cottage", "Apartment", "2 rooms"]}
      />
      <DropdownInput
        placeholder="Location"
        options={["Harare", "Bulawayo", "Marondera", "Rusape"]}
      />
      <SqaureButton text="Search" />
    </div>
  );
}
