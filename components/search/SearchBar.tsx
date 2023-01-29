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
        type: searchbyType.toLowerCase(),
        location: searchbyLocation.toLowerCase(),
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
      <Input placeholder="Type (eg. one room)" onChange={e => setSearchbyType(e.target.value)} required={true} type="text"/>
      <Input placeholder="Town/City (eg Gweru)" onChange={ e => setSearchbyLocation(e.target.value)} required={true} type="text"/>
      <SqaureButton text="Search" onClick={() => {}} />
    </form>
  );
}
