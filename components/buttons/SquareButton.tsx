interface ButtonProps {
  text: string;
}

export default function SqaureButton({ text }: ButtonProps) {
  return (
    <button className="flex items-center justify-center px-3 py-2 text-base font-black text-white bg-blue-900 rounded hover:bg-black">
      {text}
    </button>
  );
}
