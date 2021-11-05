import React, { useState } from "react";
import Modal from "react-modal";
import Service from "../../services";
import axios from "axios";

function Docs() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedFile, setSelectedFile] =  useState([])




  function handleSubmit(e) {
    setSelectedFile(selectedFile => [...selectedFile, e.target.files]);
    console.log(selectedFile);
  }

   const fileUploadHandler = () => {
     let fd = new FormData();
     let jwt = localStorage.getItem("jwt")
     console.log(selectedFile.name, selectedFile)
     fd.append(selectedFile[0].name, selectedFile[0] );
     fd.append(selectedFile[1].name, selectedFile[1] )
     fd.append(selectedFile[2].name, selectedFile[2] )
     axios.post( /* 'https://projet-back.osc-fr1.scalingo.io/users/files-proof' */ "http://localhost:5000/users/files-proof", fd, { headers:{
       Authorization: `Bearer ${jwt}`}, onUploadProgress: progressEvent => {
         console.log('upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total*100) + '%');
        } })
        .then(res => {
          console.log(res); 
        });
        console.log(fd);
        
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

        <form enctype="multipart/form-data" >
          <div>
            <p>
              Pièce d'identité
              <input
              onChange={(e) => handleSubmit(e)}
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
               onChange={(e) => handleSubmit(e)}
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
                 onChange={(e) => handleSubmit(e)}
                  id="fileInput"
                  name="rib"
                  type="file"
                  accept="multipart/form-data"
                ></input>
              </p>
              <br />
                 <input  onClick={(e) => handleSubmit(e)}   type="submit"></input> 

              <p onClick={fileUploadHandler}>upload</p>  
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Docs;
