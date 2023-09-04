import { CartItem } from '@/types/cart';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
    contents: CartItem[];
    items: number;
}

const initialState: CartState = {
    contents: [],
    items: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            if (state.contents.some((item) => item.id === action.payload.id)) {
                state.contents = state.contents.map((item: any) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + action.payload.quantity };
                    }
                    return item;
                });
            } else {
                state.contents.push(action.payload);
            }
            state.items += action.payload.quantity;
        },
        removeItem: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
            state.contents = state.contents.filter((item: any) => item.id !== action.payload.id);
            state.items = state.items - action.payload.quantity;
        },

        addQty: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
            state.contents = state.contents.map((item: any) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: action.payload.quantity };
                }
                return item;
            });
            state.items += 1;
        },
        subtractQty: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
            if (action.payload.quantity === 0) {
                state.contents = state.contents.filter((item: any) => item.id !== action.payload.id);
            }
            state.contents = state.contents.map((item: any) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: action.payload.quantity };
                }
                return item;
            });
            state.items -= 1;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, addQty, subtractQty } = cartSlice.actions;

export default cartSlice.reducer;
