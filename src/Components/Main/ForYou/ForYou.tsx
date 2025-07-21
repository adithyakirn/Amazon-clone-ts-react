import ForYouItems from "./ForYouComponents/ForYouItems";
type ForYouProps = {
    name: string;
    item: string;
}
const ForYou = ({ name, item }: ForYouProps) => {
    return (
        <>
        <div className="mt-[2px] mb-[2px] bg-white overflow-auto p-[12px_15px]">
            <div className="ForYou_header p-0 pb-[8px]">
                <h3 className="p-0 m-0 font-bold text-[18px] leading-[22.5px]">
                    <span className="font-[bold] font-normal">{name}</span>
                </h3>
            </div>
            <div className="p-0 relative mb-0 grid gap-2 grid-cols-[minmax(0,1fr)_minmax(0,1fr)] bg-white">
                <ForYouItems item={item} />
            </div>
            <div className="seedeals pt-[13px] font-normal leading-[19.5px] relative break-normal mx-h-[19.5px] ">
                <span className="inline-block w-full whitespace-nowrap text-[#2162a1] font-[reg]">See all deals</span>
            </div>
        </div>
        </>
    )
}

export default ForYou                                     