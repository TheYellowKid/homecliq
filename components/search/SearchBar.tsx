import SqaureButton from "../buttons/SquareButton";
import Input from "../inputs/Input";
import DropdownInput from "./DropdownInput";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "../../firebase";

export default function SearchBar() {

  const [searchbyType, setSearchbyType] = useState("");
  const [searchbyLocation, setSearchbyLocation] = useState("");
  const [showPropertyTypeSuggestions, setShowPropertyTypeSuggestions]=useState(false)
  const [showLocationSuggestions, setLocationSuggestions]=useState(false)
  const [propertyTypes, setPropertyTypes] = useState<string[]>([])
  const [availableLocations, setAavailableLocations] = useState<string[]>([])

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

  useEffect(() => {
    if(searchbyType != "" && searchbyType != null){
      setShowPropertyTypeSuggestions(true)
    }else{
      setShowPropertyTypeSuggestions(false)
    }
     if(searchbyLocation != "" && searchbyLocation != null){
      setLocationSuggestions(true)
    }else{
      setLocationSuggestions(false)
    }
  },[searchbyLocation, searchbyType])

  useEffect(() => {
    getListings()
  },[propertyTypes])

  const getListings = async () => {
    const propertytypes: string[] = [];
    const locations: string[] = [];
    await getDocs(collection(fireStore, "properties")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().isApproved === true) {
              propertytypes.push(doc.data().title);
              locations.push(doc.data().towncity);
        }
      });
    });
    setPropertyTypes(propertytypes);
    setAavailableLocations(locations);
  };

  const selectedPropertyOption = (option: string):void => {
    setSearchbyType(option)
  }
    const selectedLocatitonOption = (option: string):void => {
    setSearchbyLocation(option)
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
      <DropdownInput placeholder="Type (eg. one room)" value={searchbyType} options={propertyTypes} onChange={e => setSearchbyType(e.target.value)} showSuggestions={showPropertyTypeSuggestions} onOptionSelect={selectedPropertyOption}/>
      <DropdownInput placeholder="Town/City (eg Gweru)" value={searchbyLocation} options={availableLocations} onChange={ e => setSearchbyLocation(e.target.value)} showSuggestions={showLocationSuggestions} onOptionSelect={selectedLocatitonOption}/>
      <SqaureButton text="Search" onClick={() => {}} />
    </form>
  );
}
