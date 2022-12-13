import { useState, useEffect } from "react";

interface DropdownInputProps {
  placeholder: string;
  options: string[];
}
export default function PageFilter({
  options,
  placeholder,
}: DropdownInputProps) {
  const [filterText, setFilterText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (filterText) {
      setIsOpen(true);
    }
  }, [filterText]);

  return (
    <div className="relative flex flex-col ">
      <div className="flex items-center justify-center gap-4">
        <text className="text-base font-bold text-black">Filter</text>
        <input
          className="w-full h-12 p-2 border-2 border-gray-500"
          placeholder={placeholder}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      {filterText && isOpen && (
        <div className="absolute w-full p-2 mt-1 bg-white rounded">
          {options.map((option) => (
            <div>{option}</div>
          ))}
        </div>
      )}
    </div>
  );
}
