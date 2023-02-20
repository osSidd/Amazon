import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useProductContext from './useProductContext'

export default function useCategoryFetch(){

    const params = useParams()
    const {categoryId} = params
    const {dispatch} = useProductContext()

    useEffect(() => {
        async function fetchCategory(){
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/${categoryId}`)
            const json = await response.json()

            if(response.ok){
                dispatch({
                    type: 'SET_CATEGORY',
                    payload: json.products
                })
            }
        }
        fetchCategory()
    }, [])
}