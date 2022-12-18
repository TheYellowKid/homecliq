import SqaureButton from "../buttons/SquareButton";
import { useRouter } from "next/router";
import { CheckCircledIcon } from "@radix-ui/react-icons";

export default function ApplicationSuccessCard() {
  const router = useRouter();
  return (
    <div className="w-1/4 p-8 bg-white rounded shadow-lg">
      <div className="p-12 gap-8 flex flex-col">
        <text className="text-xl font-black">Applicatioin Successfull</text>
        <CheckCircledIcon width={100} height={100} />
        <text>
          Your application has been received, our team will contact you very
          soon
        </text>
        <SqaureButton
          text="View More Listings"
          onClick={() => router.push("/listings")}
        />
      </div>
    </div>
  );
}
