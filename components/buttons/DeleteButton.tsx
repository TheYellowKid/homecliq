interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function DeleteButton({ text, onClick}: ButtonProps) {
  return (
    <button onClick={onClick} className="flex items-center justify-center px-3 py-2 text-base font-black text-white bg-red-500 rounded hover:bg-red-900">
      {text}
    </button>
  );
}
