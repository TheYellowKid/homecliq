import SqaureButton from "../buttons/SquareButton";
import Input from "../inputs/Input";
import { useRouter } from "next/router";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireStore } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";

interface FormProps {
  startLoading : ()=> void
}
export default function LoginForm({startLoading}:FormProps) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getUser = async (uid: string) => {
    const querySnapshot = await getDocs(collection(fireStore, "users"));
    querySnapshot.forEach((doc) => {
      const user = doc.data();
      if (user.uid === uid) {
        if (user.role === "admin") {
          localStorage.setItem("role", user.role);
          localStorage.setItem("firstname", user.firstname);
          localStorage.setItem("lastname", user.lastname);
          localStorage.setItem("email", user.email);
          localStorage.setItem("phonenumber", user.phonenumber);
          localStorage.setItem("uid", user.uid);

          router.push("/dashboard/admin/");
        } else {
          localStorage.setItem("role", user.role);
          localStorage.setItem("firstname", user.firstname);
          localStorage.setItem("lastname", user.lastname);
          localStorage.setItem("email", user.email);
          localStorage.setItem("phonenumber", user.phonenumber);
          localStorage.setItem("uid", user.uid);

          router.push("/dashboard/agent/");
        }
        return;
      }
    });
  };
  const signIn = () => {
    startLoading();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        getUser(user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="w-10/12 md:w-1/4 p-8 bg-white rounded shadow-lg">
      <text className="text-xl font-black">Login</text>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          signIn();
        }}
      >
        <Input
          required={true}
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          required={true}
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <SqaureButton text="Login" onClick={() => {}} />
        <Link href="/dashboard/signup">
          <text className="text-blue-500">Don't have an account? Sign up</text>
        </Link>
      </form>
    </div>
  );
}
