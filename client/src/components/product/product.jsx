import useProductContext from "../../hooks/useProductContext"

export default function product(){

    const {product} = useProductContext()

    return(
        <div className="w-5/12 ml-auto mr-10 mt-10">
            { product._id &&
              <div>
                <div className="text-2xl">
                    {product.name_description.keywords}
                </div>
                <div className="border-b border-gray-300 my-2">
                    <span className="font-bold">Brand: </span>
                    <span className="text-blue-500">{product.brand_details.brand_name}</span>
                </div>
                <div className="text-xl my-2 border-b border-gray-300">
                    {product.quantity.stock >= 5 ? <div className="text-green-700">In Stock</div> : <div className="text-red-500">Only {product.quantity.stock} left</div>}
                    <div className="text-2xl font-semibold"><span className="mr-1 font-normal text-sm align-top">&#x20b9;</span>{product.price.selling_price}</div>
                    <div className="text-sm text-gray-500">
                        M.R.P.: <span className="align-top">&#x20b9;</span>
                        <span className="line-through ml-1">{product.price.mrp}</span>
                    </div>
                </div>
                <div className="my-2">
                    <div className="font-bold">Description:</div>
                    <div>{product.name_description.description}</div>
                </div>
              </div>
            }
        </div>
    )
}