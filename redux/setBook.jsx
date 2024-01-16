import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name:'book',
    initialState:{
        bookImg:'',
        bookTitle:'',
        bookText:''
    },
    reducers:{
        setBookImg:(state,action) => {
            state.bookImg = action.payload
        },
        setBookTitle:(state,action) => {
            state.bookTitle = action.payload
        },
        setBookText:(state,action) => {
            state.bookText = action.payload
        },
    }
})

export const {setBookImg,setBookText,setBookTitle} = counterSlice.actions;
export default counterSlice.reducer;