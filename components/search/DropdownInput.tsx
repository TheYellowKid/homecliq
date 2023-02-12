import { useState, useEffect } from "react";

interface DropdownInputProps {
  placeholder: string;
  value: string;
  options: string[];
  showSuggestions:boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option : string) =>void;
}

export default function DropdownInput({
  options,
  placeholder,
  onChange,
  showSuggestions= false,
  onOptionSelect,
  value
}: DropdownInputProps) {

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full p-2 text-gray-700 bg-white border border-gray-300 rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
      {showSuggestions && (
        <div className="absolute w-full p-2 mt-1 bg-white rounded">
          {options.map((option) => (
            <a href="#" onClick={() => onOptionSelect(option)}>{option} <br/></a>
          ))}
        </div>
      )}
    </div>
  );
}
