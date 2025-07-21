import DashCardGroup from "./dashComponents/DashCardGroup"
import DashPropCard from "./dashComponents/DashPropCard"

const DashBoard = () => {
  return (
    <>
      <div className="dash-mainContainer h-[190px] w-full overflow-x-scroll overflow-y-hidden relative">
        <ul className="dash-ul !m-[5px_0_5px_8px] block p-0 w-max text-[#0f1111] h-full">
         <DashCardGroup/>
         <DashPropCard bg={true} name="Keep shopping for Screen protectors" img="https://m.media-amazon.com/images/I/41+DbSi5H4L._MCnd_AC_.jpg"/>
         <DashPropCard bg={true} name="Keep shopping for Audio..." img="https://m.media-amazon.com/images/I/31HiTkJREAL._MCnd_AC_.jpg"/>
         <DashPropCard bg={false} name="Deal related to your saved items" img="https://m.media-amazon.com/images/I/71mO--Jd-RL._AC_SS250_.jpg"/>
         <DashPropCard bg={false} name="Recommended deal for you" img="https://m.media-amazon.com/images/I/61Yv2WDePfL._AC_SS250_.jpg"/>
         <DashPropCard bg={false} name="Buy it again" img="https://m.media-amazon.com/images/I/617SdE2Q1TL._AC_SS250_.jpg"/>
         <DashPropCard bg={false} name="Deal for you in Computers and…" img="https://m.media-amazon.com/images/I/71b90iUIqML._AC_SS250_.jpg"/>
         <DashPropCard bg={false} name="4+ star deal for you" img="https://m.media-amazon.com/images/I/71cVxIHJSaL._AC_SS250_.jpg"/>
         <DashPropCard bg={true} name="Keep shopping for Men's wrist..." img="https://m.media-amazon.com/images/I/51xf16JWgfL._MCnd_AC_.jpg"/>
        </ul>
      </div>
    </>
  )
}

export default DashBoard