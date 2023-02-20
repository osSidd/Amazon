import {Link} from 'react-router-dom'
import {BiCart} from 'react-icons/bi'

export default function Navbar(){
    return(
        <div className="flex items-center justify-between bg-slate-900 text-white py-1 px-4 h-18">
            <div>
                <Link to="/">
                    <span className='text-2xl font-semibold'>amazon.</span>
                    <span className='text-sm font-semibold'>clone</span>
                </Link>
            </div>
            <div className="flex ">
                <div className="text-black bg-gray-300 px-4 text-sm rounded-l-md">
                    <span className="">All</span>
                </div>
                <input type="search" className="bg-gray-200 py-1 w-96 px-2" placeholder="Search Amazon"/>
                <button className="bg-orange-300 w-9 rounded-r-md"></button>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className=''>0</div>
                <div className='text-3xl'><BiCart/></div>
            </div>
        </div>
    )
}