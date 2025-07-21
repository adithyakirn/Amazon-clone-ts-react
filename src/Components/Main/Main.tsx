import Category from "./Category/Category"
import DashBoard from "./DashBoard/DashBoard"
import Footer from "./Footer/Footer"
import ForYou from "./ForYou/ForYou"
import HeroWidget from "./HeroWidget/HeroWidget"


const Main = () => {
  return (
    <div className="main text-[#111] text-[15px] bg-[#dfdfdf]">
        <Category/>
        <HeroWidget/>
        <DashBoard/>
        <ForYou name="Deals for you" item="deals_for_you"/>
        <ForYou name="Get up to ₹150 cashback today | #CrazyLowPrices on Bazaar" item="get_upto_150"/>
        <ForYou name="Starting ₹99 | Delicious snacks & more" item="starting_99"/>
        <ForYou name="Beauty & makeup | Min. 35% off" item="beuty&makeup"/>
        <ForYou name="4+ star deals in Computers and Accessories" item="4+stars"/>
        <ForYou name="Based on your recent shopping trends" item="recent"/>
        <Footer/>
    </div>
  )
}

export default Main