import { Table } from "@nextui-org/react";
import { IconButton } from "../../buttons/IconButton";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { StyledBadge } from "../../badges/StyledBadges";

export default function ApplicationsTable() {
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
        <Table.Column>Applicant Name</Table.Column>
        <Table.Column>Phone Number</Table.Column>
        <Table.Column>Email</Table.Column>
        <Table.Column>Property</Table.Column>
        <Table.Column>Status</Table.Column>
        <Table.Column>View</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Elvin Kakomo</Table.Cell>
          <Table.Cell>+263775953491</Table.Cell>
          <Table.Cell>elvin@gmail.com</Table.Cell>
          <Table.Cell>One Room Avondale, Harare</Table.Cell>
          <Table.Cell>
            <StyledBadge type="active">cosed</StyledBadge>
          </Table.Cell>
          <Table.Cell>
            <IconButton
              onClick={() => router.push("/dashboard/admin/application-detail")}
            >
              <EyeOpenIcon />
            </IconButton>
          </Table.Cell>
        </Table.Row>
        <Table.Row key="1">
          <Table.Cell>Elvin Kakomo</Table.Cell>
          <Table.Cell>+263775953491</Table.Cell>
          <Table.Cell>elvin@gmail.com</Table.Cell>
          <Table.Cell>One Room Avondale, Harare</Table.Cell>
          <Table.Cell>
            <StyledBadge type="vacation">active</StyledBadge>
          </Table.Cell>
          <Table.Cell>
            <IconButton
              onClick={() => router.push("/dashboard/admin/application-detail")}
            >
              <EyeOpenIcon />
            </IconButton>
          </Table.Cell>
        </Table.Row>
        <Table.Row key="1">
          <Table.Cell>Elvin Kakomo</Table.Cell>
          <Table.Cell>+263775953491</Table.Cell>
          <Table.Cell>elvin@gmail.com</Table.Cell>
          <Table.Cell>One Room Avondale, Harare</Table.Cell>
          <Table.Cell>
            <StyledBadge type="paused">pending</StyledBadge>
          </Table.Cell>
          <Table.Cell>
            <IconButton
              onClick={() => router.push("/dashboard/admin/application-detail")}
            >
              <EyeOpenIcon />
            </IconButton>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
