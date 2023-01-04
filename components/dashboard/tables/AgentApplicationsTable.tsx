import { Table } from "@nextui-org/react";
import { IconButton } from "../../buttons/IconButton";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { StyledBadge } from "../../badges/StyledBadges";

export default function AgentApplicationsTable() {
  const router = useRouter();

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
        <Table.Column>Property</Table.Column>
        <Table.Column>Status</Table.Column>
        <Table.Column>View</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
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
        <Table.Row key="2">
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
        <Table.Row key="3">
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
