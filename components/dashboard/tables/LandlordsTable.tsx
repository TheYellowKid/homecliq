import { Table } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { fireStore } from "../../../firebase";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { IconButton } from "../../buttons/IconButton";


interface Landlord {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  uid: string;
  role: string;
  password: string;
}

export default function LandlordsTable() {

  const router = useRouter();
  const [landlords, setLandlords] = useState<Landlord[]>([]);

  const getLandlords = async () => {
    const data: Landlord[] = [];
    await getDocs(collection(fireStore, "users")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().role === "agent") {
          data.push(doc.data() as Landlord);
        }
      });
    });
    setLandlords(data);
  };

  useEffect(() => {
    getLandlords();
  }, []);



  return (
    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
        zIndex:0
      }}
    >
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Phone number</Table.Column>
        <Table.Column>Email</Table.Column>
        <Table.Column>View Properties</Table.Column>
      </Table.Header>
      <Table.Body>
        {landlords.length > 0? (
            landlords.map((landlord, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  {landlord.firstname} {landlord.lastname}
                </Table.Cell>
                <Table.Cell>
                  {landlord.phonenumber}
                </Table.Cell>
                <Table.Cell>
                  {landlord.email}
                </Table.Cell>
                <Table.Cell>
                  <IconButton
                      onClick={() =>
                        router.push({
                          pathname: "#",
                          query: { id: landlord.uid },
                        })
                      }
                    >
                      <EyeOpenIcon />
                    </IconButton>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell>No landlords found</Table.Cell>
              <Table.Cell>{""}</Table.Cell>
              <Table.Cell>{""}</Table.Cell>
              <Table.Cell>{""}</Table.Cell>
            </Table.Row>)}
      </Table.Body>
    </Table>
  );
}
