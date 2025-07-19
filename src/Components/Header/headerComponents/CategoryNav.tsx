
import { NavLink } from 'react-router'

const CategoryNav = () => {
    return (
        <div className="shop-by pt-3 w-full bg-[#232f3e] overflow-x-scroll overflow-y-hidden h-[45px] flex">
            <ul className="contents p-0 m-[0_0_0_1.8rem] text-[#0f1111]">
                <li className="list-none ">
                    <div>
                        <NavLink to={"/"} className="m-[0_0_20px_15px] pr-[3px] text-[15px] font-normal font-[reg] text-white relative float-left whitespace-nowrap leading-[15px]">
                            Category <i className='absolute top-[-14px] left-0 text-[11px] font-normal font-[reg] not-italic'>Shop By</i>
                        </NavLink>
                    </div>
                </li>
                <li className="list-none ">
                    <div>
                        <NavLink to={"/"} className="m-[0_0_20px_15px] pr-[3px] text-[15px] font-normal font-[reg] text-white relative float-left whitespace-nowrap leading-[15px]">Deals </NavLink>
                    </div>
                </li>
                <li className="list-none ">
                    <div>
                        <NavLink to={"/"} className="m-[0_0_20px_15px] pr-[3px] text-[15px] font-normal font-[reg] text-white relative float-left whitespace-nowrap leading-[15px]">Sell </NavLink>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default CategoryNav