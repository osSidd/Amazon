import useProductContext from "../../hooks/useProductContext"

import BrandKeyword from "./brandKeyword"
import Price from "./price"

export default function product(){

    const {product} = useProductContext()

    return(
        <div className="col-start-2">
            { product._id &&
              <div>
                <BrandKeyword product={product}/>
                <Price product={product}/>
                <div className="my-2">
                    <div className="font-bold">Description:</div>
                    <div>{product.name_description.description}</div>
                </div>
              </div>
            }
        </div>
    )
}