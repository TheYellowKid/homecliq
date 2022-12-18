import SqaureButton from "../buttons/SquareButton";
import { useRouter } from "next/router";

export default function PropertyDetailSideBar() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-300 rounded">
      <text className="text-xl font-bold">Property Info</text>
      <text>3 roomed cottage</text>
      <text>Harare, Mabvuku</text>
      <text>$150/month</text>
      <SqaureButton
        text="Apply Now"
        onClick={() => router.push("/apply-property")}
      />
    </div>
  );
}
