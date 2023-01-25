import SqaureButton from "../buttons/SquareButton";
import Input from "../inputs/Input";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {fireStore } from "../../firebase";
import { doc, updateDoc, collection, getDocs } from "firebase/firestore";


interface FormProps {
  id: string;
}

export default function PropertyOwnerDetailsForm({id}: FormProps) {
  const router = useRouter();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = async () => {
    const propertyRef = doc(fireStore, "properties", id);
    await updateDoc(propertyRef, {
      ownerphone: phonenumber,
      owneremail: email,
      ownername: firstname,
      ownersurname: lastname,
    }).then(() => {
      checkAccountExists();
    });
  }

  const checkAccountExists = async () => {
    await getDocs(collection(fireStore, "users")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
            console.log(doc.data().email)
        if (doc.data().email === email) {
          if(doc.data().role === "admin"){
            localStorage.setItem("role", doc.data().role);
            localStorage.setItem("firstname", doc.data().firstname);
            localStorage.setItem("lastname", doc.data().lastname);
            localStorage.setItem("email", doc.data().email);
            localStorage.setItem("phonenumber", doc.data().phonenumber);
            localStorage.setItem("uid", doc.data().uid);
            router.push("/dashboard/admin");
        }else{
            localStorage.setItem("role", doc.data().role);
            localStorage.setItem("firstname", doc.data().firstname);
            localStorage.setItem("lastname", doc.data().lastname);
            localStorage.setItem("email", doc.data().email);
            localStorage.setItem("phonenumber", doc.data().phonenumber);
            localStorage.setItem("uid", doc.data().uid);
            router.push("/dashboard/agent");
        }
      }});
    });
  }


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
          submitForm();
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
