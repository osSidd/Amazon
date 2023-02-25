import {Link} from 'react-router-dom'
import {BiCart} from 'react-icons/bi'
import useCartContext from '../hooks/useCartContext'

export default function Navbar(){

    const {cart} = useCartContext()

    return(
        <div className="flex items-center justify-between bg-slate-900 text-white py-2 px-4 h-20">
            <div>
                <Link to="/">
                    <span className='text-2xl font-semibold'>amazon.</span>
                    <span className='text-sm font-semibold'>clone</span>
                </Link>
            </div>
            <div className='relative h-10 w-10 '>
                <div className='absolute right-5 top-0 z-10 px-1 font-bold text-orange-500 text-xl'>{cart}</div>
                <div className='absolute right-2 top-3 text-5xl'><BiCart/></div>
            </div>
        </div>
    )
}