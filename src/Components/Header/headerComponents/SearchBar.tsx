

const SearchBar = () => {
    return (
        <div className="nav-search-bar flex h-12.5 ">
            <form action="" className="nav-searchbar bg-[#232f3e] block p-[2px_10px_5px_10px] relative h-12.5 w-full border-[rgba(0,0,0,.05)] border-b-1 flex-1 z-[inherit] mb-0">
                <div className="fill w-auto overflow-hidden whitespace-nowrap rounded-[8px_12px_12px_8px] h-[44px] m-0 font-normal relative bg-white">
                    <input placeholder='Search Amazon.in' type="text" id="nav-search" className=" absolute top-0 left-0 w-full h-full block p-[0_95px_0_10px] text-black text-[15px] font-[reg] border-0 outline-0 leading-normal bg-white" />
                </div>
                <div className="serch-right absolute top-0 right-0 z-1 flex w-auto">
                    <div className="serch-icon  !bg-[#febd69] rounded-[8px_8px_8px_8px] relative h-11 w-12.5 m-[2px_10px_5px_5px] border-0 cursor-pointer">
                        <input type="submit" className="rounded-[8px_8p_8px_8px] absolute top-0 left-0 w-full h-full cursor-pointer z-10 border-0 bg-transparent indent-[-1000px] leading-[1px] " />
                        <i className='icons_1 absolute top-2.5 left-3 pointer-none bg-position-[-73px_-239px] w-[27px] h-[25px] filter-[invert(100%)]'></i>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar