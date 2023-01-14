import Image from "next/image";

export default function Avatar() {
  return (
    <div className="flex flex-col items-center justify-center w-12 h-12  rounded-full ">
      <Image
        src="/assets/avatar.png"
        alt="Avatar"
        width={50}
        height={50}
        className="rounded-full"
      />
    </div>
  );
}
