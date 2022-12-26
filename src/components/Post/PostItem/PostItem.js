export default function PostItem({ post }){
    return(
        <div>
            <p>Title: {post.title}</p>
            <p>Post: {post.body}</p>
        </div>
    );

}