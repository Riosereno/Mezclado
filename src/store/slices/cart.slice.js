import {createSlice} from '@reduxjs/toolkit';
import { addToCart } from '../../services/addToCart';
const initialState= {
    products:[],
    loading: false
}

const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
    setCartProducts(state,action){
        state.products = action.payload
    },

    setCartLoading(state,action) {
        state.loading = action.payload
    }
},
     

});
 const {setCartProducts, setCartLoading} =cartSlice.actions;

 export const loadCartProducts = (token )=> async (dispatch)=>{
    dispatch(setCartLoading(true));
    const cart= await getCategories(token);

    dispatch(setCartProducts(cart));
    dispatch(setCartLoading(false));
 }
 

export const addToCart=({token,quantity, productId})=>async  (dispatch)=>{
    dispatch(setCartLoading(true));
    await addToCart({token,quantity, productId});
    dispatch(loadCartProducts(token))
}
export default cartSlice.reducer;