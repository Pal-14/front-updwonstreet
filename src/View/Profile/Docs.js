import React from 'react'
import Modal from "react-modal";



 function Docs() {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    


    let sendFiles = (e) => {
        e.preventDefault()
        console.log(e.target.form.elements);
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
             <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
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
        <input onClick={(e) => sendFiles(e) } type="submit"></input>
      </div>
       
      </div>
        </form> 
      </Modal>

            
        </div>
    )
}


export default Docs;
