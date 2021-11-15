import React from "react";
import Modal from "react-modal";


function Biens(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  let data = props?.user?.data?.data?.documents;
  console.log(data,'data');
  let Url = `http://localhost:5000/get-public-pic/`
  let UrlBien = `http://localhost:500/get-private-doc/`

  
  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  

  

  return (
    <div class="card cardProfile">
      <div class="card-content">
        <span class="card-title ">Portefeuille de Tokens</span>
        <p>Toutes les informations concernant vos Token UDS et leur gestion</p>
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
             {data?.ownedItems >1 ? <img src={`${Url}${data?.ownedItems}`}  /> : <p>Vous ne posséder pas encore de biens</p>}
    
           
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Biens;



















