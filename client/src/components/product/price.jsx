export default function Price({product}){

    function discount(){
        const {mrp, selling_price} = product.price
        return Math.floor(((mrp - selling_price)/mrp)*100);
    }

    return (
        <div>
            <div className="text-xl my-2 border-b border-gray-300">
                
                <div className="text-2xl">
                    <span className="text-red-400 mr-2">-{discount()}%</span>
                    <span className="mr-1 font-normal text-sm align-top">&#x20b9;
                    </span>
                    <span className="font-semibold">{product.price.selling_price}</span>
                </div>
                <div className="text-sm text-gray-500">
                    M.R.P.: <span className="align-top">&#x20b9;</span>
                    <span className="line-through ml-1">{product.price.mrp}</span>
                </div>
                <div className="text-sm">Inclusive of all taxes</div>
            </div>
        </div>
    )
}