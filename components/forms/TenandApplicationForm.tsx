import SqaureButton from "../buttons/SquareButton";
import Input from "../inputs/Input";
import { useRouter } from "next/router";
import { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { fireStore } from "../../firebase";
import { async } from "@firebase/util";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

interface PropertyId {
  id: string;
  owneremail: string;
}

export default function TenandApplicationForm({ id, owneremail }: PropertyId) {
  const router = useRouter();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [applicationFound, setApplicationFound] = useState(false)


  const checkApplicationExists = async () => {
    await  getDocs(collection(fireStore, "applications")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if(doc.data().propertyid === id && doc.data().applicantphone === phonenumber && doc.data().applicantemail === email){
          setApplicationFound(true)
        }
      });
    });
    return applicationFound
  }

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await checkApplicationExists()
      if(!applicationFound){
        try {
        const application = addDoc(collection(fireStore, "applications"), {
          applicantname: firstname,
          applicantsurname: lastname,
          applicantemail: email,
          applicantphone: phonenumber as string,
          propertyid: id,
          owneremail: owneremail,
          applicationstatus: "pending",
        });
        router.push("/application-success");
      } catch (error) {
        alert("Error adding document: " + error);
        console.log(error);
      }
    }else {
      alert("an application under this email and phone number already Exist!")
    }
   
  };

  return (
    <div className="md:w-1/2 p-8 bg-white rounded shadow-lg">
      <text className="text-xl font-black">Enter Your Personal Details</text>
      <form className="flex flex-col gap-4" onSubmit={submitForm}>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-2">
          <Input
            required={true}
            placeholder="First Name"
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <Input
            required={true}
            placeholder="Last Name"
            type="text"
            onChange={(e) => setLastname(e.target.value)}
          />
          <Input
            required={true}
            placeholder="Phone Number"
            type="number"
            onChange={(e) => setPhonenumber(e.target.value)}
          />
          <Input
            required={true}
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <SqaureButton text="Submit" onClick={() => {}} />
      </form>
    </div>
  );
}
