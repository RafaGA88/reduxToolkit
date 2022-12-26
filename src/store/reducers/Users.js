import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('reducers/fetchUsers',
    async () => {
        return await ( await fetch('https://jsonplaceholder.typicode.com/users')).json();
    }
);

const usersAdapter = createEntityAdapter({
    selectId: (user) => user.id,
})

const usersSlice = createSlice({
    name: 'users',
    initialState: usersAdapter.getInitialState({ loading:false }),
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled](state, {payload}) {
            state.loading = false
            usersAdapter.setAll(state, payload)
        },
        [fetchUsers.pending](state){
            state.loading = true
        },
        [fetchUsers.rejected](state){
            state.loading = false
        },
    },
});

export const usersSelector = usersAdapter.getSelectors(state => state.users);

export default usersSlice.reducer;