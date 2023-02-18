import useProductFetch from "../hooks/useProductFetch"
import Product from '../components/product/product'

export default function SpecificProduct(){

    const {product} = useProductFetch()
    console.log(product)
    return(
        <div>
            specificProduct
            <Product
                product={product}
            />
        </div>
    )
}