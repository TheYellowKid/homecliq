interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function RoundButton({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center px-3 py-2 text-base font-bold text-white bg-blue-900 rounded-full hover:bg-black"
    >
      {text}
    </button>
  );
}
