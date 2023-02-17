import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useProductFetch(){

    const params = useParams()
    const {category, type, product} = params

    useEffect(() => {
        async function fetchProduct(){
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/${category}/${type}/${product}`)
            const json = await response.json()

            if(response.ok){
                console.log(json)
            }
        }
        fetchProduct()
    })
}