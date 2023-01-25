import SqaureButton from "../buttons/SquareButton";
import Input from "../inputs/Input";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

export default function TrackAppForm() {
  const router = useRouter();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");


  const trackApplication =  () => {
    router.push({
      pathname: "/track-application-results",
      query: { firstname, lastname, phonenumber, email },
    })
  }
  return (
    <div className="flex flex-col w-10/12 md:w-1/2 md:my-32 p-8 bg-white rounded shadow-lg gap-8">
      <text className="text-xl font-black">Track Application</text>
      <text className="text-sm text-gray-500">
        Please provide the details you used when you applied for properties.
      </text>
      <form
        className="flex-col md:grid md:grid-cols-2 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          trackApplication();
        }}
      >
        <Input
          required={true}
          placeholder="first name"
          type="text"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <Input
          required={true}
          placeholder="last name"
          type="text"
          onChange={(e) => setLastname(e.target.value)}
        />
        <Input
          required={true}
          placeholder="phone number"
          type="number"
          onChange={(e) => setPhonenumber(e.target.value)}
        />
        <Input
          required={true}
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex flex-col col-span-2">
          <SqaureButton text="Track" onClick={() => {}} />
        </div>
      </form>
    </div>
  );
}
