/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 26/11/2025 - 13:42:37
    * * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
 name:"Fortune"
};

const nameSlice = createSlice({
    name: "name",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        clearName: (state) => {
            state.name = "";
        },
    },
});

export const { setName, clearName } = nameSlice.actions;
export default nameSlice.reducer;