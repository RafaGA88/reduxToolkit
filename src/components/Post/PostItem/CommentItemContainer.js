import { useSelector, useDispatch } from "react-redux";
import { fetchComments, commentsSelector } from "../../../store/reducers/Comments";
import { useEffect, useState } from "react";
import CommentItem from "./CommentItem";

export default function CommentItemContainer ({ postId }){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComments());
        findComments();
    },[dispatch, findComments])

    const commentsIds = useSelector(commentsSelector.selectAll);
    const [selectedComments, setSelectedComments] = useState([]);

    function findComments(){
        const arrayComments = []
        const comments = commentsIds.filter(comment => comment.postId === postId).map((info) => {
            arrayComments.push(info)
        })
        setSelectedComments(comments);
    }

    return (
        <>
            <CommentItem comments={selectedComments}/>
        </>
    )
}