import SqaureButton from "../buttons/SquareButton";
import Input from "../inputs/Input";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchBar() {

  const [searchbyType, setSearchbyType] = useState("");
  const [searchbyLocation, setSearchbyLocation] = useState("");

  const router = useRouter();

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        type: searchbyType,
        location: searchbyLocation,
      },
    });
  }

  return (
    <form
      className="flex flex-col md:flex-row items-center justify-center gap-2 p-4 rounded"
      style={{ backgroundColor: "#ffffff8c" }}
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <Input placeholder="Propety Type" onChange={e => setSearchbyType(e.target.value)} required={true} type="text"/>
      <Input placeholder="Location" onChange={ e => setSearchbyLocation(e.target.value)} required={true} type="text"/>
      <SqaureButton text="Search" onClick={() => {}} />
    </form>
  );
}
