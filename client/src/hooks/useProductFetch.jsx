import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useProductContext from './useProductContext'

export default function useProductFetch(){

    const params = useParams()
    const {categoryId, typeId, productId} = params
    const {product, dispatch} = useProductContext()

    useEffect(() => {
        async function fetchProduct(){
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/${categoryId}/${typeId}/${productId}`)
            const json = await response.json()

            if(response.ok){
                console.log(json)
                dispatch({
                    type: 'SET_PRODUCT',
                    payload: json.product
                })
            }
        }
        fetchProduct()
    }, [])
}