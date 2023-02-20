import {Link} from 'react-router-dom'

import useCategoryFetch from "../hooks/useCategoryFetch"
import useProductContext from "../hooks/useProductContext"

import ProductCard from "../components/product/productCard"

export default function CategoryProducts(){
    
    useCategoryFetch()
    const {category} = useProductContext()
    console.log(category)
    return(
        <div>
            <h1>Shop by Category</h1>
            <div className="m-8 flex flex-wrap gap-10">
                {
                    category.map(item => {

                        const url = `${item.category_type.type}/${item._id}`

                        return (
                            <div key={item._id}>
                                <Link to={url}>
                                    <ProductCard>
                                        {item}
                                    </ProductCard>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}