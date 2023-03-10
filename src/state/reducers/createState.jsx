import { createSlice } from "@reduxjs/toolkit";

const numberManage = createSlice({
    name : "number-increase-decrease",
    initialState : 0,
    reducers : {
        Inc : (state, action) => {
            return state + 1
        },
        Dec : (state, action) => {
            return state - 1
        }
    }
})

export const { Inc, Dec } = numberManage.actions
export default numberManage.reducer