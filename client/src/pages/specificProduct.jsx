import useProductFetch from "../hooks/useProductFetch"

import BreadCrumbs from "../components/breadCrumbs"
import Product from '../components/product/product'
import BuyProduct from "../components/buyProduct"

export default function SpecificProduct(){

    useProductFetch()

    return(
        <div>
            <BreadCrumbs/>
            <div className="md:grid md:grid-cols-3 md:gap-10 p-2">
                <Product/>
                <BuyProduct/>
            </div>
        </div>
    )
}