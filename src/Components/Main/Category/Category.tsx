import Icon from "./categoryComponents/Icon"


const Category = () => {
  return (
    <>
      <div className="category p-[10px_0] m-[2px_0] bg-white overflow-auto relative leading-[1px] overflow-x-scroll overflow-y-hidden whitespace-nowrap">
          <div className="category-icons">
            <Icon ml={true}/>
          </div>
      </div>
    </>
  )
}

export default Category