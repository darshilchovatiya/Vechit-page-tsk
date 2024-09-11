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
  handleAddCustomer,
  handleInputChange,
  newCustomer = {},
  formData = {},
  type,
}) {
  console.log("type", type);
  return (
    <Modal isOpen={updateModalOpen} toggle={toggleUpdateModal} centered>
      <ModalBody>
        <CardSubtitle className="mb-4" tag="h5">
          {type === "add" ? "Add Customer" : "Update Customer"}
        </CardSubtitle>

        <Form onSubmit={handleUpdateCustomer}>
          <FormGroup>
            <Label for="firstname">First Name</Label>
            <Input
              type="text"
              name="firstname"
              id="firstname"
              value={
                type === "add" ? newCustomer.firstname : formData.firstname
              }
              onChange={
                type === "add" ? handleInputChange : handleUpdateInputChange
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input
              type="text"
              name="lastname"
              id="lastname"
              value={type === "add" ? newCustomer.lastname : formData.lastname}
              onChange={
                type === "add" ? handleInputChange : handleUpdateInputChange
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="countrycode">Country Code</Label>
            <Input
              type="number"
              name="countrycode"
              id="countrycode"
              value={
                type === "add" ? newCustomer.countrycode : formData.countrycode
              }
              onChange={
                type === "add" ? handleInputChange : handleUpdateInputChange
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="phonenumber">Phone Number</Label>
            <Input
              type="number"
              name="phonenumber"
              id="phonenumber"
              value={
                type === "add" ? newCustomer.phonenumber : formData.phonenumber
              }
              onChange={
                type === "add" ? handleInputChange : handleUpdateInputChange
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={type === "add" ? newCustomer.email : formData.email}
              onChange={
                type === "add" ? handleInputChange : handleUpdateInputChange
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="registrationdate">Registration Date</Label>
            <Input
              type="date"
              name="registrationdate"
              id="registrationdate"
              value={
                type === "add"
                  ? newCustomer.registrationdate
                  : formData.registrationdate
              }
              onChange={
                type === "add" ? handleInputChange : handleUpdateInputChange
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="logindate">Login Date</Label>
            <Input
              type="date"
              name="logindate"
              id="logindate"
              value={
                type === "add" ? newCustomer.logindate : formData.logindate
              }
              onChange={
                type === "add" ? handleInputChange : handleUpdateInputChange
              }
              required
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        {type === "add" ? (
          <Button color="primary 6" onClick={handleAddCustomer}>
            Add
          </Button>
        ) : (
          <Button color="primary 6" onClick={handleUpdateCustomer}>
            Update
          </Button>
        )}

        <Button color="danger 6" onClick={handleEditButtonClick}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
