import SqaureButton from "../buttons/SquareButton";
import Input from "../inputs/Input";
import { useRouter } from "next/router";

export default function TenandApplicationForm() {
  const router = useRouter();
  return (
    <div className="w-1/2 p-8 bg-white rounded shadow-lg">
      <text className="text-xl font-black">Enter Your Personal Details</text>
      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-2">
          <Input placeholder="First Name" type="email" />
          <Input placeholder="Last Name" type="email" />
          <Input placeholder="Phone Number" type="email" />
          <Input placeholder="Email" type="email" />
        </div>
        <SqaureButton
          text="Submit"
          onClick={() => router.push("/application-success")}
        />
      </form>
    </div>
  );
}
