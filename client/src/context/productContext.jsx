import { useReducer } from "react";
import { createContext } from "react";

export const ProductContext = createContext()

function reducer(state,action){
    switch(action.type){
        case 'SET_PRODUCT':
            return {
                ...state,
                product: action.payload
            }
        default:
            return state
    }
}

export default function ProductContextProvider({children}){
    const [state, dispatch] = useReducer(reducer, {
        product: {}
    })

    return (<ProductContext.Provider value={{...state, dispatch}}>
               {children}
           </ProductContext.Provider>)
}