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

export default function UpdateModal({
  handleUpdateCustomer,
  handleUpdateInputChange,
  toggleUpdateModal,
  updateModalOpen,
  handleEditButtonClick,
  Customer = {},
}) {
  return (
    <Modal isOpen={updateModalOpen} toggle={toggleUpdateModal} centered>
      <ModalBody>
        <CardSubtitle className="mb-4" tag="h5">
          Update Customer
        </CardSubtitle>

        <Form onSubmit={handleUpdateCustomer}>
          <FormGroup>
            <Label for="firstname">First Name</Label>
            <Input
              type="text"
              name="firstname"
              id="firstname"
              value={Customer.firstname}
              onChange={handleUpdateInputChange}
              required="true"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input
              type="text"
              name="lastname"
              id="lastname"
              value={Customer.lastname}
              onChange={handleUpdateInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="countrycode">Country Code</Label>
            <Input
              type="number"
              name="countrycode"
              id="countrycode"
              value={Customer.countrycode}
              onChange={handleUpdateInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="phonenumber">Phone Number</Label>
            <Input
              type="number"
              name="phonenumber"
              id="phonenumber"
              value={Customer.phonenumber}
              onChange={handleUpdateInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={Customer.email}
              onChange={handleUpdateInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="registrationdate">Registration Date</Label>
            <Input
              type="date"
              name="registrationdate"
              id="registrationdate"
              value={Customer.registrationdate}
              onChange={handleUpdateInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="logindate">Login Date</Label>
            <Input
              type="date"
              name="logindate"
              id="logindate"
              value={Customer.logindate}
              onChange={handleUpdateInputChange}
              required
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary 6" onClick={handleUpdateCustomer}>
          Update
        </Button>
        <Button color="danger 6" onClick={handleEditButtonClick}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
