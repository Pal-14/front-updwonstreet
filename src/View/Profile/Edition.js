import React from 'react'
import Finalisation from './Finalisation';
import Modal from "react-modal";

function Edition() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }







    return (
        <div>
          <button onClick={openModal}>Modifier mon Profil</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <button onClick={closeModal}>close</button>
               
                
                <div>
                   <Finalisation />
                </div>

            </Modal>
        </div>
    )
}

export default Edition;
