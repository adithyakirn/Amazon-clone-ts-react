type DashCardProps = {
    name: string;
    img: string;
    bg: boolean;
}
const DashPropCard = ({ name, img, bg }: DashCardProps) => {
    return (
        <>
            <li className="!m-[0_8px_0_0] inline-block break-words relative h-[180px] rounded-[4px] float-left shadow-[0_2px_5px_rgba(15,17,17,.15)] overflow-hidden bg-white min-w-[125px] max-w-[136px] ">
                <div className="text-container p-[5px_5px_0] shrink-0">
                    <span className="break-words relative block text-[#0f1111] text-[15px] leading-[20.25px] font-normal font-[reg] line-clamp-2 overflow-hidden whitespace-[inherit]">{name}</span>
                </div>
                <div className={`img-container flex flex-col  rounded-[0_0_4px_4px] p-[3px_5px] grow-1 h-[129px] ${bg && "bg-[rgba(15,17,17,.03)]"} justify-end mt-[4.5px] overflow-hidden w-[136px]`}>
                    <img alt="" className="flex h-full m-0 object-contain justify-center mix-blend-multiply" src={img} />
                </div>
            </li>
        </>
    )
}

export default DashPropCard