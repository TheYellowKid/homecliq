import { useState, useEffect } from "react";

interface DropdownInputProps {
  placeholder: string;
  options: string[];
}

export default function DropdownInput({
  options,
  placeholder,
}: DropdownInputProps) {
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (searchText) {
      setIsOpen(true);
    }
  }, [searchText]);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full p-2 text-gray-700 bg-white border border-gray-300 rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
      {searchText && isOpen && (
        <div className="absolute w-full p-2 mt-1 bg-white rounded">
          {options.map((option) => (
            <div>{option}</div>
          ))}
        </div>
      )}
    </div>
  );
}
