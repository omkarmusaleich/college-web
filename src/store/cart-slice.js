import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        totalItems:0,
        totalPrice:0
    },
    reducers:{
        addToCart(state,action){
            let index=-1;
            for(let i=0;i<state.cartItems.length;i++)
            {
                if(state.cartItems[i].id===action.payload.id)
                {
                    index=i;
                    break;
                }
            }
            if(index===-1)
            {
                state.cartItems.push({...action.payload,quentity:1});
            }
            else{
                state.cartItems[index].quentity++
            }
            state.totalItems++;
            state.totalPrice=state.totalPrice+action.payload.prise;
        },

        removeFromCart(state,action){
            for(let i=0;i<state.cartItems.length;i++)
            {
                if(action.payload===state.cartItems[i].id)
                {
                    state.totalItems--;
                    state.totalPrice=state.totalPrice-state.cartItems[i].prise;
                    if(state.cartItems[i].quentity>1)
                    {
                        state.cartItems[i].quentity--;
                    }
                    else if(state.cartItems[i].quentity===1){
                        let newarray=state.cartItems.filter(item=>item.id!==action.payload)
                        state.cartItems=[...newarray];
                    }
                    break;
                }
            }
        },
        replace(state,action){
            state.cartItems=action.payload.cartItems;
            state.totalItems=action.payload.totalItems;
            state.totalPrice=action.payload.totalPrice;
        },
        removeAll(state){
            state.cartItems=[];
            state.totalPrice=0;
            state.totalItems=0;
        }
    }
})

export const cartAction=cartSlice.actions;
export default cartSlice;