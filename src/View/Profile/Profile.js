import Biens from "./Biens";
import Informations from "./Informations";
import Portefeuille from "./Portefeuille";
import "./Profile.css";
import { useState, useEffect } from "react";
import Edition from "./Edition";
import DemandeVerification from "./DemandeVerification";
import AjoutDeBiens from "./AjoutDeBiens";
import PhotoBiens from "./PhotoBiens";

function Profile(props) {
  /* const [title, setTitle] = useState("Validé");
  const [error, setError] = useState(""); */

  const [openPhoto, setOpenPhoto] = useState(false);
  const [targetItemFundingId, setTargetItemFundingId] = useState("");

  useEffect(() => {}, [openPhoto]);

  /*  let currentUser = props.user */
  /* let rom = false */
  let currentUser = props?.user?.data?.data;

  console.log("LOG ROM", currentUser?.infos.isVerifiedByAdmin);
  // variable pour : changer l'état de User a compte validé et envoi des composants si validé
  // pour avoir les composants validé  dans let test = "Validé laisser tel quel
  // et pour avoir le status non validé dans let test retiré juste le (é).

  return (
    <div>
      <div className="containCard">
        <div className="containProfile">
          <div className="boxProfile">
            <div className="imageProfile" />
          </div>
        </div>

        <div className="card Profile">
          <span class="card-title">Bonjour {currentUser?.lastName}</span>
          {/*      <span class="card-title">Gérez votre profil</span> */}
          <p>
            {" "}
            Statut :{" "}
            {!currentUser?.infos?.isVerifiedByAdmin
              ? "Membre non vérifié"
              : "Membre vérifié"}
          </p>

          <div className="cardInCard">
            {!currentUser?.infos.isVerifiedByAdmin ? (
              <DemandeVerification {...props} />
            ) : <p stylename="hidden"></p>}
            <Biens {...props} />
            <Portefeuille {...props} />
            <Informations {...props} />
            <Edition {...props} />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
