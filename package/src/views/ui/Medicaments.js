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
  import React, { useEffect, useState } from 'react'
  import { Link, useNavigate,useParams } from 'react-router-dom'
  import axios from 'axios'

  import { FilePond,registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

  const Forms = () => {

    const[medicament,setMedicament]=useState({})
    const[medicaments,setMedicaments]=useState([])
    const navigate=useNavigate()// Initialize the navigation hook
    const [files, setFiles] = useState([]);


    const fetchscategories=async()=>{
      try {
        const res=await axios.get("http://localhost:8000/api/medicaments")
        setMedicaments(res.data.medicaments )
        console.log(res.data.medicaments )
       // setisLoading(false)
      } catch (error) {
        console.log(error)
      }
  
    }

    useEffect(()=>{
      fetchscategories()
    },[])


    const serverOptions = () => { 
      return {
        process: (fieldName, file, metadata, load, error, progress, abort) => {
        
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'iit2025S1');
        data.append('cloud_name', 'esps');
    data.append('publicid', file.name);
    axios.post('https://api.cloudinary.com/v1_1/esps/image/upload', data)
    .then((response) => response.data)
    .then((data) => {
    
    setMedicament({...medicament,image:data.url}) ;
    load(data);
    })
    .catch((error) => {
    console.error('Error uploading file:', error);
    error('Upload failed');
    abort();
    });
    },
    };
    };
    
    const handleSave=async(e)=>{
      try {
         e.preventDefault()
        console.log(medicament)
        await axios.post("http://localhost:8000/api/medicaments",medicament)
        .then(res=>{
          // Reset the medicament object to its initial values
    setMedicament({
      nom: "",
      label: "",
      prix: "",
      image: "",
      quantite: "",
    });
    setFiles([]);
     // Refresh the list of medicaments
     fetchscategories();
          navigate("/dashboard/Medicaments")
        })
      } catch (error) {
        console.log(error)
      }
    }
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
              <div style={styles.formContainer}>
              <FormGroup style={styles.formGroup}>
        <Label for="exampleEmail">Nom de Medicament</Label>
        <Input
          id="Nom_de_Medicament"
          name="Nom_de_Medicament"
          placeholder="Nom de Medicament"
          type="string"
          value={medicament.nom}
          onChange={(e)=>setMedicament({...medicament,nom:e.target.value})}
        />
        
      </FormGroup>

      <FormGroup style={styles.formGroup}>
        <Label for="exampleEmail">Label de Medicament</Label>
        <Input
          id="Label_de_Medicament"
          name="Nom_de_Medicament"
          placeholder="Label de Medicament"
          type="string"
          value={medicament.label}
          onChange={(e)=>setMedicament({...medicament,label:e.target.value})}
        />
        
      </FormGroup>
      </div>
              <div style={styles.formContainer}>
      <FormGroup style={styles.formGroup}>
        <Label for="exampleEmail">Prix</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="with a placeholder"
          type="email"
          value={medicament.prix}
          onChange={(e)=>setMedicament({...medicament,prix:e.target.value})}
        />
      </FormGroup>
      
      <FormGroup style={styles.formGroup}>
        <Label for="examplePassword">Quantité</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password placeholder"
          type="number" // Changed to 'number' for quantity input
          value={medicament.quantite}
          onChange={(e)=>setMedicament({...medicament,quantite:e.target.value})}
        />
      </FormGroup>
      </div>
     
      <FormGroup as={Col} md="6" >
        <Label>Image</Label>
        <div style={{ width: "80%", margin: "auto", padding: "1%" }}>
            <FilePond

            files={files}
            acceptedFileTypes="image/*"
            onupdatefiles={setFiles}
            allowMultiple={true}
            server={serverOptions()}
            name="file"

            />
            </div>
      </FormGroup>


                {/* <FormGroup>
                  {/* <Label for="exampleFile">File</Label> */}
                  {/* <Input id="exampleFile" name="file" type="file" 
                   value={medicament.image}
                   onChange={(e)=>setMedicament({...medicament,image:"https://res.cloudinary.com/dv4fi0p9a/image/upload/v1727013386/cld-sample-5.jpg"})}
                  />
                 
                </FormGroup> */} 
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
                <Button onClick={(e)=>handleSave(e)}>Ajouter</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>


           
      
    
      </Row>


                       {/***Blog Cards***/}
      <Row>
        {medicaments.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              nom={blg.nom}
              label={blg.label}
              prix={blg.prix}
              // color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
      </div>
  
    );
  };
  
  export default Forms;
  