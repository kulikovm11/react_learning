import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../../services/postsService";
import {get} from "axios";





const initialState = {
    posts:[],
    errors:null,
    loading:null,
    selectedPost:null,

};


const getAllPosts = createAsyncThunk(
    'postSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await postsService.getAll()
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)





const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers:{
        // getAllPosts:(state, action)=>{
        //     state.posts = action.payload
        // },

        setSelectedPost:(state, action)=>{
            state.selectedPost = action.payload
        }

    },
    extraReducers:builder =>
        builder
            .addCase(getAllPosts.fulfilled, (state, action)=>{
                state.loading = false
                state.posts = action.payload
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getAllPosts.pending, (state) => {
                state.loading = true
            })

})




const {reducer:postReducer, actions:{ setSelectedPost}} = postSlice

const postActions = {
    setSelectedPost,
    getAllPosts
}

export {postReducer, postActions, postSlice}