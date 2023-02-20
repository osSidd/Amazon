import { useEffect } from "react";

import useProductContext from './useProductContext'

export default function useCategoriesFetch(){

    const {dispatch} = useProductContext()

    useEffect(() => {
        async function fetchCategories(){
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}`)
            const json = await response.json()

            if(response.ok){
                dispatch({
                    type: 'SET_CATEGORIES',
                    payload: json.categories
                })
            }
        }
        fetchCategories()
    }, [])
}