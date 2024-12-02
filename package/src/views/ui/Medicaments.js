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
  import Blog from "../../components/dashboard/CardMedicament";
  import bg1 from "../../assets/images/bg/bg1.jpg";
  import bg2 from "../../assets/images/bg/bg2.jpg";
  import bg3 from "../../assets/images/bg/bg3.jpg";
  import bg4 from "../../assets/images/bg/bg4.jpg";

  import { faPrescriptionBottle, faUserMd, faUserInjured, faPills } from "@fortawesome/free-solid-svg-icons";

  const Forms = () => {
    const styles = {
        formContainer: {
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px', // Optional gap between forms
          width: '100%', // Ensure the container takes up the available width
        },
        formGroup: {
          flex: 1, // Make each FormGroup take equal width
        },
      };

      const BlogData = [
        {
          image: bg1,
          title: "This is simple blog",
          subtitle: "2 comments, 1 Like",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
          btnbg: "primary",
        },
        {
          image: bg2,
          title: "Lets be simple blog",
          subtitle: "2 comments, 1 Like",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
          btnbg: "primary",
        },
        {
          image: bg3,
          title: "Don't Lamp blog",
          subtitle: "2 comments, 1 Like",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
          btnbg: "primary",
        },
        {
          image: bg4,
          title: "Simple is beautiful",
          subtitle: "2 comments, 1 Like",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
          btnbg: "primary",
        },
      ];
    return (
        <div>
      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <FontAwesomeIcon icon={faPills} style={{marginRight:20}} />
              Gestion Medicaments
            </CardTitle>
            <CardBody>
              <Form>

              <FormGroup style={styles.formGroup}>
        <Label for="exampleEmail">Nom de Medicament</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="with a placeholder"
          type="email"
        />
      </FormGroup>
              <div style={styles.formContainer}>
      <FormGroup style={styles.formGroup}>
        <Label for="exampleEmail">Prix</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="with a placeholder"
          type="email"
        />
      </FormGroup>
      
      <FormGroup style={styles.formGroup}>
        <Label for="examplePassword">Quantité</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password placeholder"
          type="number" // Changed to 'number' for quantity input
        />
      </FormGroup>
      </div>
     
                <FormGroup>
                  {/* <Label for="exampleFile">File</Label> */}
                  <Input id="exampleFile" name="file" type="file" />
                 
                </FormGroup>
                {/* <FormGroup>
                  <Label for="exampleSelect">Select</Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup> */}
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
                </FormGroup>
                <FormGroup>
                  <Label for="exampleFile">File</Label>
                  <Input id="exampleFile" name="file" type="file" />
                  <FormText>
                    This is some placeholder block-level help text for the above
                    input. It's a bit lighter and easily wraps to a new line.
                  </FormText>
                </FormGroup>
                <FormGroup tag="fieldset">
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
                </FormGroup>
                <FormGroup check>
                  <Input type="checkbox" /> <Label check>Check me out</Label>
                </FormGroup> */}
                <Button>Ajouter</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>


           
      
    
      </Row>


                       {/***Blog Cards***/}
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
      </div>
  
    );
  };
  
  export default Forms;
  