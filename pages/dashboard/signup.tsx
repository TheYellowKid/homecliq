import SignUpForm from "../../components/forms/SignUplForm";
import LoadingPage from "../../components/Loading/LoadingPage";
import {useState} from "react"

export default function Authpage() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen font-quicksand">
      {isLoading && <LoadingPage />}
      <SignUpForm />
    </div>
  );
}
