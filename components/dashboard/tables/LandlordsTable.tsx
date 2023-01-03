import { Table } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Row } from "@nextui-org/react";

export default function LandlordsTable() {
  return (
    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Properties</Table.Column>
        <Table.Column>Location</Table.Column>
        <Table.Column>Phone Number</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Elvin Kakomo</Table.Cell>
          <Table.Cell>25</Table.Cell>
          <Table.Cell>Harare</Table.Cell>
          <Table.Cell>+263775953491</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Elvin Kakomo</Table.Cell>
          <Table.Cell>25</Table.Cell>
          <Table.Cell>Harare</Table.Cell>
          <Table.Cell>+263775953491</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Elvin Kakomo</Table.Cell>
          <Table.Cell>25</Table.Cell>
          <Table.Cell>Harare</Table.Cell>
          <Table.Cell>+263775953491</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>Elvin Kakomo</Table.Cell>
          <Table.Cell>25</Table.Cell>
          <Table.Cell>Harare</Table.Cell>
          <Table.Cell>+263775953491</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
