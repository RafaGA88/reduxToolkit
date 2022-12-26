import { Button } from '@amigoapp/doca-react';
import { useState } from "react";
import Modal from 'react-modal'
import '../post.css';

export default function UserItem ({ user }){

    const [modalUserIsOpen, setIsUserOpen] = useState(false);

    function closeModalUser(){
        setIsUserOpen(false);
    }

    function openModalUser(){
        setIsUserOpen(true);
    }

    return (
        <div>
             <Button
                onClick={() => openModalUser()}
                variant="primary"
            >
                User
            </Button>
            <Modal isOpen={modalUserIsOpen} onRequestClose={closeModalUser} contentLabel="Example Modal" overlayClassName="modal-overlay" className="modal-content">
                <p>name: {user.name}</p>
                <p>email: {user.email}</p>
                <p>phone: {user.phone}</p>
                <p>website: {user.website}</p>
            </Modal>
        </div>
    );

}