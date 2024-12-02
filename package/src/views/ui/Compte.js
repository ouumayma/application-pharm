import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
  } from "reactstrap";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faUser } from '@fortawesome/free-solid-svg-icons';
  import ProjectTables from "../../components/dashboard/AccountsTables";

  const Compte = () => {
    const styles = {
        buttonContainer: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "30%", // Adjust as needed for your layout
          margin: "0 auto", // Center the container on the page
        },
      };
    return (
      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              {/* <i className="bi bi-bell me-2"> </i> */}
              <FontAwesomeIcon icon={faUser} style={{marginRight:20}} />
              Gestion des comptes 
            </CardTitle>
            <CardBody>
              <Form>
              <FormGroup>
                  <Label for="exampleEmail">Username</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password placeholder"
                    type="password"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Role</Label>
                  <Input id="exampleSelect" name="select" type="select">
                  <option value="">Select a role</option>
                <option value="medecin">Medecin</option>
                <option value="patient">Patient</option>
                <option value="pharmacien">Pharmacien</option>
                <option value="super admin">Super Admin</option>
                  </Input>
                </FormGroup>
                {/* <FormGroup>
                  <Label for="exampleSelectMulti">Select Multiple</Label>
                  <Input
                    id="exampleSelectMulti"
                    multiple
                    name="selectMulti"
                    type="select"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup> */}
                {/* <FormGroup>
                  <Label for="exampleText">Text Area</Label>
                  <Input id="exampleText" name="text" type="textarea" />
                </FormGroup> */}
                <FormGroup>
                  <Label for="exampleFile">Photo d'identite</Label>
                  <Input id="exampleFile" name="file" type="file" />
                  {/* <FormText>
                    This is some placeholder block-level help text for the above
                    input. It's a bit lighter and easily wraps to a new line.
                  </FormText> */}
                </FormGroup>
                {/* <FormGroup tag="fieldset">
                  <legend>Radio Buttons</legend>
                  <FormGroup check>
                    <Input name="radio1" type="radio" />{" "}
                    <Label check>
                      Option one is this and that—be sure to include why it's
                      great
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input name="radio1" type="radio" />{" "}
                    <Label check>
                      Option two can be something else and selecting it will
                      deselect option one
                    </Label>
                  </FormGroup>
                  <FormGroup check disabled>
                    <Input disabled name="radio1" type="radio" />{" "}
                    <Label check>Option three is disabled</Label>
                  </FormGroup>
                </FormGroup> */}
                {/* <FormGroup check>
                  <Input type="checkbox" /> <Label check>Check me out</Label>
                </FormGroup> */}
                 <div style={styles.buttonContainer}>
      <Button>Ajouter</Button>
      <Button>Modifier</Button>
      <Button>Supprimer</Button>
    </div>
              </Form>
            </CardBody>
          </Card>
        </Col>

          {/* --------------------------------------------------------------------------------*/}
        {/* table-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Col lg="12">
        <ProjectTables />
        </Col>
      </Row>

        
        
      
    );
  };
  
  export default Compte;
  