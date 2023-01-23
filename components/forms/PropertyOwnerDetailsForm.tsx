import SqaureButton from "../buttons/SquareButton";
import Input from "../inputs/Input";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireStore } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function PropertyOwnerDetailsForm() {
  const router = useRouter();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpUser = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        addUser(user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const addUser = async (uid: string) => {
    const docRef = await addDoc(collection(fireStore, "users"), {
      firstname: firstname,
      lastname: lastname,
      phonenumber: phonenumber,
      email: email,
      password: password,
      role: "agent",
      uid: uid,
    });
    router.push("/dashboard/agent");
  };

  return (
    <div className="flex flex-col w-10/12 md:w-1/2 md:my-32 p-8 bg-white rounded shadow-lg gap-8">
      <text className="text-xl font-black">Please Provide Your Personal Details</text>
      <text className="text-sm text-gray-500">
        Your please provide your personal details so that we can easily contact you when.
      </text>
      <form
        className="flex-col md:grid md:grid-cols-2 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          signUpUser();
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
          <SqaureButton text="Upload" onClick={() => {}} />
        </div>
      </form>
    </div>
  );
}
