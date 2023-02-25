import { createContext, useReducer } from "react";

export const CartContext = createContext()

export function reducer(state, action){
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                cart: state.cart + action.payload
            }
        default:
            return state
    }
}

export default function CartContextProvider({children}){

    const [state, dispatch] = useReducer(reducer, {
        cart: 0
    })

    return (
        <CartContext.Provider value={{...state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}