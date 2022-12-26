import { useEffect, useState } from "react";
import CommentItemContainer from "./CommentItemContainer";
import UserItemContainer from "./UserItemContainer";
import '../post.css';
import PostItem from "./PostItem";
import { useSelector } from "react-redux";
import { postsSelector } from "../../../store/reducers/Posts";

export default function PostItemContainer ({ postId }){

  const selectedPost = useSelector(state => postsSelector.selectById(state, postId));

  return(
        <div className='Container'>
          <UserItemContainer userId={selectedPost.userId}/>
          <PostItem post={selectedPost}/>
          {/* <CommentItemContainer postId={postId} /> */}
          <br />
          <br />
        </div>
  );
}