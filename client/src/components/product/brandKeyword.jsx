export default function BrandKeyword({product}){
    return (
        <div>
            <div className="text-2xl">
                {product.name_description.keywords}
            </div>
            <div className="border-b border-gray-300 my-2">
                <span className="font-bold">Brand: </span>
                <span className="text-blue-500">{product.brand_details.brand_name}</span>
            </div>    
        </div>
    )
}