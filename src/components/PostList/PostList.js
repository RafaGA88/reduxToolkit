import PropTypes from 'prop-types';
import PostItemContainer from './PostItem/PostItemContainer';

export default function Post( { postsIds } ){

    return(
        <div>
        {postsIds.map(postId => (
            <PostItemContainer key={postId} postId={postId}></PostItemContainer>
        ))}
      </div>
    );

}

Post.propTypes = {
    posts: PropTypes.array,
    users: PropTypes.array,
    comments: PropTypes.array
};