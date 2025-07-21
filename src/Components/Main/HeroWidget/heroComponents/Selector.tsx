type SelectorProp = {
    index : number;
    setIndex : any;
}
const Selector = ({index, setIndex} : SelectorProp) => {
  return (
    <>
    {Array.from({length : 9}).map((_, i) => (
    <li key={i} className={`z-1 rounded-[20px] inline-block float-none h-[9px] list-none !m-[0_5px] bg-white border-[#888c8c] border-1 !p-0 w-[9px] relative leading-[1.6rem] ${index === i && "!bg-[#2162a1] !border-[1px] !border-[#2162a1]"}`} onClick={() => setIndex(i)}></li>
    ))}
    </>
  )
}

export default Selector