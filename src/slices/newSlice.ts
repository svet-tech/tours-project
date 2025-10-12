import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';

export interface Tours {
    id: string;
    name: string;
    image: string;
    price: string;
    days: string;

}

export interface NewState {
 tours: Tours[];
 cart: Tours[];
   isCartActive: boolean;

}

export const getTours = createAsyncThunk("/tours", async () => {
    const tours = axios.get<string, {data: Tours[]}>(
        "http://localhost:4200/tours");


    return (await tours).data;
});

const initialState: NewState = {
   tours: [],
   cart: [],
   isCartActive: false,
}


export const newSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: { 
     addToCart: (state, action: PayloadAction<Tours>) => {
      state.cart.push(action.payload);
      state.isCartActive = true;
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
  state.cart = state.cart.filter(tour => tour.id !== action.payload);
  if (state.cart.length === 0) {
      state.isCartActive = false;
}
  },
  },
  extraReducers: (builder) => {
    builder.addCase(getTours.fulfilled,
        (state, action: PayloadAction<Tours[]>) => {
            state.tours = action.payload;
        }

    )
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = newSlice.actions

export default newSlice.reducer