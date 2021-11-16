import React, { useCallback, useState, useMemo } from "react";
import Modal from "react-modal";
import Service from "../../services";


function Docs(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImage1, setSelectedImage1] = useState("");
  const [selectedImage2, setSelectedImage2] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const removeSelectedImage = () => {
    setSelectedImage();
  };
  const removeSelectedImage1 = () => {
    setSelectedImage1();
  };
  const removeSelectedImage2 = () => {
    setSelectedImage2();
  };

  let formData = useMemo(() => new FormData(), []);

  const onFileChange = useCallback(
    (e) => {
     
      let fileTypeCheck = e.target.files[0].type;
      console.log(e.target.name, "input value");

      if (
        fileTypeCheck !== "image/png" &&
        fileTypeCheck !== "application/pdf" &&
        fileTypeCheck !== "image/jpeg" &&
        fileTypeCheck !== "image/jpg"
      ) {
        e.target.value = ""; // Pour remettre la  value à 0
        alert(
          "Format de fichier non pris en charge seulement .pdf / .png / .jpg /.jpeg"
        );
      } else {
        formData.append(e.target.name, e.target.files[0]);
      }

      setSelectedImage(e.target.files[0]);
    },
    [formData]
  );
  const onFileChange1 = useCallback(
    (e) => {
      /* let fileChange = e.target.files[0]; */
      let fileTypeCheck = e.target.files[0].type;
      console.log(e.target.name, "input value");

      if (
        fileTypeCheck !== "image/png" &&
        fileTypeCheck !== "application/pdf" &&
        fileTypeCheck !== "image/jpeg" &&
        fileTypeCheck !== "image/jpg"
      ) {
        e.target.value = ""; // Pour remettre la  value à 0
        alert(
          /*  */
          "Format de fichier non pris en charge seulement .pdf / .png / .jpg /.jpeg"
        );
      } else {
        formData.append(e.target.name, e.target.files[0]);
      }

      setSelectedImage1(e.target.files[0]);
    },
    [formData]
  );
  const onFileChange2 = useCallback(
    (e) => {
      /* let fileChange = e.target.files[0]; */
      let fileTypeCheck = e.target.files[0].type;
      console.log(e.target.name, "input value");

      if (
        fileTypeCheck !== "image/png" &&
        fileTypeCheck !== "application/pdf" &&
        fileTypeCheck !== "image/jpeg" &&
        fileTypeCheck !== "image/jpg"
      ) {
        e.target.value = ""; // Pour remettre la  value à 0
        alert(
          "Format de fichier non pris en charge seulement .pdf / .png / .jpg /.jpeg"
        );
      } else {
        formData.append(e.target.name, e.target.files[0]);
      }
      setSelectedImage2(e.target.files[0]);
    },
    [formData]
  );

  async function SubmitFileData(e) {
    console.log(selectedImage);
    console.log(selectedImage1);
    console.log(selectedImage2);
    if (
      selectedImage !== "" &&
      selectedImage1 !== "" &&
      selectedImage2 !== ""
    ) {
      let docsSubmitted = await Service.filesProof(formData);
      console.log(docsSubmitted, "log de docsSubmitted");
      setMessage(docsSubmitted.data.message);
      if (docsSubmitted.data.success) {
        e.target.value = "";
        setSelectedImage("");
        setSelectedImage1("");
        setSelectedImage2("");
        return closeModal();
      } else {
        setError(docsSubmitted.data.error);
      }
    }
  }
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div>
        <a id="rouge" onClick={openModal}>
          SELECTIONNEZ ET ENVOYEZ VOS JUSTIFICATIFS
        </a>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <a onClick={closeModal}>Fermer</a>
          <form
            encType="multipart/form-data"
            method="POST"
            action="/users/upload"
            
          >
            <div style={styles.container}>
              <h4>
                {message}
                {error}
              </h4>
              <h4>Carte d'identité:</h4>
              <input class="btn bleuB" type="file" name="cni" onChange={onFileChange} />

              <br />
            </div>
            {selectedImage && (
              <div style={styles.preview} >
                <h4></h4>
                <img
                  src={URL.createObjectURL(selectedImage)}
                  style={styles.image}
                  alt="Thumb"
                />
                <button onClick={removeSelectedImage} style={styles.delete}>
                  Réduire l'image
                </button>
              </div>
            )}

            <div style={styles.container}>
              <h4>Justificatif de domicile de (-de 6 mois)</h4>
              <input class="btn bleuB"  type="file" name="justificatif" onChange={onFileChange1} />

              <br />
            </div>
            {selectedImage1 && (
              <div style={styles.preview}>
                <h4></h4>
                <img
                  src={URL.createObjectURL(selectedImage1)}
                  style={styles.image}
                  alt="Thumb"
                />
                <button onClick={removeSelectedImage1} style={styles.delete}>
                  Réduire l'image
                </button>
              </div>
            )}

            <div style={styles.container}>
              <h4>Relevé d'identité bancaire</h4>
              <input class="btn bleuB"  type="file" name="rib" onChange={onFileChange2} />

              <br />
            </div>
            {selectedImage2 && (
              <div style={styles.preview}>
                <h4></h4>
                <img
                  src={URL.createObjectURL(selectedImage2)}
                  style={styles.image}
                  alt="Thumb"
                />
                <button onClick={removeSelectedImage2} style={styles.delete}>
                  Réduire l'image
                </button>
              </div>
            )}

            <a onClick={SubmitFileData}>Confirmer et envoyer ma demande</a>
          </form>
        </Modal>
      </div>
    </>
  );
}

export default Docs;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};
