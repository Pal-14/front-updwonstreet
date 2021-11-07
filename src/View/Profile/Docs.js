import React, { useState } from "react";
import Modal from "react-modal";
import Service from "../../services";
import axios from "axios";

function Docs() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedFile, setSelectedFile] = useState([]);

  let formData = new FormData();

  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      formData.append("file", e.target.files[0]);
    }
  };

  const SubmitFileData = () => {
    ("http://localhost:5000/users/files-proof", { formData })
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

        <form enctype="multipart/form-data" method="POST" action="/users/files-proof"  >
          <div>
            <input type="file" name="file_upload" onChange={onFileChange} />

            <br />
          </div>

          <div>
            <button onClick={SubmitFileData}>Sub Data</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Docs;
