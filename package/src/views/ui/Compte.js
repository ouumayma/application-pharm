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
 
  import { Link, useNavigate,useParams } from 'react-router-dom'

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faUser } from '@fortawesome/free-solid-svg-icons';
  import ProjectTables from "../../components/dashboard/AccountsTables";
   import axios from 'axios'

import React, { useEffect, useState } from 'react'

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

      const[account,setAccount]=useState({})
      const navigate=useNavigate()// Initialize the navigation hook


      const handleSave=async(e)=>{
        try {
          e.preventDefault()
          console.log(account)
          await axios.post("http://localhost:8000/api/users/register",account)
          .then(res=>{
            navigate("/dashboard/comptes")
          })
        } catch (error) {
          console.log(error)
        }
      }
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
      <Label for="username">Username</Label>
      <Input
        id="username"
        // name="username"
        value={account.name}
        onChange={(e)=>setAccount({...account,name:e.target.value})}
        placeholder="Enter your username"
        type="text"
      />
    </FormGroup>
    <FormGroup>
      <Label for="email">Email</Label>
      <Input
        id="email"
        // name="email"
        placeholder="Enter your email"
        type="email"
        value={account.email}
        onChange={(e)=>setAccount({...account,email:e.target.value})}
      />
    </FormGroup>
    <FormGroup>
      <Label for="password">Password</Label>
      <Input
        id="password"
        // name="password"
        placeholder="Enter your password"
        type="password"
        value={account.password}
        onChange={(e)=>setAccount({...account,password:e.target.value})}
      />
    </FormGroup>
    <FormGroup>
      <Label for="verifyPassword">Verify Password</Label>
      <Input
        id="verifyPassword"
        // name="verifyPassword"
        placeholder="Re-enter your password"
        type="password"
        value={account.password_confirmation}
        onChange={(e)=>setAccount({...account,password_confirmation:e.target.value})}
      />
    </FormGroup>
    <FormGroup>
      <Label for="role">Role</Label>
      <Input id="role" name="role"
       type="select"
       value={account.role}
        onChange={(e)=>setAccount({...account,role:e.target.value})}>
        <option value="">Select a role</option>
        <option value="medecin">Medecin</option>
        <option value="patient">Patient</option>
        <option value="pharmacien">Pharmacien</option>
        <option value="admin">admin</option>
        
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="photoIdentity">Photo d'identite</Label>
      <Input
        id="photoIdentity"
        name="photoIdentity"
        accept="image/*" 
        value={account.avatar}
        onChange={(e)=>setAccount({...account,avatar:"  "})}
        // Correctly specifies accepted file types
        // onChange={(e) => {
        //   const file = e.target.files[0]; // Get the first selected file
        //   if (file) {
        //     const imageUrl = URL.createObjectURL(file); // Generate a temporary URL for the file
        //     setAccount({ ...account, avatar: imageUrl }); // Update the account object
        //   }
        // }}
      />
    </FormGroup>
    <div style={styles.buttonContainer}>
      <Button onClick={(e)=>handleSave(e)}>Ajouter</Button>
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
  