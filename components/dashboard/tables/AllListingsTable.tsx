import { Table } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Row } from "@nextui-org/react";
import { IconButton } from "../../buttons/IconButton";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";

export default function AllListingsTable() {
  const router = useRouter();
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
        <Table.Row key="1">
          <Table.Cell>
            <Row align="center">
              <Avatar
                squared
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
              One Room
            </Row>
          </Table.Cell>
          <Table.Cell>Harare, Avondale</Table.Cell>
          <Table.Cell>$100 / month</Table.Cell>
          <Table.Cell>Elvin Kakomo</Table.Cell>
          <Table.Cell>+263775953491</Table.Cell>
          <Table.Cell>
            <IconButton
              onClick={() => router.push("/dashboard/admin/listing-details")}
            >
              <EyeOpenIcon />
            </IconButton>
          </Table.Cell>
        </Table.Row>
        <Table.Row key="1">
          <Table.Cell>
            <Row align="center">
              <Avatar
                squared
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
              One Room
            </Row>
          </Table.Cell>
          <Table.Cell>Harare,avondale</Table.Cell>
          <Table.Cell>$100 / month</Table.Cell>
          <Table.Cell>Elvin Kakomo</Table.Cell>
          <Table.Cell>+263775953491</Table.Cell>
          <Table.Cell>
            <IconButton
              onClick={() => router.push("/dashboard/admin/listing-details")}
            >
              <EyeOpenIcon />
            </IconButton>
          </Table.Cell>
        </Table.Row>
        <Table.Row key="1">
          <Table.Cell>
            <Row align="center">
              <Avatar
                squared
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
              One Room
            </Row>
          </Table.Cell>
          <Table.Cell>Harare,avondale</Table.Cell>
          <Table.Cell>$100 / month</Table.Cell>
          <Table.Cell>Elvin Kakomo</Table.Cell>
          <Table.Cell>+263775953491</Table.Cell>
          <Table.Cell>
            <IconButton
              onClick={() => router.push("/dashboard/admin/listing-details")}
            >
              <EyeOpenIcon />
            </IconButton>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
