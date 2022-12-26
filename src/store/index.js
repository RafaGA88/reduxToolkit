import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './reducers/Posts';
import usersSlice from './reducers/Users';
import commentsSlice from './reducers/Comments';

const store = configureStore({
    reducer: {
        posts: postsSlice,
        users: usersSlice,
        comments: commentsSlice
    }
});

export default store;