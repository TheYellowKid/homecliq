import { Table } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Row } from "@nextui-org/react";
import { IconButton } from "../../buttons/IconButton";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { fireStore } from "../../../firebase";

interface PropertyObject {
  contactmethod: string;
  description: string;
  images: [string];
  isApproved: boolean;
  location: string;
  owneremail: string;
  ownername: string;
  ownerphone: string;
  ownersurname: string;
  rent: number;
  title: string;
  towncity: string;
}
export default function PendingListngsTable() {
  const router = useRouter();
  const [listings, setListings] = useState<PropertyObject[]>([]);
  const [propertyIds, setPropertyIds] = useState<string[]>([]);
  const querySnapshot = getDocs(collection(fireStore, "properties"));

  const getListings = async () => {
    const data: PropertyObject[] = [];
    const ids: string[] = [];
    await querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().isApproved === false) {
          data.push(doc.data() as PropertyObject);
          ids.push(doc.id);
        }
      });
    });
    setListings(data);
    setPropertyIds(ids);
  };

  useEffect(() => {
    getListings();
  }, []);

  return (
    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>Property</Table.Column>
        <Table.Column>Location</Table.Column>
        <Table.Column>Rent</Table.Column>
        <Table.Column>Owner / Agent</Table.Column>
        <Table.Column>Phone Number</Table.Column>
        <Table.Column>{""}</Table.Column>
      </Table.Header>
      <Table.Body>
        {listings.length > 0 ? (
          listings.map((property, i) => (
            <Table.Row key="1">
              <Table.Cell>
                <Row align="center">
                  <Avatar squared src={property.images[0]} />
                  {property.title}
                </Row>
              </Table.Cell>
              <Table.Cell>{property.location}</Table.Cell>
              <Table.Cell>${property.rent} / month</Table.Cell>
              <Table.Cell>
                {property.ownername} {""} {property.ownername}
              </Table.Cell>
              <Table.Cell>{property.ownerphone}</Table.Cell>
              <Table.Cell>
                <IconButton
                  onClick={() =>
                    router.push({
                      pathname: "/dashboard/admin/pending-detail",
                      query: { id: propertyIds[i] },
                    })
                  }
                >
                  <EyeOpenIcon />
                </IconButton>
              </Table.Cell>
            </Table.Row>
          ))
        ) : (
          <Table.Row key="1">
            <Table.Cell> No Pending listings found</Table.Cell>
            <Table.Cell>{""}</Table.Cell>
            <Table.Cell>{""}</Table.Cell>
            <Table.Cell>{""}</Table.Cell>
            <Table.Cell>{""}</Table.Cell>
            <Table.Cell>{""}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
