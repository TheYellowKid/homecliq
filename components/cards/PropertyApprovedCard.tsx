import SqaureButton from "../buttons/SquareButton";
import { useRouter } from "next/router";
import { CheckCircledIcon } from "@radix-ui/react-icons";


export default function PropertApprovedCard() {
      const router = useRouter();
    return(
         <div className="md:w-1/2 p-8 bg-white rounded shadow-lg">
            <div className="p-12 gap-8 flex flex-col items-center justify-center">
                <text className="text-base md:text-xl font-black">Approved</text>
                <CheckCircledIcon width={100} height={100} />
                <text>
                    Property Successfully approved and is now visible on the approved listings
                </text>
               <div className="flex justify-center items center gap-4">
                 <SqaureButton
                    text="Go to Listings"
                    onClick={() => router.push("/dashboard/admin/all-listings")}
                    />
                 <SqaureButton
                    text="Back to Pending Listings"
                    onClick={() => router.push("/dashboard/admin/pending-listings")}
                    />
               </div>
            </div>
        </div>
    )
}