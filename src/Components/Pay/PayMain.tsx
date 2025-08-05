import PayDashIndi from "./PayComponents/PayDashIndi"
import Rewards from "./PayComponents/Rewards"

const PayMain = () => {
  return (
    <>
        <div className="pay-page w-full h-full">
            <div className="pay-sticker m-0 ">
                <a href="/" className="redirect-link">
                <img alt="amazon_pay" src="https://m.media-amazon.com/images/G/31/apay/dashboard/apay-sticker-mobile-t1._CB433219857_.png"/>
                </a>
            </div>
            <div className="empty border-t-[#f0f0f0] border-t-[8px]"/>
            <div className="pay-dashboard mb-0 p-0 bg-[#f0f0f0] border-b-[#f0f0f0] border-b-[8px] ">
                <div className="slider-container w-auto whitespace-nowrap h-[75px] overflow-y-hidden overflow-auto">
                    <PayDashIndi margin={true} isText={false} title={"Amazon Pay Balance"} about={"₹0.00"}/>
                    <PayDashIndi margin={false} isText={true} title={"Amazon Pay ICICI Card"} about={"Fill Application"}/>
                    <PayDashIndi margin={false} isText={true} title={"Saved Cards"} about={"Add/Pay"}/>
                    <PayDashIndi margin={false} isText={true} title={"Vouchers"} about={"View"}/>
                </div>
            </div>
            <Rewards/>
        </div>
    </>
  )
}

export default PayMain