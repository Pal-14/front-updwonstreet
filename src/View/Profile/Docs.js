import React, { useCallback, useState, useMemo } from "react";
import Modal from "react-modal";
import Service from "../../services";
import axios from "axios";

function Docs() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [error ,setError] = useState ("")
  const [selectedFile, setSelectedFile] = useState([]);
  

  let formData =useMemo(()=>  new FormData(),[]);

  const onFileChange = useCallback( (e) => {

    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      formData.append("file_upload", e.target.files[0]);
    }
  },[formData]);


  const SubmitFileData = () => {
    let jwt = localStorage.getItem("jwt"); 
    axios.post("http://localhost:5000/users/files-proof",  formData  ,
     {headers : {
      Authorization: `Bearer ${jwt}`}
    })
      .then((res) => {
        console.log(res);
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
      <button onClick={openModal}>Documents Justificatifs à fournir</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>close</button>
        <h3>{error}</h3>
        <form encType="multipart/form-data" method="POST" action="/users/files-proof"  >
          <div>
            <h3>Pièce d'identié</h3>
            <input type="file" name="file_upload"  onChange={onFileChange} />

            <br />
          </div>
          <div>
          <h3>Justificatif de domicile de(-de 6 mois)</h3>
            <input type="file" name="file_upload"  onChange={onFileChange} />

            <br />
          </div>
          <div>
          <h3>Relevé d'identité Bancaire </h3>
            <input type="file" name="file_upload"  onChange={onFileChange} />

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
