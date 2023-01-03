import { type } from "os";

interface InputProps {
  required: boolean;
  placeholder: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  placeholder,
  type,
  onChange,
  required = false,
}: InputProps) {
  return (
    <div className="">
      <input
        className="w-full h-12 p-2 border-2 border-gray-500 rounded my-1"
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
