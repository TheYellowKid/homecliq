import { useState } from "react";
import Input from "../inputs/Input";
import SqaureButton from "../buttons/SquareButton";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireStore } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";

interface FormProps {
    firstname: string;
    lastname: string;
    phonenumber: string;
    email: string;
}

export default function CreatePasswordForm({firstname, lastname, phonenumber, email}: FormProps) {

    const router = useRouter();
    const [password, setPassword] = useState("");


    const signUpUser = async () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            addUser(user.uid);
        })
        .catch((error) => {
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

        localStorage.setItem("role", "agent");
        localStorage.setItem("firstname", firstname);
        localStorage.setItem("lastname", lastname);
        localStorage.setItem("email", email);
        localStorage.setItem("phonenumber", phonenumber);
        localStorage.setItem("uid", uid);
        router.push("/dashboard/agent");
    };

    return (
    <div className="w-10/12 md:w-1/4 p-8 bg-white rounded shadow-lg">
      <div className="flex flex-col gap-4 mb-4">
        <text className="text-xl font-black">Login</text>
        <text className="text-sm text-gray-500">Please create a password for your newly created account. You will use this password to log into your dashboard</text>
      </div>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
            e.preventDefault();
            signUpUser();
        }}
      >
        <Input
          required={true}
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <SqaureButton text="Login" onClick={() => {}} />
      </form>
    </div>
  );
}