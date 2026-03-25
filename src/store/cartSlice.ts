import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../interfaces/IProducts';
interface ICartSliceState{
    products:Array<IProduct>
}
const initialState : ICartSliceState = {
    products:[]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProiduct:(state,action:{type:string,payload:IProduct}) =>{
        const pr :IProduct={...action.payload}
        const position = state.products.findIndex(p => p.id ===  action.payload.id)
        if(-1 === position){
            pr.quantity = 1
            state.products.push(pr)
        }else{
           const p =  state.products[position]
           if(undefined!==p.quantity)p.quantity++
           else p.quantity=2
        }
    }
  }
});

export const {addProiduct} = cartSlice.actions

const cartReducer = cartSlice.reducer
export default cartReducer