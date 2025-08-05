import RewardsDash from "./RewardsDash"
import Slider from "./Slider"

const Rewards = () => {
  return (
    <div className="p-[9px]">
    <div className="bg-white p-[12px] flex-col flex justify-between gap-[10px] border-[#d6dae1] border-1 rounded-[12px]">
        <div className="rewards-header text-[#232f3e] text-[16px] font-normal font-[bold]">
            Your Rewards
        </div>
        <div className="flex flex-row gap-3 justify-between">
        <RewardsDash 
        header="Cashback Earned" 
        img="https://m.media-amazon.com/images/G/31/img17/APay_Rewards/Rewards_Logo/Widget_Rupee_Symbol.svg" 
        sub="₹84"/>
        <RewardsDash 
        header="Offers Collected" 
        img="https://m.media-amazon.com/images/G/31/img17/APay_Rewards/Rewards_Logo/Widget_Collected_Offers.svg" 
        sub="0"/>
        <RewardsDash 
        header="Scratch cards" 
        img="https://m.media-amazon.com/images/G/31/img17/APay_Rewards/Rewards_Logo/Widget_Scratch_Card.svg" 
        sub="0"/>
        </div>
        <Slider/>
    </div>
    </div>
  )
}

export default Rewards