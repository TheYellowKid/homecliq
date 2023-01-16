import SqaureButton from "../buttons/SquareButton";
import { useRouter } from "next/router";
import {  CrossCircledIcon } from "@radix-ui/react-icons";


export default function ListingSubmitionFailedCard() {
      const router = useRouter();
    return(
         <div className="md:w-1/2 p-8 bg-white rounded shadow-lg">
            <div className="p-12 gap-8 flex flex-col items-center justify-center">
                <text className="text-base md:text-xl font-black">Submition Failed</text>
                <CrossCircledIcon width={100} height={100} />
                <text>
                Listing submittion failed, please try again
                </text>
                <SqaureButton
                text="OK"
                onClick={() => router.push("/dashboard/agent/add-listing")}
                />
            </div>
        </div>
    )
}