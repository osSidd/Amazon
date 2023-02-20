import {Link} from 'react-router-dom'

import useCategoriesFetch from "../hooks/useCategoriesFetch"
import useProductContext from "../hooks/useProductContext"

import CategoryCard from '../components/category/categoryCard'

export default function Home(){

    useCategoriesFetch()
    const {categories} = useProductContext()
    console.log(categories)

    return(
        <div className='flex flex-wrap gap-10 m-8'>
            {
                categories && categories.map(item => {
                    return (
                        <div key={item}>
                            <Link to={`product/${item}`}>   
                                <CategoryCard>
                                    {item}
                                </CategoryCard>                                 
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}