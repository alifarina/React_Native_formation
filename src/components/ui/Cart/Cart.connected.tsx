import { View, Text } from 'react-native'
import React from 'react'
import CartUnconnected from './Cart'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../store/store'
import { addProiduct } from '../../../store/cartSlice'


type Props = {}

const Cart = (props: Props) => {
    const product = useSelector((state: RootState) => state.cart.products)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <CartUnconnected products={product} onQuantChange={(p, q) => {
            if (p.quantity < q) {
                dispatch(addProiduct(p))
            }else{
                // remove 
            }
        }} />
    )
}

export default Cart