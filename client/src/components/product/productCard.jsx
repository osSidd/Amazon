export default function ProductCard({children}){

    const {name_description, price} = children

    return (
        <div className="bg-teal-200 w-fit p-2 ">
            <div>
                {name_description.name}
            </div>
            <div className="line-through text-gray-500 text-sm">
                {price.mrp}
            </div>
            <div>
                {price.selling_price}
            </div>
        </div>
    )
}