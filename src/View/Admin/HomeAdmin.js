import { useState, useEffect } from "react";
import Admin from "./Admin";
import AjoutDeBiens from "./AjoutDeBiens";
import PhotoBiens from "./PhotoBiens";
import "./Admin.css";
import ReviewItems from "./ReviewItems";
import Informations from "../Profile/Informations";

function HomeAdmin(props) {
  /* const [title, setTitle] = useState("Validé");
  const [error, setError] = useState(""); */

  const [openPhoto, setOpenPhoto] = useState(false);
  const [targetItemFundingId, setTargetItemFundingId] = useState("");

  useEffect(() => {}, [openPhoto, targetItemFundingId]);

  /* function Isaccepted() {
    if (title === "Validé") {
      setTitle("Validé");
    } else {
      if (title !== "Validé") {
        setTitle("En attente d'admin");
      }
    }
  } */

  return (
    <div className="containCard">
      <div className="containProfile">
        <div className="boxProfile">
          <div className="imageProfile" />
        </div>
      </div>

      <div className="card Admin">
        <span class="card-title">Page administrateur</span>
        <div className="full">
          <Admin />
          <Informations {...props} />
          <AjoutDeBiens
            {...props}
            setOpenPhoto={setOpenPhoto}
            setTargetItemFundingId={setTargetItemFundingId}
          />
          <PhotoBiens
            {...props}
            openPhoto={openPhoto}
            setOpenPhoto={setOpenPhoto}
            targetItemFundingId={targetItemFundingId}
          />
          <ReviewItems />
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;
