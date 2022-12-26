import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk('reducers/fetchComments',
    async () => {
        return await ( await fetch('https://jsonplaceholder.typicode.com/comments')).json();
    }
);

const commentsAdapter = createEntityAdapter({
    selectId: (comment) => comment.id,
})

const commentsSlice = createSlice({
    name: 'comments',
    initialState: commentsAdapter.getInitialState({ loading: false}),
    reducers: {},
    extraReducers: {
        [fetchComments.fulfilled](state, {payload}) {
            state.loading = false
            commentsAdapter.setAll(state, payload)
        },
        [fetchComments.pending](state){
            state.loading = true
        },
        [fetchComments.rejected](state){
            state.loading = false
        },
    },
})

export const commentsSelector = commentsAdapter.getSelectors(state => state.comments);

export default commentsSlice.reducer;