import PropTypes from 'prop-types';
import PostItemContainer from './PostItem/PostItemContainer';
import { PostStyleContainer, ContainerFlex } from './PostStyles';

export default function Post( { postsIds } ){

    return(
        <ContainerFlex>
            <div>
                {postsIds.map(postId => (
                    <PostStyleContainer>
                        <PostItemContainer key={postId} postId={postId}></PostItemContainer>
                    </PostStyleContainer>
                ))}
            </div>
        </ ContainerFlex>
    );

}

Post.propTypes = {
    posts: PropTypes.array,
    users: PropTypes.array,
    comments: PropTypes.array
};