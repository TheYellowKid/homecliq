import SqaureButton from "../buttons/SquareButton";
import { useRouter } from "next/router";
import { CheckCircledIcon } from "@radix-ui/react-icons";


export default function AdminListingSubmitionSuccessCard() {
      const router = useRouter();
    return(
         <div className="md:w-1/2 p-8 bg-white rounded shadow-lg">
            <div className="p-12 gap-8 flex flex-col items-center justify-center">
                <text className="text-base md:text-xl font-black">Submition Successfull</text>
                <CheckCircledIcon width={100} height={100} />
                <text>
                Your application hproperty has been successfully submitted and will be available on the platform once approved
                </text>
                <SqaureButton
                text="OK"
                onClick={() => router.push("/dashboard/admin/add-listing")}
                />
            </div>
        </div>
    )
}