import PriceDetails from "./PrimeComponents/PriceDetails"
import PrimeHeader from "./PrimeComponents/PrimeHeader"
import PrimeHero from "./PrimeComponents/PrimeHero"

const PrimeMain = () => {
  return (
    <>
        <div className="main-prime min-w-50 p-[12px_14px_28px_14px] m-auto !mb-[1.2rem]">
            <PrimeHeader/>
            <PrimeHero/>
            <PriceDetails/>
        </div>
    </>
  )
}

export default PrimeMain