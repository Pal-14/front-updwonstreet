import { useState, useEffect } from "react";
import Admin from "./Admin";
import AjoutDeBiens from "./AjoutDeBiens";
import PhotoBiens from "./PhotoBiens";

function HomeAdmin(props) {
  const [title, setTitle] = useState("Validé");
  const [error, setError] = useState("");

  const [openPhoto, setOpenPhoto] = useState(false);

  useEffect(() => {}, [openPhoto]);

  function Isaccepted() {
    if (title === "Validé") {
      setTitle("Validé");
    } else {
      if (title !== "Validé") {
        setTitle("En attente d'admin");
      }
    }
  }

  return (
    <div className="containCard">
      <div className="containProfile">
        <div className="boxProfile">
          <div className="imageProfile" />
        </div>
      </div>
        <AjoutDeBiens {...props} setOpenPhoto={setOpenPhoto} />
        <PhotoBiens
          {...props}
          openPhoto={openPhoto}
          setOpenPhoto={setOpenPhoto}
        />
      <div className="card Profile">
        <span class="card-title">Page de profil</span>
        <p>Statut de votre profil : {title}</p>
        <p>{error}</p>
        <Admin />
      </div>
    </div>
  );
}

export default HomeAdmin;
