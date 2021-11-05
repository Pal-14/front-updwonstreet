import React from "react";
import Modal from "react-modal";
import Service from "../../services";

function Docs() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file1", e.target.form.elements[0]);
    formData.append("file2", e.target.form.elements[1]);
    formData.append("file3", e.target.form.elements[2]);
    console.log(formData);
    let sendFiles = await Service.filesProof(formData);
    {
      console.log(sendFiles.data.success);
    }
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
                  id="fileInput"
                  name="rib"
                  type="file"
                  accept="multipart/form-data"
                ></input>
              </p>
              <br />
              <input onClick={(e) => handleSubmit(e)} type="submit"></input>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Docs;
