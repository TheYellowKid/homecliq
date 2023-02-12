import { useState, useEffect } from "react";

interface DropdownInputProps {
  placeholder: string;
  options: string[];
  showSuggestions:boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: () =>void;
}

export default function DropdownInput({
  options,
  placeholder,
  onChange,
  showSuggestions= false,
  onOptionSelect
}: DropdownInputProps) {

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="w-full p-2 text-gray-700 bg-white border border-gray-300 rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
      {showSuggestions && (
        <div className="absolute w-full p-2 mt-1 bg-white rounded">
          {options.map((option) => (
            <div onClick={onOptionSelect}>{option}</div>
          ))}
        </div>
      )}
    </div>
  );
}
