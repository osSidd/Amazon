import useProductContext from '../hooks/useProductContext'

export default function BreadCrumbs(){

    const {product} = useProductContext()

    return (
        <div>{ product._id && 
            <div className="mt-4 ml-4 text-sm text-gray-700">
                {Object.values(product.category_type).join(' > ')}
            </div>
            }
        </div>
    )
}