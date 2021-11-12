import React from "react";
import Modal from "react-modal";

function Informations(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  //variable pour éviter de retaper à chaque fois props?.user?.data?.data dans la recup d'info dans le return
  let data = props?.user?.data?.data;

  //variable pour recup l'objet json des infos
  let info = props?.user?.data?.data?.infos;

  // ouverture de la Modal
  function openModal() {
    setIsOpen(true);
  }
  //fermeture de la Modal
  function closeModal() {
    setIsOpen(false);
  }
  console.log(props?.user);
  console.log(data?.documents?.documentsUrl)

let BASEURL = "http://localhost:5000/" || "http://scalingomesballs.io/"
let PATHOFPUBLICPICS = "get-public-pic" 


  return (
    <div class="card cardProfile">
      <div class="card-content">
        <span class="card-title ">Consulter mes informations</span>
        <p>Tout vos informations</p>
        <p>
          <a id="rouge" onClick={openModal}>
            Ici pour consulter
          </a>
        </p>
      </div>

      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <div>
            <a onClick={closeModal}>close</a>
            <div>
              <span class="card-title">Informations Personnelles : </span>
              <ul className="collection">
                <li className="collection-item">Pseudo: {data?.userName}</li>
                <li className="collection-item">
                  Nom de Famille: {data?.lastName}
                </li>
                <li className="collection-item">Prénom: {data?.firstName}</li>
                <li className="collection-item">
                  Date de Naissance: {info?.dateOfBirth}
                </li>
                <li className="collection-item">Email: {data?.email} </li>
                <li className="collection-item">
                  Téléphone: {info?.phoneNumber}
                </li>
                <li className="collection-item">adresse: {info?.adress}</li>
                <li className="collection-item">Pays: {info?.country}</li>
                <li className="collection-item">Ville: {info?.city}</li>
                <li className="collection-item">
                  Code Postal: {info?.postalCode}
                </li>
              </ul>

              <img src={`http://localhost:5000/get-public-pic/${data.documents.documentsUrl[0]}`} />
              <img src={`http://localhost:5000/get-public-pic/${data.documents.documentsUrl[1]}`} />
              <img src={`http://localhost:5000/get-public-pic/${data.documents.documentsUrl[2]}`} />
              <img src={`${BASEURL}/${PATHOFPUBLICPICS}/${data.documents.documentsUrl[0]}`} />
              <img src={`http://localhost:5000/get-public-pic/${data.documents.documentsUrl[1]}`} />
              <img src={`http://localhost:5000/get-public-pic/${data.documents.documentsUrl[2]}`} />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Informations;
