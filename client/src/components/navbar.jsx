export default function Navbar(){
    return(
        <div className="flex items-center justify-between bg-slate-900 text-white py-1 px-2 h-15">
            <div>
                Amazon
            </div>
            <div className="flex ">
                <div className="text-black bg-gray-300 px-4 text-sm rounded-l-md">
                    <span className="">All</span>
                </div>
                <input type="search" className="bg-gray-200 py-1 w-96 px-2" placeholder="Search Amazon"/>
                <button className="bg-orange-300 w-9 rounded-r-md"></button>
            </div>
            <div>
                <div>0</div>
                <div>Icon</div>
            </div>
        </div>
    )
}