type PrimeSectionProps = {
    header: string
    isSvg: boolean
    svgTick: boolean
    svgfalse: boolean
    svgTickEl: any
    svgfalseEl: any
    text_1: string
    text_2: string
}

const PrimeTr = ({ header, isSvg, svgfalse, svgTick, svgTickEl, svgfalseEl, text_1, text_2 }: PrimeSectionProps) => {
    return (
        <>
            <tr className="bg-[rgba(235,247,255,.6)] text-[10px] font-normal align-middle text-center mb-[12px] ">
                <td className="text-left p-[2.8px_2px] align-top font-[reg] leading-[15px]">{header}</td>
                <td className=" font-normal text-center !p-[2.8px_2px] border-[2px] border-[#0578ff] border-t-0 border-b-0">
                    {isSvg? svgTick? svgTickEl: svgfalse? svgfalseEl : "" : ""}
                </td>
                <td className=" font-normal text-center !p-[2.8px_2px]">
                    {isSvg? svgTick? svgTickEl: svgfalse? svgfalseEl: text_1: text_1}
                </td>
                <td className=" font-normal text-center !p-[2.8px_2px]">
                    {isSvg? svgTick? svgTickEl: svgfalse? svgfalseEl: text_2: text_2}
                </td>
            </tr>
        </>
    )
}

export default PrimeTr