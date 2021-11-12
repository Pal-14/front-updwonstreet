import React from "react";
import Modal from "react-modal";


function Biens(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  let data = props?.user?.data?.data?.documents;
  
  let Url = `http://localhost:5000/get-public-pic/`
  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div class="card cardProfile">
      <div class="card-content">
        <span class="card-title ">Consulter mes Biens</span>
        <p>Tout les informations sur vos Biens et leur gestion</p>
        <p>
          <a id="rouge" onClick={openModal}>
            Ici pour consulter
          </a>
        </p>
      </div>
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <a onClick={closeModal}>close</a>
          <div>
            {data? <img src={`${Url}${data?.documentsUrl[0]}`}  /> : <p>Pas d'image enregistrer</p>}
            <h2> Liste de Mes Biens : </h2>
            <div>
              <p>Nom du Bien:  </p>
              {data? <img src={`${Url}${data?.documentsUrl[1]}`}  /> : <p>Pas d'image enregistrer</p>}
            </div>
            <div>
              <p>Adresse: </p>
            </div>
            <div>
            {data? <img src={`${Url}${data?.documentsUrl[2]}`}  /> : <p>Pas d'image enregistrer</p>}
              <p>Ville: </p>
            </div>
            <div>
              <p>Type de Bien: </p>
            </div>
            <div>
              <p>Nombre de pièces: </p>
            </div>
            <div>
              <p>Chambre(s): </p>
            </div>
            <div>
              <p>Surface de terrain:</p>
            </div>
            <div>
              <p>Garage: </p>
            </div>
            <div>
              <p>Parking: </p>
            </div>
            <div>
              <p> Zone de parcelle: </p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Biens;
