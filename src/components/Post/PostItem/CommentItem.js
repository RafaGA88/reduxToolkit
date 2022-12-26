import { useState } from "react";
import Modal from "react-modal";
import { Button } from '@amigoapp/doca-react';
import '../post.css';

export default function CommentItem({ comments }){

    const [modalCommentsIsOpen, setIsCommentsOpen] = useState(false);

    function closeModalComments(){
        setIsCommentsOpen(false);
    }

    function openModalComments(){
        setIsCommentsOpen(true);
    }

    return (
        <div>
            <Button
                onClick={() => openModalComments()}
                variant="primary"
           >
                Comentários
            </Button>
            <Modal isOpen={modalCommentsIsOpen} onRequestClose={closeModalComments} contentLabel="Example Modal" overlayClassName="modal-overlay" className="modal-content">
                {comments.map(comment => (
                    <>
                        <p>{comment.name}</p>
                        <p>{comment.body}</p>
                    </>
                ))}
             </Modal>
        </div>
    );
}