
const Selector = () => {
  return (
    <>
    {Array.from({length : 9}).map((_, index) => (
    <li key={index} className=" rounded-[20px] inline-block float-none h-[9px] list-none !m-[0_5px] bg-white border-[#888c8c] border-1 !p-0 w-[9px] relative leading-[1.6rem] first:bg-[#2162a1] first:border-[1px] first:border-[#2162a1]" ></li>
    ))}
    </>
  )
}

export default Selector