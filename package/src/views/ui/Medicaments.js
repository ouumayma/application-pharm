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
  FormFeedback,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPills } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Forms = () => {

  const [medicament, setMedicament] = useState({
    nom: "",
    label: "",
    prix: "",
    quantite: "",
    image: "",
  });
  const [medicaments, setMedicaments] = useState([]);
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); // Pour contrôler l'ouverture du modal
  const [selectedMedicament, setSelectedMedicament] = useState(null); // Pour stocker le médicament à modifier
  const navigate = useNavigate(); // Initialiser le hook de navigation

  const handleDelete = async (id) => {
    // Demander une confirmation avant la suppression
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) {
      try {
<<<<<<< HEAD
        // Envoyer la requête DELETE à l'API avec l'ID de l'article à supprimer
        await axios.delete(`http://localhost:8000/api/medicaments/${id}`);
=======
        const res=await axios.get("http://localhost:8000/api/medicaments")
        setMedicaments(res.data.medicaments )
        console.log(res.data.medicaments )
       // setisLoading(false)
      } catch (error) {
        console.log(error)
      }
>>>>>>> 032268baf3e68c4e33be23dc3b65d418316a2d6b
  
        // Recharger la liste des médicaments après suppression
        fetchMedicaments();
      } catch (error) {
        console.error("Erreur lors de la suppression du médicament:", error);
      }
    }
  };
  

  // Fonction pour récupérer les médicaments
  const fetchMedicaments = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/medicaments");
      setMedicaments(res.data.medicaments);
      console.log(res.data.medicaments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMedicaments();
  }, []);

  // Options de serveur pour l'upload d'images
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
            setMedicament({ ...medicament, image: data.url });
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

  // Validation des champs
  const validate = () => {
    const newErrors = {};
    if (!medicament.nom) newErrors.nom = "Le nom du médicament est requis.";
    if (!medicament.label) newErrors.label = "Le label du médicament est requis.";
    if (!medicament.prix) {
      newErrors.prix = "Le prix est requis.";
    } else if (isNaN(medicament.prix)) {
      newErrors.prix = "Le prix doit être un nombre valide.";
    }
    if (!medicament.quantite) {
      newErrors.quantite = "La quantité est requise.";
    } else if (isNaN(medicament.quantite) || medicament.quantite <= 0) {
      newErrors.quantite = "La quantité doit être un entier positif.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Fonction de sauvegarde du médicament
  const handleSave = async (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire
  
    if (!validate()) {
      return;
    }
  
    try {
      // Vérifiez si nous sommes en mode édition ou ajout
      if (selectedMedicament) {
        // Si un médicament est sélectionné (mode édition), envoyez une requête PUT pour mettre à jour les informations
        await axios.put(`http://localhost:8000/api/medicaments/${selectedMedicament.id}`, medicament);
      } else {
        // Sinon, envoyez une requête POST pour ajouter un nouveau médicament
        await axios.post("http://localhost:8000/api/medicaments", medicament);
      }
  
      // Réinitialiser l'état pour le prochain formulaire
      setMedicament({
        nom: "",
        label: "",
        prix: "",
        quantite: "",
        image: "",
      });
      setFiles([]); // Réinitialiser les fichiers téléchargés
  
      // Fermer le modal
      setIsModalOpen(false);
  
      // Recharger la liste des médicaments
      fetchMedicaments();
  
      // Rediriger l'utilisateur vers la page des médicaments
      navigate("/dashboard/Medicaments");
    } catch (error) {
      console.log(error);
    }
  };
  

  // Ouvrir le modal pour éditer un médicament
  const handleEdit = (med) => {
  setSelectedMedicament(med);
  <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(false)}>
    <ModalHeader toggle={() => setIsModalOpen(false)}>
      Modifier un médicament
    </ModalHeader>
    <ModalBody>
      ...
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={handleSave}>Enregistrer</Button>
      <Button color="secondary" onClick={() => setIsModalOpen(false)}>Annuler</Button>
    </ModalFooter>
  </Modal>
  setIsModalOpen(true);
};


  // Styles du formulaire
  const styles = {
    formContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '20px',
      width: '100%',
    },
    formGroup: {
      flex: 1,
    },
  };

  return (
    <div>
      {/* Formulaire pour l'ajout de médicament */}
      <Row>
        <Col>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <FontAwesomeIcon icon={faPills} style={{ marginRight: 20 }} />
              Gestion Medicaments
            </CardTitle>
            <CardBody>
              <Form>
<<<<<<< HEAD
                <div style={styles.formContainer}>
                  <FormGroup style={styles.formGroup} invalid={!!errors.nom}>
                    <Label for="Nom_de_Medicament">Nom de Medicament</Label>
                    <Input
                      id="Nom_de_Medicament"
                      name="Nom_de_Medicament"
                      placeholder="Nom de Medicament"
                      type="text"
                      value={medicament.nom}
                      onChange={(e) => setMedicament({ ...medicament, nom: e.target.value })}
                    />
                    {errors.nom && <FormFeedback>{errors.nom}</FormFeedback>}
=======
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
>>>>>>> 032268baf3e68c4e33be23dc3b65d418316a2d6b
                  </FormGroup>

                  <FormGroup style={styles.formGroup} invalid={!!errors.label}>
                    <Label for="Label_de_Medicament">Label de Medicament</Label>
                    <Input
                      id="Label_de_Medicament"
                      name="Label_de_Medicament"
                      placeholder="Label de Medicament"
                      type="text"
                      value={medicament.label}
                      onChange={(e) => setMedicament({ ...medicament, label: e.target.value })}
                    />
                    {errors.label && <FormFeedback>{errors.label}</FormFeedback>}
                  </FormGroup>
                </div>

                <div style={styles.formContainer}>
                  <FormGroup style={styles.formGroup} invalid={!!errors.prix}>
                    <Label for="Prix">Prix</Label>
                    <Input
                      id="Prix"
                      name="Prix"
                      placeholder="Prix du médicament"
                      type="number"
                      value={medicament.prix}
                      onChange={(e) => setMedicament({ ...medicament, prix: e.target.value })}
                    />
                    {errors.prix && <FormFeedback>{errors.prix}</FormFeedback>}
                  </FormGroup>

                  <FormGroup style={styles.formGroup} invalid={!!errors.quantite}>
                    <Label for="Quantite">Quantité</Label>
                    <Input
                      id="Quantite"
                      name="Quantite"
                      placeholder="Quantité du médicament"
                      type="number"
                      value={medicament.quantite}
                      onChange={(e) => setMedicament({ ...medicament, quantite: e.target.value })}
                    />
                    {errors.quantite && <FormFeedback>{errors.quantite}</FormFeedback>}
                  </FormGroup>
                </div>

                <FormGroup as={Col} md="6">
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

                <Button onClick={handleSave}>Ajouter</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Affichage des médicaments */}
      <Row>
  {medicaments.map((blg, index) => (
    <Col sm="6" lg="6" xl="3" key={index}>
      <Card className="blog-card">
        <img src={blg.image} alt={blg.nom} className="card-img-top" />
        <CardBody>
          <CardTitle tag="h5">{blg.nom}</CardTitle>
          <h6>{blg.label}</h6>
          <p>Prix : {blg.Prix}</p>
          <p>Quantité : {blg.quantite} unités</p>
          <Button color="primary" onClick={() => handleEdit(blg)}>
            Éditer
          </Button>

          {/* Bouton de suppression */}
          <Button
            color="danger"
            size="sm"
            onClick={() => handleDelete(blg.id)} // Appel de handleDelete pour supprimer l'article
            style={{ marginLeft: '10px' }}
          >
            Supprimer
          </Button>
        </CardBody>
      </Card>
    </Col>
  ))}
</Row>


      {/* Modal d'édition */}
      
    </div>
  );
};

export default Forms;
