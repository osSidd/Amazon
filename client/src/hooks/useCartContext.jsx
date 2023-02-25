import { useContext } from "react";

import {CartContext} from '../context/cartContext'

export default function useCartContext(){
    const context = useContext(CartContext)
    if(!context){
        throw new Error('cannot use context outside of Provider')
    }

    return context
}