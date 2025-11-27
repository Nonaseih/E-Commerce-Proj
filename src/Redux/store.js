/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 26/11/2025 - 13:54:03
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./nameSlice";

export const store = configureStore({
    reducer: {
        name: nameReducer,
    },
})

