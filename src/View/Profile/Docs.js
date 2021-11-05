import React, { useState } from "react";
import Modal from "react-modal";
import Service from "../../services";
import axios from "axios";

function Docs() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedFile, setSelectedFile] =  useState(null)




  async function handleSubmit(e) {
    
    console.log(e.target.files[0]);
    
    

   
  }

   const fileUploadHandler = (e) => {
     let fd = new FormData();
     fd.append('image', selectedFile,selectedFile.name );
    axios.post('https://projet-back.osc-fr1.scalingo.io/users/files-proof', fd)
    .then(res => {
      console.log(res);
    });
    
  }
    
  
  

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Documents Justificatifs à fournir</button>
      <Modal isOpen={modalIsOpen} /* onRequestClose={closeModal} */>
        <button onClick={closeModal}>close</button>

        <form>
          <div>
            <p>
              Pièce d'identité
              <input
              onChange={handleSubmit}
                id="fileInput"
                name="cni"
                type="file"
                accept="multipart/form-data"
              ></input>
            </p>

            <br />
          </div>

          <div>
            <p>
              Justificatif de domicile
              <input
               onChange={handleSubmit}
                id="fileInput"
                name="justificatif"
                type="file"
                accept="multipart/form-data"
              ></input>
            </p>

            <br />
            <div>
              <p>
                R.I.B
                <input
                 onChange={handleSubmit}
                  id="fileInput"
                  name="rib"
                  type="file"
                  accept="multipart/form-data"
                ></input>
              </p>
              <br />
                 <input  onClick={(e) => handleSubmit(e)}   type="submit"></input> 

              <button onclick={fileUploadHandler}>upload</button>  
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Docs;
