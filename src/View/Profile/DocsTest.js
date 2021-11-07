import React, { useState } from "react";
import Modal from "react-modal";
import Service from "../../services";
import axios from "axios";

function DocsTest() {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedFile, setSelectedFile] = useState([]);
  const [error, setError] = useState ("")

    



  const uploadDocs = (e) => {
    e.preventDefault();
    let formData = new FormData();
    const formdata = new FormData();
    formData.append(selectedFile[0].name, selectedFile[0] );
    formData.append(selectedFile[1].name, selectedFile[1] )
    formData.append(selectedFile[2].name, selectedFile[2] )
   axios
      .post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          console.log(
            "upload Progress: " +
              Math.round((progressEvent.loaded / progressEvent.total) * 100) +
              "%"
          );
        },
      })
      .then((res) => {
        console.log(res);
      });
    console.log(formData);
  }
   
  

  

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div>
        <button onClick={openModal}>Documents Justificatifs à fournir</button>
        <Modal isOpen={modalIsOpen} /* onRequestClose={closeModal} */>
        <div class="conttainer">
        <h1>file upload</h1>
        <h3>{error}</h3>     
         <form action="/upload" method="post" enctype="multipart/form-data">
            <div class="file-field input-field">
              <div class="btn blue">
                <span>Pièce d'identité</span>
                <input name="myImage" type="file"/>
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text"/>
              </div>
            </div>

            <div class="file-field input-field">
                <div class="btn blue">
                  <span>Justificatif de domicile</span>
                  <input name="myImage" type="file"/>
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text"/>
                </div>
              </div>


              <div class="file-field input-field">
                <div class="btn blue">
                  <span>Relevé d'identité Bancaire</span>
                  <input name="myImage" type="file"/>
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text"/>
                </div>
              </div>
            <button type="submit" class="btn">submit docs</button>
          </form>
    </div>
        </Modal>
      </div>
    </div>
  );
}

export default DocsTest;
