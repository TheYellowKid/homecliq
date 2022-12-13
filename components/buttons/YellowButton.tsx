interface ButtonProps {
  text: string;
}

export default function YellowButton({ text }: ButtonProps) {
  return (
    <button className="flex items-center justify-center px-3 py-2 text-base font-bold text-white bg-yellow-500 rounded hover:bg-blue-900">
      {text}
    </button>
  );
}
