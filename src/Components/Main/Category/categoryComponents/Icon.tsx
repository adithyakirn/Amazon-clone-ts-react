

type IconProp = {
    ml : boolean
}
const Icon = ({ml} : IconProp) => {

  return (
    <>
        <div className={`individual-category-icons w-[18%] inline-block mb-2.5 p-0 ${ml && "ml-[5px]"}`}>
            <div className="icon-wrapper mb-0 h-[55px] p-0 text-center"> {/* should implement the onclick */}
                <img alt="Prime" className="h-12.5 w-12.5 block m-[0_auto_6px]" src="https://m.media-amazon.com/images/I/21r5rCvcAQL._SX100_SY100_.jpg"></img>
                <p className="icon-title text-[12px] leading-[15px] text-black overflow-hidden text-ellipsis whitespace-nowrap font-normal font-[reg]">Prime</p>
            </div>
        </div>
    </>
  )
}

export default Icon

 