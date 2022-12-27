import PostList from './PostList';
import { fetchPosts, postsSelector } from '../../store/reducers/Posts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../store/reducers/Users';
import { fetchComments } from '../../store/reducers/Comments';

export default function PostContainer() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
        dispatch(fetchUsers());
        dispatch(fetchComments());
    }, [dispatch])

    const postsIds = useSelector(postsSelector.selectIds);

    return (
        <PostList postsIds={postsIds} />
    );
}

