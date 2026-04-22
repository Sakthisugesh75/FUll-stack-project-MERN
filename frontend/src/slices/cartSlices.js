import { createSlice } from "@reduxjs/toolkit";

const initialState =localStorage.getItem("cart") ?
JSON.parse(localStorage.getItem("cart")) :
{cartItem:[]}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtocart:(state, action)=>{
            const item =action.payload;
            
            console.log(item)
            const existItem =state.cartItem.find((a) =>
                 a._id === item._id);

            if(existItem){
                state.cartItem = state.cartItem.map((a) =>
                     a._id === existItem._id ?  item : a)
            }else {
                state.cartItem =[...state.cartItem, item]
            }

            /// calculate item price acc is called accumulator 
                
                state.itemPrice =state.cartItem.reduce(
                    (acc, item)=> acc + item.price * item.qty, 0)
                    //  (acc, item)=> acc + item.price * item.qty, 0)
                // Here accumulator starts from  0 as of now we started

                    /// shipping price goes here

                    state.shippingprice=  state.itemPrice > 100 ? 0 :20;


                    ///GST PRICE ADD
                    state.taxprice = Number(0.18 * state.itemPrice)


                    ////TotalPrice 

                    state.totalprice =
                    Number(state.itemPrice) +
                    Number(state.shippingprice) 
    

            localStorage.setItem("cart", JSON.stringify(state));
        },
        removeFromCart:(state,action)=> {
            state.cartItem =state.cartItem.filter((x)=> x._id !== action.payload);

              /// calculate item price acc is called accumulator 
                
                state.itemPrice =state.cartItem.reduce(
                    (acc, item)=> acc + item.price * item.qty, 0)
                    //  (acc, item)=> acc + item.price * item.qty, 0)
                // Here accumulator starts from  0 as of now we started

                    /// shipping price goes here

                    state.shippingprice=  state.itemPrice > 100 ? 0 :20;


                    ///GST PRICE ADD
                    state.taxprice = Number(0.18 * state.itemPrice)


                    ////TotalPrice 

                    state.totalprice =
                    Number(state.itemPrice) +
                    Number(state.shippingprice) 
    

            localStorage.setItem("cart", JSON.stringify(state));


        }
    }
})

export const {addtocart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;