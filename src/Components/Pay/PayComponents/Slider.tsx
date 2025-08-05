const Slider = () => {
    return (
        <>
            <div className="rounded-[8px] flex-col flex bg-[#f4f4f5] gap-2 font-[reg] p-[0_12px] relative overflow-hidden min-h-[32px] ">
                <div className="slide absolute w-full h-full flex items-center transition-[transform_1s_ease-in-out,_-webkit-transform_1s_ease-in-out]">
                    <div className="inner-content text-[12px] font-normal leading-[16px] text-[#008296] font-[reg]">
                        You have completed 11 transactions in last 3 months.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider