import { NavLink } from "react-router"
type PayProp = {
    isText: boolean
    title: string
    about: string
    margin: boolean
}
const PayDashIndi = ({ isText, title, about, margin }: PayProp) => {
    return (
        <div className={`${margin && "ml-[9px]"} inline-block mr-[8px] align-top w-[43.5%] mb-[1.3rem] `}>
            <div className="w-full h-[75px] rounded-[8px] bg-[#ffffff] block border-[#d5d9d9] border-[1px] p-[8px_20px_12px_20px]">
                <NavLink to={"/"} className="pay-header mr-[5%] float-left min-h-[1px] font-normal overflow-visible relative text-left -left-[10px] w-[82.5%] after:table after:content-[''] after:leading-[0] before:text-[0px]  before:table before:content-[''] before:leading-[0] after:text-[0px]">
                    <span className="text-[13px] text-[#002F36] font-normal font-[reg]">{title}</span>
                </NavLink>
                <div className="mt-[34.5px] relative text-[13px] text-[#002F36] w-full after:table after:content-[''] after:leading-[0] before:text-[0px] after:clear-both before:table before:content-[''] before:leading-[0] after:text-[0px]">
                    <div className="w-[82.5%] mr-[5%] float-left min-h-[1px] whitespace-nowrap overflow-hidden text-ellipsis relative text-left -left-[10px]">
                        <span className={` ${isText ? "text-[#00F]" : "text-[#008500] "} font-[reg] font-light`}>{about}</span>
                    </div>
                    <div className="mr-[0] float-right w-[12.5%] min-h-[1px] overflow-visible left-[10px] relative">
                        <img alt="" className="h-[18px]" src="https://m.media-amazon.com/images/G/31/apay/dashboard/arrow-symbol._CB458459168_.png" height="18" width="18" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayDashIndi