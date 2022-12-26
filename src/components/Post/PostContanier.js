import Post from './Post';
import { fetchPosts, postsSelector } from '../../store/reducers/Posts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

export default function PostContainer() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    const posts = useSelector(postsSelector.selectIds);

    return (
        <Post posts={posts} />
    );
}

// const groupedCommentsByPosts = {
//     10: [ 123, 114,141, 1141],
//     12: [ 121233, 1114, 1414, 11421 ],
//     14: [ 1823, 113764, 1419, 114167 ],
//     15: [ 166823, 18678, 141678, 114681 ],
// // id do post: array de ids de comentários
// };
