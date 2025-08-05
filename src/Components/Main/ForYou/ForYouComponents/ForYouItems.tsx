import { useEffect, useState } from "react";

type ForYouJson = {
    id : string ;
    src : string;
    text : string;
    hasRed : boolean
}
 type ForYouResponse = {
    deals_for_you : ForYouJson[]
 }
 type ForYouItemsProp = {
    item : string
 }
const ForYouItems = ({item} : ForYouItemsProp) => {
      const [res,setRes] = useState<ForYouJson[]>([])
    useEffect(() => {
        const fetchData = async() : Promise<void> => {
            // let loading = false
            try{
                // loading = true
                const data = await fetch("./JSON/Amazon.json")
                const res:ForYouResponse = await data.json()
                setRes(res[item as keyof typeof res] ?? [])
            }
            catch(error){
                console.log(error); 
            }
            finally{
                // loading = false
            }
        }
        fetchData()
    },[item])
  return (
    <>
    {Array.isArray(res) && res.map((el) => (
       <div key={el.id} className="mb-0 relative flex flex-col h-ful">
        <div className="flex-1 relative h-full w-full after:bg-[#0f1111] after:opacity-[.03] after:w-full after:h-[169px] after:absolute after:top-0 after:content-[''] before:content-[''] before:block before:h-0 before:pb-[100%] sm:before:pb-[50%]">
          <img src={el.src} alt="" className={`absolute h-[169px] mix-blend-multiply object-contain w-full ${el.hasRed ? "p-2" : "p-0"}bottom-0 left-0 max-h-full max-w-full right-0 top-0`} />
        </div>
        <div className="deals pt-1 m-0 items-center flex text-[12px] ">
          <div className="deals-wrapper flex flex-wrap gap-x-1.5 gap-y-1 items-center">
            <div className={`percentage ${el.hasRed && "bg-[#CC0C39] text-white rounded-[4px]"}  inline-block font-normal leading-3 min-w-[fit-content] p-[4px_6px]`}>
              <span className={`for-you font-[reg] ${el.hasRed ? "text-[11px] leading-[16.5px]" : "leading-[19.5px] text-[15px]"}`}>{el.text}</span>
            </div>
            <div className="limited bg-white text-[#CC0C39] flex-1 inline-block font-bold leading-3">
              {el.hasRed && <span className="text-[11px] leading-[16.5px]">Limited Time Deal</span>}
            </div>
          </div>
        </div>
       </div>
    ))}
    </>
  )
}

export default ForYouItems