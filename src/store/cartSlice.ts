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
    removeProduct:(state,action:{type:string,payload:IProduct})=>{
        const postition = state.products.findIndex(p=>p.id===action.payload.id)
        if(postition===-1) return;
        if(undefined!==state.products[postition].quantity && state.products[postition].quantity){
            state.products[postition].quantity--
        }else{
            const tmpProducAfter = state.products.slice(postition+1)
            state.products.splice(postition)
            state.products.push(...tmpProducAfter)
        }
    },
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