import DashItem from "./DashItem"

const DashCardGroup = () => {
  return (
    <>
     <li className="!m-[0_8px_0_0] inline-block break-words relative h-[180px] rounded-[4px] float-left shadow-[0_2px_5px_rgba(15,17,17,.15)] overflow-hidden bg-white min-w-[125px] max-w-[225px] ">
        <div className="flex h-[180px] max-w-[168px] p-[4px_0] w-full grow-1 flex-col flex-wrap">
          <DashItem name="Amazon Pay" img="https://m.media-amazon.com/images/I/012911xUB5L._SS140_.png"/>
          <DashItem name="Recharge" img="https://m.media-amazon.com/images/I/01G5s6LW+iL._SS140_.png"/>
          <DashItem name="Rewards" img="https://m.media-amazon.com/images/I/01Pi9W2Y7LL._SS140_.png"/>
          <DashItem name="Pay Bills" img="https://m.media-amazon.com/images/I/11v3IKVQSBL._SS140_.png"/>
            </div>
          </li>
    </>
  )
}

export default DashCardGroup