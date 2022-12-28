import CommentContainer from "../../CommentList/CommentContainer";
import UserContainer from "../../User/UserContainer";
import '../../../post.css';
import PostItem from "./PostItem";
import { useSelector } from "react-redux";
import { postsSelector } from "../../../store/reducers/Posts";

export default function PostItemContainer ({ postId }){

  const selectedPost = useSelector(state => postsSelector.selectById(state, postId));

  return(
        <div className='Container'>
          <UserContainer userId={selectedPost.userId}/>
          <br/>
          <PostItem post={selectedPost}/>
          <br/>
          <CommentContainer postId={postId} />
        </div>
  );
}