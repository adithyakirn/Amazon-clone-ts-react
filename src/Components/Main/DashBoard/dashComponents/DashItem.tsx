
type DashProps = {
    name : string;
    img : string;
}
const DashItem = ({name,img}:DashProps) => {
    return (
        <>
            <div className="amazon-pay min-h-[1px] overflow-visible float-left h-[50%] font-[reg] m-[0_4px] p-0">
                <img alt={name} className="block h-[64px] m-[0_12px] p-[10px_0_2px]" src={img} />
                <p className="text-black text-[10px] leading-[13px] mb-[6px] max-h-[15px] overflow-hidden text-center text-ellipsis whitespace-nowrap">{name}</p>
            </div>
        </>
    )
}

export default DashItem