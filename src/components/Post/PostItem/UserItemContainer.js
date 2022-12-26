import UserItem from './UserItem';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, usersSelector } from '../../../store/reducers/Users';

import '../post.css';

export default function UserItemContainer({ userId }){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    },[dispatch])

    const selectedUser = useSelector(state => {
        console.log(state)
        usersSelector.selectById(state, userId)
    });

    return (
        <>
            <UserItem user={selectedUser}/>
        </>
    );

}