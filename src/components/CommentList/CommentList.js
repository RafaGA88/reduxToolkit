import { useCallback, useState } from "react";
import Modal from "react-modal";
import { Button } from '@amigoapp/doca-react';
import '../../post.css';

export default function CommentItem({ comments }){

    const [modalIsOpen, setIsModalOpen] = useState(false);

    const onModalClick = useCallback(() => setIsModalOpen(value => !value), []);

    return (
        <div>
            <Button
                onClick={() => onModalClick()}
                variant="primary"
           >
                Comentários
            </Button>
            <Modal isOpen={modalIsOpen} onRequestClose={onModalClick} contentLabel="Example Modal" overlayClassName="modal-overlay" className="modal-content">
                {comments.map(comment => (
                    <>
                        <br/>
                        <p><b>Name:</b> {comment.name}</p>
                        <p><b>Comment:</b> {comment.body}</p>
                        <br/>
                    </>
                ))}
             </Modal>
        </div>
    );
}