type PrimeProps ={
    text : string;
    src : string
}
const PrimeSections = ({text, src} : PrimeProps) => {
    return (
        <>
            <tr className="bg-[rgba(235,247,255,.6)] text-[10px] font-normal align-middle text-center mb-[12px]">
                <td className="text-center p-[2.8px_2px] align-top mb-0 flex flex-row items-center text-[10px] font-normal mt-[2px] ">
                    <img alt="Prime Delivery" className="!h-[25px]" src={src} height="25" width="25" />
                    <div className="ml-[16px] items-center text-[10px] font-normal mt-[2px] font-[bold]">{text}</div>
                </td>
                <td className="border-b-0 border-l-[#0578ff] border-[2px] border-t-0 border-r-[#0578ff] font-normal text-center !p-[2.8px_2px]"></td>
                <td className=" font-normal text-center !p-[2.8px_2px]"></td>
                <td className=" font-normal text-center !p-[2.8px_2px]"></td>
            </tr>
        </>
    )
}

export default PrimeSections