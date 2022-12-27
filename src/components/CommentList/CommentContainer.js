import { useSelector } from "react-redux";
import { commentsSelector } from "../../store/reducers/Comments";
import CommentList from "./CommentList";

export default function CommentItemContainer ({ postId }){

    const allComments = useSelector(commentsSelector.selectAll);

    const selectedComments = allComments.filter(comment => comment.postId === postId);

    return (
        <>
             <CommentList key={postId} comments={selectedComments} />
        </>
    );
}