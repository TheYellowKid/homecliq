interface ButtonProps {
  text: string;
}

export default function DeleteButton({ text }: ButtonProps) {
  return (
    <button className="flex items-center justify-center px-3 py-2 text-base font-black text-white bg-red-500 rounded hover:bg-red-900">
      {text}
    </button>
  );
}
