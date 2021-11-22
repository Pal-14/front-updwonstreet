import React from "react";
import Modal from "react-modal";


function Biens(props) {

  /* Variable d'état */
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  /* Variables */
  let data = props?.user?.data?.data?.documents;
  console.log(props.user,'data');
  let Url = `https://scrumbag-back-updownstreet.osc-fr1.scalingo.io/get-public-pic/` // URL de récupération des photos
 /*  let UrlPrivatePic = `https://scrumbag-back-updownstreet.osc-fr1.scalingo.io/get-private-pic/` pas encore utilisé */ // URL de récupération des documents privés soumis par un utilisateur


  /* Ouverture & fermeture de modal */
  function openModal() {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  };
  
  function affichage () {
    return props?.user?.data?.data?.stableCoinLog.map((achat) => {
      return <li>{achat.prettyPrintCurrentlyInFundingStage}</li>
    })
  }

  /* Affichage front */
  return (
    <div class="card cardProfile">
      <div class="card-content">
        <span class="card-title ">Portefeuille de biens</span>
        <p>Toutes les informations concernant vos biens </p>
        <p>
          <a id="rouge" onClick={openModal}>
            Ici pour consulter
          </a>
        </p>
      </div>
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <a onClick={closeModal}>Fermer</a>
          <ul>
             {affichage()}
          </ul>
        </Modal>
      </div>
    </div>
  );
}

export default Biens;



















