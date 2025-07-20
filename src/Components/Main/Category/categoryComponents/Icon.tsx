import { useEffect, useState } from "react"
type CategoryIcon = {
  id: string;
  name: string;
  img: string;
}
type CategoryResponse = {
  category_icons : CategoryIcon[]
}
const Icon = () => {
  const [res, setRes] = useState<CategoryIcon[]>([])
useEffect(() => {
  const fetchData = async (): Promise<void> => {
    let isLoading = false
    try {
      isLoading = true
      const data = await fetch("./JSON/Amazon.json")
      const res :CategoryResponse = await data.json()
      setRes(res.category_icons)
    }
    catch (error) {
      console.error(error);
    }
    finally {
      isLoading = false
    }
  }
  fetchData()
},[])
  return (
    <>
    <div className="category-icons scroll-w-none">
      {res.map((el) => { return(
        <div key={el.id} className={`individual-category-icons w-[18%] inline-block mb-2.5 p-0 first:ml-[5px]`}>
        <div className="icon-wrapper mb-0 h-[55px] p-0 text-center"> {/* should implement the onclick */}
          <img alt="Prime" className="h-12.5 w-12.5 block m-[0_auto_6px]" src={el.img}></img>
          <p className="icon-title text-[12px] leading-[15px] text-black overflow-hidden text-ellipsis whitespace-nowrap font-normal font-[reg]">{el.name}</p>
        </div>
      </div>
      )
      })}
    </div>
    </>
  )
}
export default Icon

