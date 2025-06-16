/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Apartment, Floor, Tower } from "models/app-interface";

// Define a type for the slice state
export interface GlobalStates {
  towerData: any;
  activeTower: Tower | object;
  activeFloor: Floor | object;
  activeApartment: Apartment | object;
}

// Define the initial state using that type
const initialState: GlobalStates = {
  towerData: [],
  activeTower: {},
  activeFloor: {},
  activeApartment: {}
};

export const globalStateSlice = createSlice({
  name: "globalStates",
  initialState,
  reducers: {
    setActiveTower: (state, action: PayloadAction<Tower>) => {
      state.activeTower = action.payload;
      return state;
    },

    setActiveFloor: (state, action: PayloadAction<Floor | object>) => {
      state.activeFloor = action.payload;
      return state;
    },

    setActiveApartment: (state, action: PayloadAction<Apartment | object>) => {
      state.activeApartment = action.payload;
      return state;
    },
  
  },
});

export const { setActiveTower, setActiveFloor, setActiveApartment } = globalStateSlice.actions;

export default globalStateSlice.reducer;