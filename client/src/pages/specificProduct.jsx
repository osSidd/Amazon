import useProductFetch from "../hooks/useProductFetch"

import Product from '../components/product/product'

export default function SpecificProduct(){

    useProductFetch()

    return(
        <div>
            <Product/>
        </div>
    )
}