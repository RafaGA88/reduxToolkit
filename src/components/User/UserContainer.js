import User from './User';

import { useSelector } from 'react-redux';
import { usersSelector } from '../../store/reducers/Users';

import '../../post.css';

export default function UserItemContainer({ userId }){

    const selectedUser = useSelector(state => usersSelector.selectById(state, userId));

    return (
        <>
            <User user={selectedUser}/>
        </>
    );

}