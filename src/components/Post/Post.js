import PropTypes from 'prop-types';
import PostItemContainer from './PostItem/PostItemContainer';

export default function Post( { posts } ){

    return(
        <div>
        {posts.map(post => (
            <PostItemContainer postId={post}></PostItemContainer>
        ))}
      </div>
    );

}

Post.propTypes = {
    posts: PropTypes.array,
    users: PropTypes.array,
    comments: PropTypes.array
};