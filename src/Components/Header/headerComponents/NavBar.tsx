import { useContext } from "react"
import { NavLink } from "react-router"
import { MenuContext } from "../../../Context/Context"


const NavBar = () => {
    const context = useContext(MenuContext)
    if(!context) {
        throw new Error("Menu Bar Error")
    }
    const {setIsMenuOpen} = context
    return (
        <nav className="nav-bar flex relative z-[inherit] h-[48px] w-full border-b-1 border-b-[#232f3e] bg-[#232f3e] flex-row flex-nowrap justify-between">
            <div className="left-nav shrink-0 flex-row flex-nowrap flex relative w-auto">
                <div className="menu-icon float-left p-[14px]" onClick={() => setIsMenuOpen(true)}> 
                    <i className="icons_1 menu-icon block w-5 h-5 bg-position-[-20px_-378px] bg-no-repeat"></i>
                </div>
                <div className="nav-logo ml-auto relative float-left z-20 mt-[13px]">
                    <NavLink to={"/"} className="clear-both inline-block cursor-pointer">
                        <span className="icons_1 float-left indent-[-500px] p-[10px_40px_0_20px] bg-position-[-185px_-236px] w-20 h-[28px] bg-no-repeat"></span>
                        <div className="nav-logo-in bg-position-[-160px_-209px] w-[14px] h-4 float-left m-[1px_0_0_1px] text-[13.5px] text-white leading-[14px] pt-[1px] font-[reg]">.in</div>
                    </NavLink>
                </div>
            </div>
            <div className="nav-right flex-row-reverse flex-wrap min-w-15 flex relative w-auto">
                <div className="user-name order-2 flex pl-[5px] leading-[48px] text-[13px] text-white">
                    <NavLink to={"/"} className="block text-white font-[reg] max-w-25 whitespace-nowrap overflow-hidden text-ellipsis"><b className='!font-[bold]'>Adithya</b> › </NavLink>
                </div>
                <div className="profile-icon order-1 flex p-[9px_0_12px_4px] relative w-39px">
                    <i className="profile-logo icons_1 block bg-position-[-141px_-300px] w-[35px] h-[27px]"></i>
                </div>
                <div className="car-logo !pl-[7px] order-0 flex p-[10px_18px_11px_12px]">
                    <div className="icons_1 order-2 w-[37px] bg-position-[-10px_-240px] h-[27px] static bg-no-repeat">
                        <span className="nav-count p-[0_0_0_6px] text-base text-[#f08804] block text-center leading-2.5 font-bold font-[bold]">0</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar