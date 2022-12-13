import { type } from "os";

interface InputProps {
  placeholder: string;
  type: string;
}

export default function Input({ placeholder, type }: InputProps) {
  return (
    <div className="">
      <input
        className="w-full h-12 p-2 border-2 border-gray-500 rounded"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
