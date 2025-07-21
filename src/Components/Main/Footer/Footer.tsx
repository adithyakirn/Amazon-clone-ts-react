
const Footer = () => {
    const footerRight = ["Your Orders", "Amazon App Download", "Your Lists", "Your Recently Viewed Items", "Recalls and Product Safety Alerts", "Customer Service"]
    const footerLeft = ["Adithya's Amazon.in", "Amazon Pay", "Amazon Live", "Your Account", "Returns", "Sell", "Help"]
    const footerEnd = ["Conditions of Use", "Privacy Notice", "Interest-Based Ads"]
    return (
        <footer className="block pb-[35px] relative w-full min-w-[200px] bg-[#0D141E] font-[reg] text-[12px] leading-[1em] ">
            <div className="to-top h-[50px] pt-[5px] bg-[#37475A] shadow-none block text-center border-b-[#cdcdcd] ">
                <i className="footer-icon border-solid border-[5px] border-transparent border-t-0 border-b-[5px] border-b-[#ccc] w-0 h-0 text-[0px] leading-0 inline-block"></i>
                <b className="footer-header text-white font-[reg] font-normal block text-[11px] leading-[30px] uppercase">Top of page</b>
            </div>
            <ul className="footer-ul m-0 p-[0_20px_25px_20px] bg-[#232F3E] border-0 overflow-hidden ">
                {footerRight.map((el, index) => (
                    <li key={index} className="w-[50%] block mb-0 !mt-[25px] border-b-0 list-none m-0 !pl-1 text-black text-[15px] leading-[16px] float-right clear-right">
                        <span className="text-white whitespace-normal outline-0 inline-block max-w-full text-ellipsis break-wordsl">{el}</span>
                    </li>
                ))}
                {footerLeft.map((el, index) => (
                    <li key={index} className="w-[50%] block mb-0 !mt-[25px] border-b-0 list-none m-0 p-0 text-black text-[15px] leading-[16px] !pr-1">
                        <span className="text-white whitespace-nowrap outline-0 inline-block max-w-full text-ellipsis">{el}</span>
                    </li>
                ))}
            </ul>
            <div className="lang pt-[25px] pb-[1em] text-center">
                <div className="wrapper-lang !inline-block text-[14px] p-[14px_12.6px] text-left">
                    <div className="icon_glob bg-position-[-77px_-24px] bg-size-[194px_295px] bg-[url(https://m.media-amazon.com/images/S/sash/vqXWsNPg$9994Pg.png)] w-[15px] h-[15px] top-[2.8px] -left-[8.4px] relative inline-block"></div>
                    <span className="text-footer text-[#ccc]">English</span>
                </div>
            </div>
            <div className="switch m-0 p-0 text-white text-[15px] text-center leading-[20px] !pl-[5px]">Switch Accounts</div>
            <div className="signout m-0 p-[25px_0_25px_0] text-white text-[15px] text-center leading-[20px] !pl-[5px]">Sign Out</div>
            <ul className="footer-cred mb-2.5 leading-[15px] text-center p-0 min-h-[11px]">
                {footerEnd.map((el, index) => (
                    <li key={index} className="list-none m-0 p-0 inline-block break-words">
                        <span className="text-[#ccc] inline-block p-[0_9.5px] text-[11px] ">{el}</span>
                    </li>
                ))}
            </ul>
            <div className="copyright text-[#ccc] text-[11px] text-center mb-2.5">© 1996-2025, Amazon.com, Inc. and its affiliates</div>
            <div className="legal text-center text-[10px] mt-[15px] bg-[#232F3E]"></div>
        </footer>
    )
}

export default Footer