import React, { useCallback, useState, useMemo } from "react";
import Modal from "react-modal";
import Service from "../../services";

function PhotoBiens(props) {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImage1, setSelectedImage1] = useState("");
  const [selectedImage2, setSelectedImage2] = useState("");
  const [selectedImage3, setSelectedImage3] = useState("");

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
  const removeSelectedImage3 = () => {
    setSelectedImage3();
  };

  console.log("photo bien se charge");
  let formData = useMemo(() => new FormData(), []);

  const onFileChange = useCallback(
    (e) => {
      let fileTypeCheck = e.target.files[0].type;
      console.log(e.target.files[0].type, "premier");
      console.log(e.target.files[0].name, "Deuxième");
      console.log(e.target.name, "troisieme");

      if (
        fileTypeCheck !== "image/png" &&
        fileTypeCheck !== "application/pdf" &&
        fileTypeCheck !== "image/jpeg" &&
        fileTypeCheck !== "image/jpg"
      ) {
        console.log(e.target.files[0], "deuxieme");
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
      let fileTypeCheck = e.target.files[0].type;
      console.log(e.target.files[0].type, "premier");
      console.log(e.target.files[0].name, "Deuxième");
      console.log(e.target.name, "troisieme");

      if (
        fileTypeCheck !== "image/png" &&
        fileTypeCheck !== "application/pdf" &&
        fileTypeCheck !== "image/jpeg" &&
        fileTypeCheck !== "image/jpg"
      ) {
        console.log(e.target.files[0], "deuxieme");
        e.target.value = ""; // Pour remettre la  value à 0
        alert(
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
      let fileTypeCheck = e.target.files[0].type;
      console.log(e.target.files[0].type, "premier");
      console.log(e.target.files[0].name, "Deuxième");
      console.log(e.target.name, "troisieme");

      if (
        fileTypeCheck !== "image/png" &&
        fileTypeCheck !== "application/pdf" &&
        fileTypeCheck !== "image/jpeg" &&
        fileTypeCheck !== "image/jpg"
      ) {
        console.log(e.target.files[0], "deuxieme");
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
  const onFileChange3 = useCallback(
    (e) => {
      let fileTypeCheck = e.target.files[0].type;
      console.log(e.target.files[0].type, "premier");
      console.log(e.target.files[0].name, "Deuxième");
      console.log(e.target.name, "troisieme");

      if (
        fileTypeCheck !== "image/png" &&
        fileTypeCheck !== "application/pdf" &&
        fileTypeCheck !== "image/jpeg" &&
        fileTypeCheck !== "image/jpg"
      ) {
        console.log(e.target.files[0], "deuxieme");
        e.target.value = ""; // Pour remettre la  value à 0
        alert(
          "Format de fichier non pris en charge seulement .pdf / .png / .jpg /.jpeg"
        );
      } else {
        formData.append(e.target.name, e.target.files[0]);
      }

      setSelectedImage3(e.target.files[0]);
    },
    [formData]
  );

  async function SubmitFileData(e) {
    console.log("MAIS OUAIS", props.targetItemFundingId);
    formData.append("targetItemFundingId", props.targetItemFundingId);
    console.log(selectedImage);
    console.log(selectedImage1);
    console.log(selectedImage2);

    if (
      selectedImage !== "" ||
      selectedImage1 !== "" ||
      selectedImage2 !== "" ||
      selectedImage3 !== ""
    ) {
      let docsSubmitted = await Service.addItemPics(formData);
      console.log(docsSubmitted, "log de docsSubmitted");
      setMessage(docsSubmitted.data.message);
      if (docsSubmitted.data.success) {
        e.target.value = "";
        setSelectedImage("");
        setSelectedImage1("");
        setSelectedImage2("");
        setSelectedImage3("");
        return props.setOpenPhoto(false);
      } else {
        setError(docsSubmitted.data.error);
      }
    }
  }

  return (
    <Modal isOpen={props.openPhoto}>
      <a onClick={() => props.setOpenPhoto(false)}>Fermer</a>
      <form encType="multipart/form-data" method="POST" action="/users/upload">
        <div style={styles.container}>
          <h3>
            {message}
            {error}
          </h3>
          <h3>Photo principale :</h3>

          <div class="btn bleuB">
            <input
              class="file-path validate"
              type="file"
              name="photoPricipale"
              onChange={onFileChange}
            />
          </div>

          <br />
        </div>
        {selectedImage && (
          <div style={styles.preview}>
            <h3></h3>
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
          <h3>Photo 1 :</h3>
          <div class="btn bleuB">
            <input type="file" name="photo1" onChange={onFileChange1} />
          </div>

          <br />
        </div>
        {selectedImage1 && (
          <div style={styles.preview}>
            <h3></h3>
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
          <h3>Photo 2 : </h3>
          <div class="btn bleuB">
            <input type="file" name="photo2" onChange={onFileChange2} />
          </div>

          <br />
        </div>
        {selectedImage2 && (
          <div style={styles.preview}>
            <h3></h3>
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

        <div style={styles.container}>
          <h3>Photo 3 : </h3>
          <div class="btn bleuB">
            <input type="file" name="photo3" onChange={onFileChange3} />
          </div>

          <br />
        </div>
        {selectedImage3 && (
          <div style={styles.preview}>
            <h3></h3>
            <img
              src={URL.createObjectURL(selectedImage3)}
              style={styles.image}
              alt="Thumb"
            />
            <button onClick={removeSelectedImage3} style={styles.delete}>
              Réduire l'image
            </button>
          </div>
        )}

        <a onClick={SubmitFileData}>Envoyer mes fichiers</a>
      </form>
    </Modal>
  );
}

export default PhotoBiens;

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
