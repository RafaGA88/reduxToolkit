import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('reducers/fetchPosts',
    async () => {
        return await ( await fetch('https://jsonplaceholder.typicode.com/posts')).json();
    }
);

const postsAdapter = createEntityAdapter({
    selectId: (post) => post.id,
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState({ loading: false }),
    reducers: {},
    extraReducers: {
        [fetchPosts.fulfilled](state, {payload}) {
            state.loading = false
            postsAdapter.setAll(state, payload)
        },
        [fetchPosts.pending](state){
            state.loading = true
        },
        [fetchPosts.rejected](state){
            state.loading = false
        },
    },
});

export const postsSelector = postsAdapter.getSelectors(state => state.posts);

export default postsSlice.reducer;