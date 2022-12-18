interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function YellowButton({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center px-3 py-2 text-base font-bold text-white bg-yellow-500 rounded hover:bg-blue-900"
    >
      {text}
    </button>
  );
}
