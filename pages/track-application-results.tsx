import Navbar from "../components/navigation/navbar"
import TenandApplicationsTable from "../components/dashboard/tables/TenandApplicationsTable"
import { useRouter } from "next/router"

export default function TrackApplicationResults() {
    const router = useRouter()
    const {firstname, lastname, phonenumber, email} = router.query
    return(
        <div className="font-quicksand">
            <Navbar />
            <div className="flex flex-col items-center justify-center md:py-32">
                <TenandApplicationsTable tenandfirstname={firstname as string}  tenandsurname={lastname as string} tenandphone ={phonenumber as string} tenandemail={email as string}/>
            </div>
        </div>
    )
}