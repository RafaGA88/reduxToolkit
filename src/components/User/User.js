import { Button } from '@amigoapp/doca-react';
import { useCallback, useState } from "react";
import Modal from 'react-modal'
import '../../post.css';

export default function UserItem ({ user }){

    const [modalIsOpen, setIsModalOpen] = useState(false);

    const onModalClick = useCallback(() => setIsModalOpen(value => !value),[])

    return (
        <div>
             <Button
                onClick={() => onModalClick()}
                variant="primary"
            >
                User
            </Button>
            <Modal isOpen={modalIsOpen} onRequestClose={onModalClick} contentLabel="Example Modal" overlayClassName="modal-overlay" className="modal-content">
                <p><b>Name:</b> {user?.name}</p>
                <p><b>Email:</b> {user?.email}</p>
                <p><b>Phone:</b> {user?.phone}</p>
                <p><b>WebSite:</b> {user?.website}</p>
            </Modal>
        </div>
    );

}