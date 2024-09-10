import {
  Button,
  CardSubtitle,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";

export default function AddModal({
  handleAddCustomer,
  handleInputChange,
  toggleAddModal,
  addModalOpen,
  newCustomer = {},
}) {
  return (
    <Modal isOpen={addModalOpen} toggle={toggleAddModal} centered>
      <ModalBody>
        <CardSubtitle className="mb-4" tag="h5">
          Add Customr
        </CardSubtitle>

        <Form onSubmit={handleAddCustomer}>
          <FormGroup>
            <Label for="firstname">First Name</Label>
            <Input
              type="text"
              name="firstname"
              id="firstname"
              value={newCustomer.firstname}
              onChange={handleInputChange}
              required="true"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input
              type="text"
              name="lastname"
              id="lastname"
              value={newCustomer.lastname}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="countrycode">Country Code</Label>
            <Input
              type="number"
              name="countrycode"
              id="countrycode"
              value={newCustomer.countrycode}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="phonenumber">Phone Number</Label>
            <Input
              type="number"
              name="phonenumber"
              id="phonenumber"
              value={newCustomer.phonenumber}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={newCustomer.email}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="registrationdate">Registration Date</Label>
            <Input
              type="date"
              name="registrationdate"
              id="registrationdate"
              value={newCustomer.registrationdate}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="logindate">Login Date</Label>
            <Input
              type="date"
              name="logindate"
              id="logindate"
              value={newCustomer.logindate}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary 6" onClick={handleAddCustomer}>
          Add
        </Button>
        <Button color="danger 6" onClick={toggleAddModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
