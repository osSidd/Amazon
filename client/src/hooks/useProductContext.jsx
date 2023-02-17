import { useContext } from "react";
import { ProductContext } from "../context/productContext";

export default function useProductContext(){
    const context = useContext(ProductContext)

    if(!context){
        throw new Error('context should be used within provider')
    }

    return context
}