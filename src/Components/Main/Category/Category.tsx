import Icon from "./categoryComponents/Icon"

const Category = () => {
  return (
    <>
      <div className="category m-[2px_0] p-[10px_0_17px_0] bg-white overflow-auto relative leading-[1px] overflow-x-scroll overflow-y-hidden whitespace-nowrap" style={{scrollbarWidth : "none"}}>
       <Icon/>
      </div>
    </>
  )
}

export default Category