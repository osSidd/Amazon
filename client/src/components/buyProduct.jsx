import useProductContext from "../hooks/useProductContext"
import useCartContext from "../hooks/useCartContext"
import { useState } from "react"

export default function BuyProduct(){
    
    const {dispatch} = useCartContext()
    const [addProduct, setAddProduct] = useState(false)

    function addToCart(){
        dispatch({
            type: 'ADD_TO_CART',
            payload: 1
        })
        setAddProduct(true)
    }

    const {product} = useProductContext()

    const deliveryDate = function (days){
        let date = new Date()
        date.setDate(date.getDate() + days)
        return new Date(date).toLocaleString();
    }
    
    return(
        <div className="">
            {product._id && <div>
               <div>
                    <span className="align-top text-sm">&#x20b9;</span>
                    <span className="text-3xl">{product.price.selling_price}</span>
                </div>
                
                <div>{deliveryDate(5)}</div>
                
                <div className="my-8">
                    {product.quantity.stock >= 5 ? <div className="text-green-700 text-xl font-semibold">In Stock</div> : <div className="text-red-500">Only {product.quantity.stock} left</div>}
                    <div><span>Sold by </span>{product.seller || 'Amazon'}
                    <span> and Fulfilled by Amazon</span></div>
                </div>


                <div>
                    <button onClick={addToCart} disabled={addProduct} className="btn bg-yellow-400 hover:bg-yellow-500">
                        {addProduct ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                    <button className="btn bg-orange-400 hover:bg-orange-500">Buy Now</button>
                </div>

                <div className="flex">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </span>
                    <span>Secure transaction</span>
                </div>

            </div>}
        </div>
    )
}