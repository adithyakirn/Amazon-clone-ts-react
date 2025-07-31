type RewardDash = {
    header : string
    img : string 
    sub : string
}
const RewardsDash = ({header, img, sub} : RewardDash) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="cashback-earned text-[12px] font-normal font-[reg] leading-[16px] text-[#5a6989]">{header}</div>
            <div className="flex justify-start items-center flex-row gap-[6px]">
                <div className="flex items-center justify-center"><img className="w-[18px] h-[18px] flex justify-center items-center" src={img} alt="" /></div>
                <div className="font-[bold] text-[#31446b] leading-[1.35]" style={{ fontSize: "14px", fontWeight: "400" }}>{sub}</div>
            </div>
        </div>
    )
}

export default RewardsDash