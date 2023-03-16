import { Table } from "@nextui-org/react";
import { IconButton } from "../../buttons/IconButton";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { StyledBadge } from "../../badges/StyledBadges";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { fireStore } from "../../../firebase";
import { BsWhatsapp, BsTelephone } from 'react-icons/bs';
import Link from "next/link";

interface ApplicationObject {
  applicantemail: string;
  applicantname: string;
  applicantphone: string;
  applicantsurname: string;
  applicationstatus: string;
  propertyid: string;
}
export default function ApplicationsTable() {
  const router = useRouter();
  const [applications, setApplications] = useState<ApplicationObject[]>([]);
  const [applicationIds, setApplicationIds] = useState<string[]>([])
  const querySnapshot = getDocs(collection(fireStore, "applications"));

  const getListings = async () => {
    const data: ApplicationObject[] = [];
    const ids: string[] = []
    await querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data() as ApplicationObject);
        ids.push(doc.id)
      });
    });
    setApplications(data);
    setApplicationIds(ids)
  };

  useEffect(() => {
    getListings();
  }, []);

  return (
    <table className="w-full border-2 border-gray-500 p-4 rounded">
      <thead>
        <tr className="font-bold text-white bg-blue-900">
          <td className="2">Applicant Name</td>
          <td className="2">Phone Number</td>
          <td className="2">Status</td>
          <td className="2">View</td>
        </tr>
      </thead>
      <tbody>
        {applications.length > 0 ? (
          applications.map((application, i) => (
            <tr key={i}>
              <td className="2">
                {application.applicantname} {application.applicantsurname}
              </td>
              <td className="2">
                <div className="flex flex-row items-center gap-2">
                  {application.applicantphone}
                  {application.applicationstatus === "active" && 
                    <div className="items-center justify-center flex flex-row gap-2">
                      <Link href={`https://wa.me/${application.applicantphone}`}>
                        <BsWhatsapp />
                      </Link>
                      <Link href={`tel:${application.applicantphone}`}>
                        <BsTelephone />
                      </Link>
                    </div>                  
                  }
                  
                </div>
              </td>
              <td>
                <StyledBadge type={application.applicationstatus === "pending"? "pending" : application.applicationstatus === "open"? "open" : "closed" }>{application.applicationstatus}</StyledBadge>
              </td>
              <td className="2">
                <IconButton
                  onClick={() =>
                    router.push({
                      pathname: "/dashboard/admin/application-detail",
                      query: { id: application.propertyid, applicationid:applicationIds[i], applicationstatus:application.applicationstatus},
                    })
                  }
                >
                  <EyeOpenIcon />
                </IconButton>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="2">No Applications found</td>
            <td className="2">{""}</td>
            <td className="2">{""}</td>
            <td className="2">{""}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
