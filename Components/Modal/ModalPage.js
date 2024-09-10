import { Icon } from "@iconify/react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export default function ModalPage({ rowDelete, modal, toggle }) {
  return (
    <>
      <Modal isOpen={modal} centered>
        <div className="erroricon">
          <Icon icon="mdi:error-outline" />
        </div>
        <ModalBody className="delettoggle">
          <div className="suretext">
            <h2>Are you sure?</h2>
          </div>
          <div className="changetext">
            Once deleted, you will not be able to recover this data!
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger 2" onClick={rowDelete}>
            Confirm
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
