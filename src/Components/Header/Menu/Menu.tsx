
import { useContext } from "react"
import AmazonHome from "./menuComponents/AmazonHome"
import CategorySection from "./menuComponents/CategorySection"
import HeaderBottom from "./menuComponents/HeaderBottom"
import HeaderTop from "./menuComponents/HeaderTop"
import MenuSeparator from "./menuComponents/MenuSeparator"
import { MenuContext } from "../../../Context/Context"

const Menu = () => {
const context = useContext(MenuContext)
if (!context) {
  throw new Error("Menu Closing Error");
}
const {isMenuOpen, setIsMenuOpen} = context
    return (
        <div className={`menuBar fixed top-0 right-0 left-0 bottom-0 z-10000 block transition-all duration-100 ease-in-out ${isMenuOpen ? "opacity-100 translate-x-0 z-1000" : "opacity-0 z-[-1] -translate-x-[300px]"}`}>
            <div className="back-canvas bg-[rgba(0,0,0,.8)] absolute will-change-auto h-full w-full flex">
                <div className="menu-content fixed bg-white flex-col h-full shadow-[4px_0_10px_0_rgba(0,0,0,.4)] will-change-transform flex min-w-[265px] max-w-[calc(100vw-50px)] w-[80vw]">
                    <div className="menu-content-wrapper relative overflow-x-hidden h-full flex shrink-10 overflow-y-scroll">
                        <div className="close-icon-container fixed w-5 h-5 flex icons_1 bg-no-repeat bg-position-[-132px_-173px] right-[-12vw] top-10" onClick={() => setIsMenuOpen(false)}></div>
                        <div className="menu-content-absolute absolute pb-[30px] m-0 right-0 left-0 bottom-0 top-0 overflow-scroll will-change-transform block">
                            <section className='menu-header flex flex-col justify-end bg-[#232f3e] text-white'>
                                <HeaderTop />
                                <HeaderBottom />
                                <AmazonHome />
                            </section>
                            <MenuSeparator isFirst={true}/>
                            <CategorySection item="Trending" />
                            <MenuSeparator isFirst={false} />
                            <CategorySection item="Top Categories for You" />
                            <MenuSeparator isFirst={false} />
                            <CategorySection item="Programs & Features" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu