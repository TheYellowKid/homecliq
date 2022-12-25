import SqaureButton from "../buttons/SquareButton";
import Input from "../inputs/Input";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireStore } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function SignUpForm() {
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
    <div className="flex flex-col w-1/3 p-8 bg-white rounded shadow-lg">
      <text className="text-xl font-black">Sign Up</text>
      <text className="text-sm text-gray-500">
        Fill in this form to create yout account.
      </text>
      <form
        className="grid grid-cols-2 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          signUpUser();
        }}
      >
        <Input
          placeholder="first name"
          type="text"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <Input
          placeholder="last name"
          type="text"
          onChange={(e) => setLastname(e.target.value)}
        />
        <Input
          placeholder="phone number"
          type="number"
          onChange={(e) => setPhonenumber(e.target.value)}
        />
        <Input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="confirm password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex flex-col col-span-2">
          <SqaureButton text="Login" onClick={() => {}} />
        </div>

        <div className="col-span-2">
          <Link href="/dashboard/">
            <text className="text-blue-500">
              Already have an account? Sign in
            </text>
          </Link>
        </div>
      </form>
    </div>
  );
}
