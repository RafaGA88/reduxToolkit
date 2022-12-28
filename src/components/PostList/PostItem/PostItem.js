export default function PostItem({ post }){
    return(
        <div>
            <p><b>Title:</b> {post.title}</p>
            <br />
            <p><b>Post:</b> {post.body}</p>
        </div>
    );

}