import React, { useCallback, useState, useMemo } from "react";
import Modal from "react-modal";
import Service from "../../services";
import axios from "axios";

function Docs() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [error ,setError] = useState ("")
  const [selectedFile, setSelectedFile] = useState([]);
  const [submitedDocumentType, setSubmitedDocumentType] = useState("CARTE ID")

  let formData =  new FormData();

  const onFileChange = useCallback( (e) => {
    let fileTypeCheck = e.target.files[0].type
    console.log(e.target.files[0].type,'premier');
    console.log(e.target.files[0].name,'Deuxième');
    console.log(e.target.name,'troisieme');
    
    
    if(fileTypeCheck != "image/png" && "application/pdf" && "image/jpeg" && "image/jpg") {
      console.log(e.target.files[0],"deuxieme");
      e.target.value = ("")//pour remmettre la  value a 0
      alert("Format de fichier non pris en charge seulement .pdf / .png / .jpg /.jpeg")
    }
    
    else {
      formData.append(e.target.name, e.target.files[0]);
      
    }
  },[formData]);
  


  const SubmitFileData = () => {
    let jwt = localStorage.getItem("jwt"); 
    axios.post("http://localhost:5000/users/upload",  formData  ,
     {headers : {
      Authorization: `Bearer ${jwt}`,
      typeOfDocumentSubmited:submitedDocumentType,
    }
  })
  /* if(status === 200){input.value =("")} */
      .then((res) => {
       //////// closeModal()///////////////////////////////faire condition de fermeture de modal quand success à voir 
        console.log(res,);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <a id="rouge" onClick={openModal}>Documents Justificatifs à fournir</a>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <a onClick={closeModal}>close</a>

        <form encType="multipart/form-data" method="POST" action="/users/upload"  >
          <div>
            <h3>Pièce d'identié</h3>
            <input type="file" name="cni"  onChange={onFileChange} />

            <br />
          </div>
          <div>
          <h3>Justificatif de domicile de(-de 6 mois)</h3>
            <input type="file" name="justificatif"  onChange={onFileChange} />

            <br />
          </div>
          <div>
          <h3>Relevé d'identité Bancaire </h3>
            <input type="file" name="rib"  onChange={onFileChange} />

            <br />
          </div>
          <br />

          <div>
            <button type="button" onClick={SubmitFileData}>Envoyer mes fichiers</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Docs;
