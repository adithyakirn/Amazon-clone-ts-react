type CategoryProps = {
    item : string
}
const CategorySection = ({item} : CategoryProps) => {
    const listItems = [
            {
                title : 'Trending',
                items : ['Bestsellers', 'New Releases', 'Movers and Shakers']
            },{
                title : 'Top Categories for You',
                items : ['Electronics', 'Home & Kitchen', 'Computers & Accessories', 'Beauty', 'See All Categories']
            },{
                title : 'Programs & Features',
                items : ["Today's Deals", "Amazon Bazaar", "Amazon Pay", "Amazon Launchpad", "Handloom and Handcraft", "Amazon Saheli", "Amazon Custom", "Try Prime", "Buy more, Save more", "Sell on Amazone", "International Brands"]
            }
        ]
  return (
    <>
      <section className="category-section h-auto transition-[height_.4s_cubic-bezier(.4,0,.2,1),opacity_.4s_cubic-bezier(.4,0,.6,1)] block ">
        <div className="section-header font-[bold] font-normal text-[#111] text-[19px] leading-6 inline-block items-center p-[15px_20px]">{item}</div>
        <ul className="catefory-ul p-0 m-0 text-[#0f1111]">
            {listItems.map((el) => {
            return (
            item === el.title && el.items.map(item => 
                <li key={item} className="list-none break-words m-0 flex center p-[15px_20px_17px_20px] text-[16px] text-[#111] font-[reg]">{item}</li>
            )
            )
        })}
        </ul>
        </section>  
    </>
  )
}

export default CategorySection