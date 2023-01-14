import React,{useState} from "react";
import { Modal, Button, } from "@nextui-org/react";



interface DialpgProps  {
    showModal: boolean
    heading: string
    description: string
    btnText: string
}

export default function AlertDialog({showModal, heading, description, btnText}: DialpgProps) {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(showModal);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
            <text>{heading}</text>
        </Modal.Header>
        <Modal.Body>
          <text>{description}</text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto onPress={closeHandler}>
            {btnText}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
