import CreatePasswordForm from "../components/forms/CreatePasswordFom";
import Navbar from "../components/navigation/navbar";
import { useRouter } from "next/router";


export default function CreatePassword(){
    const router = useRouter();
    const { firstname, lastname, phonenumber, email } = router.query;

    return(
        <div className="flex flex-col items-center justify-center w-screen h-screen font-quicksand">
            <CreatePasswordForm firstname={firstname as string} lastname={lastname as string} phonenumber={phonenumber as string} email={email as string} />
        </div>
    )
}