interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function SqaureButton({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center px-3 py-2 font-black text-white bg-blue-900 rounded hover:bg-black"
    >
      {text}
    </button>
  );
}
